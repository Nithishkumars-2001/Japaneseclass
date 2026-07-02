// ===================== Hiragana & Katakana Data =====================
// Each entry: character, romaji, tamil pronunciation guide, english explanation

const hiraganaData = [
  { char: "あ", romaji: "a", tamil: "'அ' போல ஒலிக்கும்", english: "Pronounced like 'a' in 'father'" },
  { char: "い", romaji: "i", tamil: "'இ' போல ஒலிக்கும்", english: "Pronounced like 'ee' in 'see'" },
  { char: "う", romaji: "u", tamil: "'உ' போல ஒலிக்கும்", english: "Pronounced like 'oo' in 'food' (short)" },
  { char: "え", romaji: "e", tamil: "'எ' போல ஒலிக்கும்", english: "Pronounced like 'e' in 'bed'" },
  { char: "お", romaji: "o", tamil: "'ஒ' போல ஒலிக்கும்", english: "Pronounced like 'o' in 'go'" },
  { char: "か", romaji: "ka", tamil: "'க' + 'அ' = 'க'", english: "Sounds like 'ka' in 'car'" },
  { char: "き", romaji: "ki", tamil: "'கி' போல ஒலிக்கும்", english: "Sounds like 'key'" },
  { char: "く", romaji: "ku", tamil: "'கு' போல ஒலிக்கும்", english: "Sounds like 'coo'" },
  { char: "け", romaji: "ke", tamil: "'கெ' போல ஒலிக்கும்", english: "Sounds like 'ke' in 'kettle'" },
  { char: "こ", romaji: "ko", tamil: "'கொ' போல ஒலிக்கும்", english: "Sounds like 'co' in 'coat'" },
  { char: "さ", romaji: "sa", tamil: "'ச' போல ஒலிக்கும்", english: "Sounds like 'sa' in 'sun'" },
  { char: "し", romaji: "shi", tamil: "'ஷி' போல ஒலிக்கும்", english: "Sounds like 'she'" },
  { char: "す", romaji: "su", tamil: "'சு' போல ஒலிக்கும்", english: "Sounds like 'su' in 'super'" },
  { char: "せ", romaji: "se", tamil: "'செ' போல ஒலிக்கும்", english: "Sounds like 'se' in 'set'" },
  { char: "そ", romaji: "so", tamil: "'சொ' போல ஒலிக்கும்", english: "Sounds like 'so'" },
  { char: "た", romaji: "ta", tamil: "'த' போல ஒலிக்கும்", english: "Sounds like 'ta' in 'tar'" },
  { char: "ち", romaji: "chi", tamil: "'சி' போல ஒலிக்கும்", english: "Sounds like 'chi' in 'cheese'" },
  { char: "つ", romaji: "tsu", tamil: "'சு' ஒலிக்கும் (த்ஸு)", english: "Sounds like 'tsu' (unique sound)" },
  { char: "て", romaji: "te", tamil: "'தெ' போல ஒலிக்கும்", english: "Sounds like 'te' in 'ten'" },
  { char: "と", romaji: "to", tamil: "'தொ' போல ஒலிக்கும்", english: "Sounds like 'to' in 'toe'" },
  { char: "な", romaji: "na", tamil: "'ந' போல ஒலிக்கும்", english: "Sounds like 'na' in 'nut'" },
  { char: "に", romaji: "ni", tamil: "'நி' போல ஒலிக்கும்", english: "Sounds like 'nee'" },
  { char: "ぬ", romaji: "nu", tamil: "'நு' போல ஒலிக்கும்", english: "Sounds like 'noo'" },
  { char: "ね", romaji: "ne", tamil: "'நெ' போல ஒலிக்கும்", english: "Sounds like 'ne' in 'net'" },
  { char: "の", romaji: "no", tamil: "'நொ' போல ஒலிக்கும்", english: "Sounds like 'no'" },
  { char: "は", romaji: "ha", tamil: "'ஹ' போல ஒலிக்கும்", english: "Sounds like 'ha' in 'hat'" },
  { char: "ひ", romaji: "hi", tamil: "'ஹி' போல ஒலிக்கும்", english: "Sounds like 'he'" },
  { char: "ふ", romaji: "fu", tamil: "'ஃபு' போல ஒலிக்கும்", english: "Sounds like soft 'fu'" },
  { char: "へ", romaji: "he", tamil: "'ஹெ' போல ஒலிக்கும்", english: "Sounds like 'he' in 'hen'" },
  { char: "ほ", romaji: "ho", tamil: "'ஹொ' போல ஒலிக்கும்", english: "Sounds like 'ho' in 'hope'" },
  { char: "ま", romaji: "ma", tamil: "'ம' போல ஒலிக்கும்", english: "Sounds like 'ma' in 'mud'" },
  { char: "み", romaji: "mi", tamil: "'மி' போல ஒலிக்கும்", english: "Sounds like 'mee'" },
  { char: "む", romaji: "mu", tamil: "'மு' போல ஒலிக்கும்", english: "Sounds like 'moo'" },
  { char: "め", romaji: "me", tamil: "'மெ' போல ஒலிக்கும்", english: "Sounds like 'me' in 'met'" },
  { char: "も", romaji: "mo", tamil: "'மொ' போல ஒலிக்கும்", english: "Sounds like 'mo' in 'more'" },
  { char: "や", romaji: "ya", tamil: "'ய' போல ஒலிக்கும்", english: "Sounds like 'ya' in 'yard'" },
  { char: "ゆ", romaji: "yu", tamil: "'யு' போல ஒலிக்கும்", english: "Sounds like 'you'" },
  { char: "よ", romaji: "yo", tamil: "'யொ' போல ஒலிக்கும்", english: "Sounds like 'yo'" },
  { char: "ら", romaji: "ra", tamil: "'ர' போல ஒலிக்கும்", english: "Sounds like light 'ra'" },
  { char: "り", romaji: "ri", tamil: "'ரி' போல ஒலிக்கும்", english: "Sounds like 'ree'" },
  { char: "る", romaji: "ru", tamil: "'ரு' போல ஒலிக்கும்", english: "Sounds like 'roo'" },
  { char: "れ", romaji: "re", tamil: "'ரெ' போல ஒலிக்கும்", english: "Sounds like 're' in 'red'" },
  { char: "ろ", romaji: "ro", tamil: "'ரொ' போல ஒலிக்கும்", english: "Sounds like 'ro' in 'row'" },
  { char: "わ", romaji: "wa", tamil: "'வ' போல ஒலிக்கும்", english: "Sounds like 'wa' in 'watch'" },
  { char: "を", romaji: "wo", tamil: "'ஒ' போல ஒலிக்கும் (object marker)", english: "Used as object particle, sounds like 'o'" },
  { char: "ん", romaji: "n", tamil: "'ன்' போல ஒலிக்கும்", english: "A standalone 'n' sound" },
];

