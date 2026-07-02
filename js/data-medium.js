/* =========================================================
   MEDIUM SENTENCES — Question Bank
   ========================================================= */

const mediumSentences = [
  {
    tamil: "நேற்று நான் நண்பருடன் திரைப்படம் பார்க்க சென்றேன்.",
    english: "Yesterday I went to watch a movie with my friend.",
    japanese: "きのう わたしは ともだちと えいがを みに いきました。",
    breakdown: [
      { word: "きのう", tamil: "நேற்று", english: "yesterday" },
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "ともだち", tamil: "நண்பர்", english: "friend" },
      { word: "と", tamil: "(உடன்)", english: "with (companion particle)" },
      { word: "えいが", tamil: "திரைப்படம்", english: "movie" },
      { word: "を", tamil: "(செயப்படுபொருள் குறிப்பான்)", english: "object particle" },
      { word: "みに", tamil: "பார்க்க", english: "to watch (purpose)" },
      { word: "いきました", tamil: "சென்றேன்", english: "went (past tense)" },
    ],
    tips: [
      {
        en: "みに いきました uses the verb stem + に + いきます pattern meaning 'went to do something'.",
        ta: "みに いきました என்பது வினைச்சொல் அடிச்சொல் + に + いきます என்ற அமைப்பைப் பயன்படுத்தி 'ஏதோ செய்ய சென்றேன்' எனக் குறிக்கும்.",
      },
    ],
  },
  {
    tamil: "இன்று காலையில் நான் ஆறு மணிக்கு எழுந்தேன்.",
    english: "This morning I woke up at six o'clock.",
    japanese: "けさ わたしは ろくじに おきました。",
    breakdown: [
      { word: "けさ", tamil: "இன்று காலை", english: "this morning" },
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "ろくじ", tamil: "ஆறு மணி", english: "six o'clock" },
      { word: "に", tamil: "(நேர குறிப்பான்)", english: "time particle" },
      { word: "おきました", tamil: "எழுந்தேன்", english: "woke up (past)" },
    ],
    tips: [
      {
        en: "に is used after specific time expressions (like clock time) to mark 'at that time'.",
        ta: "நேர குறிப்புகளுக்குப் பிறகு (மணி நேரம் போன்றவை) に பயன்படுத்தப்பட்டு 'அந்த நேரத்தில்' எனக் குறிக்கும்.",
      },
    ],
  },
  {
    tamil: "எனக்கு ஜப்பானிய உணவு மிகவும் பிடிக்கும்.",
    english: "I like Japanese food very much.",
    japanese: "わたしは にほんの りょうりが とても すきです。",
    breakdown: [
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "にほんの", tamil: "ஜப்பானின்", english: "Japanese (possessive)" },
      { word: "りょうり", tamil: "உணவு/சமையல்", english: "cuisine/cooking" },
      { word: "が", tamil: "(விருப்பப் பொருள் குறிப்பான்)", english: "subject particle for preference" },
      { word: "とても", tamil: "மிகவும்", english: "very much" },
      { word: "すきです", tamil: "பிடிக்கும்", english: "like (adjective form)" },
    ],
    tips: [
      {
        en: "With すき (like/favorite), the thing liked is marked by が, not を — this is a common mistake for learners.",
        ta: "すき (பிடிக்கும்) உடன், விரும்பப்படும் பொருள் を அல்ல, が என்ற இடைச்சொல்லால் குறிக்கப்படும் — இது கற்பவர்களுக்கு பொதுவான தவறு.",
      },
    ],
  },
  {
    tamil: "இந்த வார இறுதியில் நான் குடும்பத்துடன் கடற்கரைக்கு செல்வேன்.",
    english: "This weekend I will go to the beach with my family.",
    japanese: "こんしゅうまつ わたしは かぞくと うみに いきます。",
    breakdown: [
      { word: "こんしゅうまつ", tamil: "இந்த வார இறுதி", english: "this weekend" },
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "かぞく", tamil: "குடும்பம்", english: "family" },
      { word: "と", tamil: "(உடன்)", english: "with" },
      { word: "うみ", tamil: "கடல்/கடற்கரை", english: "sea/beach" },
      { word: "に", tamil: "(திசை குறிப்பான்)", english: "direction particle" },
      { word: "いきます", tamil: "செல்வேன்", english: "will go" },
    ],
  },
  {
    tamil: "அவர் ஒவ்வொரு நாளும் அலுவலகத்திற்கு ரயிலில் செல்கிறார்.",
    english: "He goes to the office by train every day.",
    japanese: "かれは まいにち でんしゃで かいしゃに いきます。",
    breakdown: [
      { word: "かれ", tamil: "அவன்", english: "he" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "まいにち", tamil: "ஒவ்வொரு நாளும்", english: "every day" },
      { word: "でんしゃ", tamil: "ரயில்", english: "train" },
      { word: "で", tamil: "(வழிமுறை குறிப்பான்)", english: "means-of-transport particle" },
      { word: "かいしゃ", tamil: "அலுவலகம்/நிறுவனம்", english: "company/office" },
      { word: "に", tamil: "(திசை குறிப்பான்)", english: "direction particle" },
      { word: "いきます", tamil: "செல்கிறார்", english: "goes" },
    ],
    tips: [
      {
        en: "で marks the means of transportation ('by train'), while に marks the destination ('to the office').",
        ta: "で என்பது பயணிக்கும் வழிமுறையை (ரயிலில்) குறிக்கும், に என்பது சேருமிடத்தை (அலுவலகத்திற்கு) குறிக்கும்.",
      },
    ],
  },
  {
    tamil: "நேற்றிரவு மழை பெய்ததால் நான் வீட்டிலேயே இருந்தேன்.",
    english: "Because it rained last night, I stayed home.",
    japanese: "ゆうべ あめが ふったので わたしは いえに いました。",
    breakdown: [
      { word: "ゆうべ", tamil: "நேற்றிரவு", english: "last night" },
      { word: "あめ", tamil: "மழை", english: "rain" },
      { word: "が", tamil: "(எழுவாய் குறிப்பான்)", english: "subject particle" },
      { word: "ふったので", tamil: "பெய்ததால்", english: "because it fell/rained" },
      { word: "わたし", tamil: "நான்", english: "I" },
      { word: "は", tamil: "(எழுவாய் குறிப்பான்)", english: "topic particle" },
      { word: "いえ", tamil: "வீடு", english: "house" },
      { word: "に", tamil: "(இட குறிப்பான்)", english: "location particle" },
      { word: "いました", tamil: "இருந்தேன்", english: "stayed/was (past)" },
    ],
    tips: [
      {
        en: "ので attaches to a verb to mean 'because' — it gives a reason for the following clause.",
        ta: "ので என்பது ஒரு வினைச்சொல்லுடன் இணைந்து 'ஏனெனில்' எனப் பொருள்படும் — இது தொடர்ந்து வரும் சொற்றொடருக்கு காரணம் தருகிறது.",
      },
    ],
  },
];
