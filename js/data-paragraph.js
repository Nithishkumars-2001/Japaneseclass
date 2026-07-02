/* =========================================================
   PARAGRAPH PRACTICE — Question Bank
   Each item has an array of sentence pairs so we can give
   sentence-by-sentence corrections for a full paragraph.
   ========================================================= */

const paragraphSentences = [
  {
    tamil:
      "என் பெயர் குமார். நான் சென்னையில் வசிக்கிறேன். நான் ஒவ்வொரு நாளும் காலையில் பள்ளிக்கு செல்கிறேன். பள்ளியில் நான் ஜப்பானிய மொழி படிக்கிறேன். ஜப்பானிய மொழி கற்பது எனக்கு மிகவும் பிடிக்கும்.",
    english:
      "My name is Kumar. I live in Chennai. I go to school every morning. At school I study Japanese. I really enjoy learning Japanese.",
    sentences: [
      {
        tamil: "என் பெயர் குமார்.",
        japanese: "わたしの なまえは クマール です。",
      },
      {
        tamil: "நான் சென்னையில் வசிக்கிறேன்.",
        japanese: "わたしは チェンナイに すんでいます。",
      },
      {
        tamil: "நான் ஒவ்வொரு நாளும் காலையில் பள்ளிக்கு செல்கிறேன்.",
        japanese: "わたしは まいあさ がっこうに いきます。",
      },
      {
        tamil: "பள்ளியில் நான் ஜப்பானிய மொழி படிக்கிறேன்.",
        japanese: "がっこうで わたしは にほんごを べんきょうします。",
      },
      {
        tamil: "ஜப்பானிய மொழி கற்பது எனக்கு மிகவும் பிடிக்கும்.",
        japanese: "にほんごを ならうのが とても すきです。",
      },
    ],
    breakdown: [
      { word: "なまえ", tamil: "பெயர்", english: "name" },
      { word: "すんでいます", tamil: "வசிக்கிறேன்", english: "living (progressive)" },
      { word: "まいあさ", tamil: "ஒவ்வொரு காலையும்", english: "every morning" },
      { word: "で", tamil: "(இட குறிப்பான் - செயல்பாடு)", english: "location-of-action particle" },
      { word: "ならう", tamil: "கற்றல்", english: "to learn" },
      { word: "の", tamil: "(வினையை பெயர்ச்சொல் ஆக்கும்)", english: "nominalizer (turns verb into noun)" },
    ],
    tips: [
      {
        en: "で is used to mark the place where an action happens (がっこうで = 'at school'), unlike に which marks existence or destination.",
        ta: "ஒரு செயல் நடக்கும் இடத்தை குறிக்க で பயன்படுத்தப்படும் (がっこうで = 'பள்ளியில்'), இது இருப்பு அல்லது சேருமிடத்தை குறிக்கும் に விட வேறுபட்டது.",
      },
      {
        en: "Adding の after a verb (ならうの) turns the action into a noun so it can be the subject of すきです ('liking').",
        ta: "ஒரு வினைச்சொல்லுக்குப் பிறகு の சேர்ப்பது (ならうの) அந்த செயலை பெயர்ச்சொல்லாக மாற்றி すきです ('பிடிக்கும்') என்பதற்கு எழுவாயாக பயன்படுத்த உதவும்.",
      },
    ],
  },
  {
    tamil:
      "இன்று வானிலை மிகவும் நன்றாக உள்ளது. காலையில் நான் பூங்காவிற்கு நடந்து சென்றேன். பூங்காவில் நிறைய பறவைகள் இருந்தன. நான் அங்கு ஒரு மணி நேரம் நடந்தேன். பிறகு நான் வீட்டிற்கு திரும்பினேன்.",
    english:
      "The weather is very good today. In the morning I walked to the park. There were many birds in the park. I walked there for one hour. Then I returned home.",
    sentences: [
      {
        tamil: "இன்று வானிலை மிகவும் நன்றாக உள்ளது.",
        japanese: "きょう てんきは とても いい です。",
      },
      {
        tamil: "காலையில் நான் பூங்காவிற்கு நடந்து சென்றேன்.",
        japanese: "あさ わたしは こうえんに あるいて いきました。",
      },
      {
        tamil: "பூங்காவில் நிறைய பறவைகள் இருந்தன.",
        japanese: "こうえんに とりが たくさん いました。",
      },
      {
        tamil: "நான் அங்கு ஒரு மணி நேரம் நடந்தேன்.",
        japanese: "わたしは そこで いちじかん あるきました。",
      },
      {
        tamil: "பிறகு நான் வீட்டிற்கு திரும்பினேன்.",
        japanese: "それから わたしは いえに かえりました。",
      },
    ],
    breakdown: [
      { word: "てんき", tamil: "வானிலை", english: "weather" },
      { word: "こうえん", tamil: "பூங்கா", english: "park" },
      { word: "とり", tamil: "பறவை", english: "bird" },
      { word: "たくさん", tamil: "நிறைய", english: "many/a lot" },
      { word: "いちじかん", tamil: "ஒரு மணி நேரம்", english: "one hour" },
      { word: "それから", tamil: "பிறகு", english: "after that" },
      { word: "かえりました", tamil: "திரும்பினேன்", english: "returned (past)" },
    ],
    tips: [
      {
        en: "います is used for the existence of living things (people, animals) — とりが いました means 'there were birds'.",
        ta: "உயிருள்ள பொருட்களின் (மனிதர்கள், விலங்குகள்) இருப்பைக் குறிக்க います பயன்படுத்தப்படும் — とりが いました என்றால் 'பறவைகள் இருந்தன'.",
      },
      {
        en: "そこで uses で to mark the location where the walking action took place, not に.",
        ta: "そこで என்பதில் で என்பது நடக்கும் செயல் நடந்த இடத்தை குறிக்கும், に அல்ல.",
      },
    ],
  },
];