const katakanaData = [
  { char: "ア", romaji: "a", tamil: "'அ' போல ஒலிக்கும் (வெளிநாட்டு சொற்களுக்கு)", english: "Same 'a' sound, used for foreign words" },
  { char: "イ", romaji: "i", tamil: "'இ' போல ஒலிக்கும்", english: "Same 'i' sound as hiragana い" },
  { char: "ウ", romaji: "u", tamil: "'உ' போல ஒலிக்கும்", english: "Same 'u' sound as hiragana う" },
  { char: "エ", romaji: "e", tamil: "'எ' போல ஒலிக்கும்", english: "Same 'e' sound as hiragana え" },
  { char: "オ", romaji: "o", tamil: "'ஒ' போல ஒலிக்கும்", english: "Same 'o' sound as hiragana お" },
  { char: "カ", romaji: "ka", tamil: "'க' போல ஒலிக்கும்", english: "Same 'ka' sound, used in loanwords" },
  { char: "キ", romaji: "ki", tamil: "'கி' போல ஒலிக்கும்", english: "Same 'ki' sound as hiragana き" },
  { char: "ク", romaji: "ku", tamil: "'கு' போல ஒலிக்கும்", english: "Same 'ku' sound as hiragana く" },
  { char: "ケ", romaji: "ke", tamil: "'கெ' போல ஒலிக்கும்", english: "Same 'ke' sound as hiragana け" },
  { char: "コ", romaji: "ko", tamil: "'கொ' போல ஒலிக்கும்", english: "Same 'ko' sound as hiragana こ" },
  { char: "サ", romaji: "sa", tamil: "'ச' போல ஒலிக்கும்", english: "Same 'sa' sound as hiragana さ" },
  { char: "シ", romaji: "shi", tamil: "'ஷி' போல ஒலிக்கும்", english: "Same 'shi' sound as hiragana し" },
  { char: "ス", romaji: "su", tamil: "'சு' போல ஒலிக்கும்", english: "Same 'su' sound as hiragana す" },
  { char: "セ", romaji: "se", tamil: "'செ' போல ஒலிக்கும்", english: "Same 'se' sound as hiragana せ" },
  { char: "ソ", romaji: "so", tamil: "'சொ' போல ஒலிக்கும்", english: "Same 'so' sound as hiragana そ" },
  { char: "タ", romaji: "ta", tamil: "'த' போல ஒலிக்கும்", english: "Same 'ta' sound as hiragana た" },
  { char: "チ", romaji: "chi", tamil: "'சி' போல ஒலிக்கும்", english: "Same 'chi' sound as hiragana ち" },
  { char: "ツ", romaji: "tsu", tamil: "'சு' ஒலிக்கும் (த்ஸு)", english: "Same unique 'tsu' sound" },
  { char: "テ", romaji: "te", tamil: "'தெ' போல ஒலிக்கும்", english: "Same 'te' sound as hiragana て" },
  { char: "ト", romaji: "to", tamil: "'தொ' போல ஒலிக்கும்", english: "Same 'to' sound as hiragana と" },
  { char: "ナ", romaji: "na", tamil: "'ந' போல ஒலிக்கும்", english: "Same 'na' sound as hiragana な" },
  { char: "ニ", romaji: "ni", tamil: "'நி' போல ஒலிக்கும்", english: "Same 'ni' sound as hiragana に" },
  { char: "ヌ", romaji: "nu", tamil: "'நு' போல ஒலிக்கும்", english: "Same 'nu' sound as hiragana ぬ" },
  { char: "ネ", romaji: "ne", tamil: "'நெ' போல ஒலிக்கும்", english: "Same 'ne' sound as hiragana ね" },
  { char: "ノ", romaji: "no", tamil: "'நொ' போல ஒலிக்கும்", english: "Same 'no' sound as hiragana の" },
  { char: "ハ", romaji: "ha", tamil: "'ஹ' போல ஒலிக்கும்", english: "Same 'ha' sound as hiragana は" },
  { char: "ヒ", romaji: "hi", tamil: "'ஹி' போல ஒலிக்கும்", english: "Same 'hi' sound as hiragana ひ" },
  { char: "フ", romaji: "fu", tamil: "'ஃபு' போல ஒலிக்கும்", english: "Same soft 'fu' sound as hiragana ふ" },
  { char: "ヘ", romaji: "he", tamil: "'ஹெ' போல ஒலிக்கும்", english: "Same 'he' sound as hiragana へ" },
  { char: "ホ", romaji: "ho", tamil: "'ஹொ' போல ஒலிக்கும்", english: "Same 'ho' sound as hiragana ほ" },
  { char: "マ", romaji: "ma", tamil: "'ம' போல ஒலிக்கும்", english: "Same 'ma' sound as hiragana ま" },
  { char: "ミ", romaji: "mi", tamil: "'மி' போல ஒலிக்கும்", english: "Same 'mi' sound as hiragana み" },
  { char: "ム", romaji: "mu", tamil: "'மு' போல ஒலிக்கும்", english: "Same 'mu' sound as hiragana む" },
  { char: "メ", romaji: "me", tamil: "'மெ' போல ஒலிக்கும்", english: "Same 'me' sound as hiragana め" },
  { char: "モ", romaji: "mo", tamil: "'மொ' போல ஒலிக்கும்", english: "Same 'mo' sound as hiragana も" },
  { char: "ヤ", romaji: "ya", tamil: "'ய' போல ஒலிக்கும்", english: "Same 'ya' sound as hiragana や" },
  { char: "ユ", romaji: "yu", tamil: "'யு' போல ஒலிக்கும்", english: "Same 'yu' sound as hiragana ゆ" },
  { char: "ヨ", romaji: "yo", tamil: "'யொ' போல ஒலிக்கும்", english: "Same 'yo' sound as hiragana よ" },
  { char: "ラ", romaji: "ra", tamil: "'ர' போல ஒலிக்கும்", english: "Same light 'ra' sound as hiragana ら" },
  { char: "リ", romaji: "ri", tamil: "'ரி' போல ஒலிக்கும்", english: "Same 'ri' sound as hiragana り" },
  { char: "ル", romaji: "ru", tamil: "'ரு' போல ஒலிக்கும்", english: "Same 'ru' sound as hiragana る" },
  { char: "レ", romaji: "re", tamil: "'ரெ' போல ஒலிக்கும்", english: "Same 're' sound as hiragana れ" },
  { char: "ロ", romaji: "ro", tamil: "'ரொ' போல ஒலிக்கும்", english: "Same 'ro' sound as hiragana ろ" },
  { char: "ワ", romaji: "wa", tamil: "'வ' போல ஒலிக்கும்", english: "Same 'wa' sound as hiragana わ" },
  { char: "ヲ", romaji: "wo", tamil: "'ஒ' போல ஒலிக்கும்", english: "Rarely used object particle sound" },
  { char: "ン", romaji: "n", tamil: "'ன்' போல ஒலிக்கும்", english: "Same standalone 'n' sound as hiragana ん" },
];

