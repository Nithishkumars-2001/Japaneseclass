/* =========================================================
   PRACTICE ENGINE
   Shared logic for checking user's Japanese translation
   against the correct answer: spelling + basic grammar
   (particle / word-order) checks, with Tamil + English
   explanations for every correction.
   ========================================================= */

/**
 * Normalize a Japanese string for comparison:
 * - trims whitespace
 * - removes all spaces (Japanese is not space-separated)
 * - converts full-width punctuation variance is left as-is (checked separately)
 */
function normalizeJP(str) {
  return str.replace(/\s+/g, "").trim();
}

/**
 * Tokenize a Japanese sentence into rough "chunks" using the
 * provided particle list as split points, so we can compare
 * word-by-word / particle-by-particle for grammar feedback.
 */
const PARTICLES = ["は", "が", "を", "に", "で", "と", "も", "の", "へ", "から", "まで", "ね", "よ", "か"];

function tokenizeJP(str) {
  // Simple segmentation: split keeping particles as their own tokens
  let tokens = [];
  let buffer = "";
  const chars = Array.from(str);
  for (let i = 0; i < chars.length; i++) {
    buffer += chars[i];
    // check if buffer end matches a particle and next char isn't part of a longer particle
    for (const p of PARTICLES) {
      if (buffer.endsWith(p)) {
        const word = buffer.slice(0, buffer.length - p.length);
        if (word) tokens.push(word);
        tokens.push(p);
        buffer = "";
        break;
      }
    }
  }
  if (buffer) tokens.push(buffer);
  return tokens;
}

/**
 * Levenshtein distance for character-level spelling similarity
 */
function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[a.length][b.length];
}

function similarityPercent(a, b) {
  if (a.length === 0 && b.length === 0) return 100;
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  return Math.max(0, Math.round((1 - dist / maxLen) * 100));
}

/**
 * Build an HTML diff highlighting the user's answer vs correct answer
 * at the character level. Mismatched characters are wrapped in
 * .error-highlight spans.
 */
