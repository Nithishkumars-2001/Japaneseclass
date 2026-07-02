/* =========================================================
   SMALL SENTENCES — Question Bank
   ========================================================= */

const smallSentences = [
  {
    tamil: "நான் மாணவன்.",
    english: "I am a student.",
    japanese: "わたしは がくせい です。",
    breakdown: [
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "がくせい", tamil: "மாணவன்", english: "student" },
      { word: "です", tamil: "ஆகும் (இருக்கிறேன்)", english: "am/is/are (polite)" },
    ],
    tips: [
      {
        en: "Basic sentence structure: [Subject] は [Noun] です. The particle は marks the topic.",
        ta: "அடிப்படை வாக்கிய அமைப்பு: [எழுவாய்] は [பெயர்ச்சொல்] です. は என்பது தலைப்பை குறிக்கும் இடைச்சொல்.",
      },
    ],
  },
  {
    tamil: "இது புத்தகம்.",
    english: "This is a book.",
    japanese: "これは ほん です。",
    breakdown: [
      { word: "これ", tamil: "இது", english: "this" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "ほん", tamil: "புத்தகம்", english: "book" },
      { word: "です", tamil: "ஆகும்", english: "is" },
    ],
    tips: [
      {
        en: "これ (kore) means 'this' for objects near the speaker.",
        ta: "これ (kore) என்பது பேசுபவருக்கு அருகில் உள்ள பொருளை குறிக்க 'இது' என்று பயன்படுத்தப்படும்.",
      },
    ],
  },
  {
    tamil: "நான் தண்ணீர் குடிக்கிறேன்.",
    english: "I drink water.",
    japanese: "わたしは みずを のみます。",
    breakdown: [
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "みず", tamil: "தண்ணீர்", english: "water" },
      { word: "を", tamil: "(செயப்படுபொருள் குறிப்பான்)", english: "object particle" },
      { word: "のみます", tamil: "குடிக்கிறேன்", english: "drink (polite)" },
    ],
    tips: [
      {
        en: "The particle を marks the direct object of the verb — here it marks 'water' as what is being drunk.",
        ta: "を என்ற இடைச்சொல் வினைச்சொல்லின் செயப்படுபொருளைக் குறிக்கும் — இங்கு 'தண்ணீர்' குடிக்கப்படும் பொருளாக குறிக்கப்படுகிறது.",
      },
    ],
  },
  {
    tamil: "அவள் பள்ளிக்கு செல்கிறாள்.",
    english: "She goes to school.",
    japanese: "かのじょは がっこうに いきます。",
    breakdown: [
      { word: "かのじょ", tamil: "அவள்", english: "she" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "がっこう", tamil: "பள்ளி", english: "school" },
      { word: "に", tamil: "(இடம்/திசை குறிப்பான்)", english: "direction/location particle" },
      { word: "いきます", tamil: "செல்கிறாள்", english: "goes" },
    ],
    tips: [
      {
        en: "に is used after a place to show direction of movement ('to school').",
        ta: "に என்பது ஒரு இடத்திற்குப் பிறகு பயன்படுத்தப்பட்டு, செல்லும் திசையை (பள்ளிக்கு) குறிக்கும்.",
      },
    ],
  },
  {
    tamil: "இது எனது வீடு.",
    english: "This is my house.",
    japanese: "これは わたしの いえ です。",
    breakdown: [
      { word: "これ", tamil: "இது", english: "this" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "わたしの", tamil: "எனது", english: "my" },
      { word: "いえ", tamil: "வீடு", english: "house" },
      { word: "です", tamil: "ஆகும்", english: "is" },
    ],
    tips: [
      {
        en: "の is a possessive particle, similar to 's in English (わたしの = my).",
        ta: "の என்பது உடைமையை காட்டும் இடைச்சொல், ஆங்கிலத்தில் 's போன்றது (わたしの = எனது).",
      },
    ],
  },
  {
    tamil: "நான் பள்ளிக்கு நடந்து செல்கிறேன்.",
    english: "I walk to school.",
    japanese: "わたしは がっこうに あるいて いきます。",
    breakdown: [
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "がっこう", tamil: "பள்ளி", english: "school" },
      { word: "に", tamil: "(திசை குறிப்பான்)", english: "direction particle" },
      { word: "あるいて", tamil: "நடந்து", english: "walking" },
      { word: "いきます", tamil: "செல்கிறேன்", english: "go" },
    ],
  },
  {
    tamil: "இது சுவையாக உள்ளது.",
    english: "This is delicious.",
    japanese: "これは おいしい です。",
    breakdown: [
      { word: "これ", tamil: "இது", english: "this" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "おいしい", tamil: "சுவையானது", english: "delicious" },
      { word: "です", tamil: "ஆகும்", english: "is" },
    ],
  },
  {
    tamil: "நாளை நான் வேலைக்கு போவேன்.",
    english: "I will go to work tomorrow.",
    japanese: "あした わたしは しごとに いきます。",
    breakdown: [
      { word: "あした", tamil: "நாளை", english: "tomorrow" },
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "しごと", tamil: "வேலை", english: "work" },
      { word: "に", tamil: "(திசை குறிப்பான்)", english: "direction particle" },
      { word: "いきます", tamil: "போவேன்", english: "will go" },
    ],
  },
  {
    tamil: "இந்த பூனை அழகாக உள்ளது.",
    english: "This cat is cute.",
    japanese: "この ねこは かわいい です。",
    breakdown: [
      { word: "この", tamil: "இந்த", english: "this (+noun)" },
      { word: "ねこ", tamil: "பூனை", english: "cat" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "かわいい", tamil: "அழகான/கவர்ச்சியான", english: "cute" },
      { word: "です", tamil: "ஆகும்", english: "is" },
    ],
  },
  {
    tamil: "நான் ஜப்பானிய மொழி படிக்கிறேன்.",
    english: "I study Japanese language.",
    japanese: "わたしは にほんごを べんきょうします。",
    breakdown: [
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "にほんご", tamil: "ஜப்பானிய மொழி", english: "Japanese language" },
      { word: "を", tamil: "(செயப்படுபொருள் குறிப்பான்)", english: "object particle" },
      { word: "べんきょうします", tamil: "படிக்கிறேன்", english: "study" },
    ],
  },
];