function renderKana(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  data.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-6 col-sm-4 col-md-3 col-lg-2";
    col.innerHTML = `
      <div class="kana-card reveal active">
        <span class="kana-char jp">${item.char}</span>
        <div class="kana-romaji">${item.romaji}</div>
        <div class="kana-tamil">${item.tamil}</div>
        <div class="kana-english">${item.english}</div>
      </div>
    `;
    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderKana(hiraganaData, "hiraganaGrid");
  renderKana(katakanaData, "katakanaGrid");

  const hiraganaBtn = document.getElementById("btnHiragana");
  const katakanaBtn = document.getElementById("btnKatakana");
  const hiraganaGrid = document.getElementById("hiraganaGrid");
  const katakanaGrid = document.getElementById("katakanaGrid");

  if (hiraganaBtn && katakanaBtn) {
    hiraganaBtn.addEventListener("click", () => {
      hiraganaBtn.classList.add("active");
      katakanaBtn.classList.remove("active");
      hiraganaGrid.parentElement.style.display = "block";
      katakanaGrid.parentElement.style.display = "none";
    });
    katakanaBtn.addEventListener("click", () => {
      katakanaBtn.classList.add("active");
      hiraganaBtn.classList.remove("active");
      katakanaGrid.parentElement.style.display = "block";
      hiraganaGrid.parentElement.style.display = "none";
    });
  }
});