function buildHighlightedDiff(userStr, correctStr) {
  const u = Array.from(userStr);
  const c = Array.from(correctStr);
  const n = u.length,
    m = c.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (u[i - 1] === c[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  // backtrack to find matched (LCS) positions in user string
  let i = n,
    j = m;
  const matchedUserIdx = new Set();
  while (i > 0 && j > 0) {
    if (u[i - 1] === c[j - 1]) {
      matchedUserIdx.add(i - 1);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  let html = "";
  for (let k = 0; k < n; k++) {
    if (matchedUserIdx.has(k)) {
      html += escapeHTML(u[k]);
    } else {
      html += `<span class="error-highlight">${escapeHTML(u[k])}</span>`;
    }
  }
  return html;
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Main checker. Takes the full question object and user's raw input.
 * Returns a result object with: correct (bool), similarity, highlightedUserAnswer,
 * correctAnswer, explanations (array of strings), missingParticles, extraParticles
 */
function checkAnswer(question, userInput) {
  const userNorm = normalizeJP(userInput);
  const correctNorm = normalizeJP(question.japanese);

  const isExactMatch = userNorm === correctNorm;
  const similarity = similarityPercent(userNorm, correctNorm);
  const isCloseEnough = similarity >= 92 && !isExactMatch;
  const isCorrect = isExactMatch;

  const highlightedUserAnswer = buildHighlightedDiff(userNorm, correctNorm);

  // Particle / grammar check
  const userTokens = tokenizeJP(userNorm);
  const correctTokens = tokenizeJP(correctNorm);
  const userParticles = userTokens.filter((t) => PARTICLES.includes(t));
  const correctParticles = correctTokens.filter((t) => PARTICLES.includes(t));

  const missingParticles = correctParticles.filter((p) => !userParticles.includes(p));
  const extraParticles = userParticles.filter((p) => !correctParticles.includes(p));

  const explanations = [];

  if (isCorrect) {
    explanations.push({
      en: "Perfect! Your sentence matches the correct Japanese grammar and spelling exactly.",
      ta: "மிகச் சரியாக உள்ளது! உங்கள் வாக்கியம் சரியான இலக்கணம் மற்றும் எழுத்துப்பிழை இல்லாமல் உள்ளது.",
    });
  } else {
    if (userNorm.length === 0) {
      explanations.push({
        en: "You haven't entered any answer yet. Try typing the Japanese translation.",
        ta: "நீங்கள் இன்னும் பதில் எதுவும் உள்ளிடவில்லை. ஜப்பானிய மொழிபெயர்ப்பை தட்டச்சு செய்ய முயற்சிக்கவும்.",
      });
    } else {
      // spelling feedback
      if (similarity < 100) {
        explanations.push({
          en: `Spelling/character accuracy: ${similarity}%. Check the highlighted characters below — they don't match the correct sentence.`,
          ta: `எழுத்துப் பிழை துல்லியம்: ${similarity}%. கீழே சிவப்பு நிறத்தில் குறிக்கப்பட்ட எழுத்துக்களை சரிபார்க்கவும் — அவை சரியான வாக்கியத்துடன் பொருந்தவில்லை.`,
        });
      }
      // particle / grammar feedback
      if (missingParticles.length > 0) {
        explanations.push({
          en: `Missing grammar particle(s): ${missingParticles.join(", ")}. Japanese particles show the grammatical role of each word (subject, object, location, etc.), so leaving them out changes or breaks the meaning.`,
          ta: `இலக்கண துணை இடைச்சொல் (particle) விடுபட்டுள்ளது: ${missingParticles.join(", ")}. இந்த சொற்கள் வாக்கியத்தில் ஒவ்வொரு சொல்லின் பங்கை (எழுவாய், செயப்படுபொருள், இடம் போன்றவை) காட்டுகின்றன.`,
        });
      }
      if (extraParticles.length > 0) {
        explanations.push({
          en: `Extra/incorrect particle(s) used: ${extraParticles.join(", ")}. Remove or replace these to match correct sentence structure.`,
          ta: `தேவையற்ற அல்லது தவறான இடைச்சொல் பயன்படுத்தப்பட்டுள்ளது: ${extraParticles.join(", ")}. சரியான வாக்கிய அமைப்புக்கு இவற்றை நீக்கவும் அல்லது மாற்றவும்.`,
        });
      }
      if (isCloseEnough) {
        explanations.push({
          en: "You're very close! Just a minor spelling difference remains — review the correct answer carefully.",
          ta: "நீங்கள் மிக நெருக்கமாக உள்ளீர்கள்! சிறிய எழுத்துப் பிழை மட்டுமே உள்ளது — சரியான பதிலை கவனமாக பார்க்கவும்.",
        });
      }
      if (question.tips && question.tips.length) {
        question.tips.forEach((tip) => explanations.push(tip));
      }
    }
  }

  return {
    isCorrect,
    similarity,
    highlightedUserAnswer,
    correctAnswer: question.japanese,
    explanations,
    missingParticles,
    extraParticles,
  };
}

/**
 * Renders word-by-word (or particle-by-particle) meaning breakdown
 * for a given question, showing Tamil + English meaning for each
 * Japanese word/particle — used under the correct-answer box.
 */
function renderWordBreakdown(question, containerEl) {
  if (!question.breakdown || !question.breakdown.length) {
    containerEl.innerHTML = "";
    return;
  }
  let html = '<div class="mt-3"><strong>Word-by-word meaning / சொல் வாரியான பொருள்:</strong><div class="meaning-tags mt-2">';
  question.breakdown.forEach((b) => {
    html += `<span class="jp" title="${b.tamil} | ${b.english}">${b.word} — ${b.tamil} / ${b.english}</span>`;
  });
  html += "</div></div>";
  containerEl.innerHTML = html;
}
