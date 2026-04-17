// ============================================================
//  SANSKRIT LEARNING APP — DATA
// ============================================================

const SANSKRIT_DATA = {

  // ── VOWELS ────────────────────────────────────────────────
  vowels: [
    { devanagari: "अ", roman: "a",  ipa: "ʌ",  audio: "", example: "अज (aja) – goat",  meaning: "Short 'a' — like 'u' in 'but'" },
    { devanagari: "आ", roman: "ā",  ipa: "aː", audio: "", example: "आम (āma) – mango", meaning: "Long 'ā' — like 'a' in 'father'" },
    { devanagari: "इ", roman: "i",  ipa: "ɪ",  audio: "", example: "इति (iti) – thus",  meaning: "Short 'i' — like 'i' in 'fit'" },
    { devanagari: "ई", roman: "ī",  ipa: "iː", audio: "", example: "ईश (īśa) – lord",  meaning: "Long 'ī' — like 'ee' in 'feet'" },
    { devanagari: "उ", roman: "u",  ipa: "ʊ",  audio: "", example: "उत्तम (uttama) – best", meaning: "Short 'u' — like 'u' in 'put'" },
    { devanagari: "ऊ", roman: "ū",  ipa: "uː", audio: "", example: "ऊर्जा (ūrjā) – energy", meaning: "Long 'ū' — like 'oo' in 'food'" },
    { devanagari: "ऋ", roman: "ṛ",  ipa: "r̩",  audio: "", example: "ऋषि (ṛṣi) – sage",  meaning: "Vocalic 'r' — rolled 'ri'" },
    { devanagari: "ए", roman: "e",  ipa: "eː", audio: "", example: "एक (eka) – one",   meaning: "Long 'e' — like 'a' in 'late'" },
    { devanagari: "ऐ", roman: "ai", ipa: "ɐɪ", audio: "", example: "ऐश्वर्य (aiśvarya) – wealth", meaning: "Diphthong — like 'i' in 'kite'" },
    { devanagari: "ओ", roman: "o",  ipa: "oː", audio: "", example: "ओम् (om) – sacred sound", meaning: "Long 'o' — like 'o' in 'go'" },
    { devanagari: "औ", roman: "au", ipa: "ɐʊ", audio: "", example: "औषधि (auṣadhi) – medicine", meaning: "Diphthong — like 'ou' in 'loud'" },
    { devanagari: "अं", roman: "aṃ", ipa: "ə̃", audio: "", example: "संस्कृत (saṃskṛta)", meaning: "Anusvāra — nasal resonance" },
    { devanagari: "अः", roman: "aḥ", ipa: "əh", audio: "", example: "नमः (namaḥ) – salutation", meaning: "Visarga — breathy 'h' release" },
  ],

  // ── CONSONANTS ────────────────────────────────────────────
  consonants: [
    // Gutturals (कण्ठ्य)
    { devanagari: "क", roman: "ka", group: "Gutturals", groupSkt: "कण्ठ्य", meaning: "Unaspirated voiceless velar" },
    { devanagari: "ख", roman: "kha", group: "Gutturals", groupSkt: "कण्ठ्य", meaning: "Aspirated voiceless velar" },
    { devanagari: "ग", roman: "ga", group: "Gutturals", groupSkt: "कण्ठ्य", meaning: "Unaspirated voiced velar" },
    { devanagari: "घ", roman: "gha", group: "Gutturals", groupSkt: "कण्ठ्य", meaning: "Aspirated voiced velar" },
    { devanagari: "ङ", roman: "ṅa", group: "Gutturals", groupSkt: "कण्ठ्य", meaning: "Nasal velar" },
    // Palatals (तालव्य)
    { devanagari: "च", roman: "ca", group: "Palatals", groupSkt: "तालव्य", meaning: "Unaspirated voiceless palatal" },
    { devanagari: "छ", roman: "cha", group: "Palatals", groupSkt: "तालव्य", meaning: "Aspirated voiceless palatal" },
    { devanagari: "ज", roman: "ja", group: "Palatals", groupSkt: "तालव्य", meaning: "Unaspirated voiced palatal" },
    { devanagari: "झ", roman: "jha", group: "Palatals", groupSkt: "तालव्य", meaning: "Aspirated voiced palatal" },
    { devanagari: "ञ", roman: "ña", group: "Palatals", groupSkt: "तालव्य", meaning: "Nasal palatal" },
    // Retroflex (मूर्धन्य)
    { devanagari: "ट", roman: "ṭa", group: "Retroflex", groupSkt: "मूर्धन्य", meaning: "Unaspirated voiceless retroflex" },
    { devanagari: "ठ", roman: "ṭha", group: "Retroflex", groupSkt: "मूर्धन्य", meaning: "Aspirated voiceless retroflex" },
    { devanagari: "ड", roman: "ḍa", group: "Retroflex", groupSkt: "मूर्धन्य", meaning: "Unaspirated voiced retroflex" },
    { devanagari: "ढ", roman: "ḍha", group: "Retroflex", groupSkt: "मूर्धन्य", meaning: "Aspirated voiced retroflex" },
    { devanagari: "ण", roman: "ṇa", group: "Retroflex", groupSkt: "मूर्धन्य", meaning: "Nasal retroflex" },
    // Dentals (दन्त्य)
    { devanagari: "त", roman: "ta", group: "Dentals", groupSkt: "दन्त्य", meaning: "Unaspirated voiceless dental" },
    { devanagari: "थ", roman: "tha", group: "Dentals", groupSkt: "दन्त्य", meaning: "Aspirated voiceless dental" },
    { devanagari: "द", roman: "da", group: "Dentals", groupSkt: "दन्त्य", meaning: "Unaspirated voiced dental" },
    { devanagari: "ध", roman: "dha", group: "Dentals", groupSkt: "दन्त्य", meaning: "Aspirated voiced dental" },
    { devanagari: "न", roman: "na", group: "Dentals", groupSkt: "दन्त्य", meaning: "Nasal dental" },
    // Labials (ओष्ठ्य)
    { devanagari: "प", roman: "pa", group: "Labials", groupSkt: "ओष्ठ्य", meaning: "Unaspirated voiceless labial" },
    { devanagari: "फ", roman: "pha", group: "Labials", groupSkt: "ओष्ठ्य", meaning: "Aspirated voiceless labial" },
    { devanagari: "ब", roman: "ba", group: "Labials", groupSkt: "ओष्ठ्य", meaning: "Unaspirated voiced labial" },
    { devanagari: "भ", roman: "bha", group: "Labials", groupSkt: "ओष्ठ्य", meaning: "Aspirated voiced labial" },
    { devanagari: "म", roman: "ma", group: "Labials", groupSkt: "ओष्ठ्य", meaning: "Nasal labial" },
    // Semivowels (अन्तस्थ)
    { devanagari: "य", roman: "ya", group: "Semivowels", groupSkt: "अन्तस्थ", meaning: "Palatal semivowel" },
    { devanagari: "र", roman: "ra", group: "Semivowels", groupSkt: "अन्तस्थ", meaning: "Retroflex liquid" },
    { devanagari: "ल", roman: "la", group: "Semivowels", groupSkt: "अन्तस्थ", meaning: "Dental lateral" },
    { devanagari: "व", roman: "va", group: "Semivowels", groupSkt: "अन्तस्थ", meaning: "Labio-dental semivowel" },
    // Sibilants & Aspirate (ऊष्म)
    { devanagari: "श", roman: "śa", group: "Sibilants", groupSkt: "ऊष्म", meaning: "Palatal sibilant" },
    { devanagari: "ष", roman: "ṣa", group: "Sibilants", groupSkt: "ऊष्म", meaning: "Retroflex sibilant" },
    { devanagari: "स", roman: "sa", group: "Sibilants", groupSkt: "ऊष्म", meaning: "Dental sibilant" },
    { devanagari: "ह", roman: "ha", group: "Sibilants", groupSkt: "ऊष्म", meaning: "Glottal aspirate" },
  ],

  // ── VOCABULARY ────────────────────────────────────────────
  vocabulary: [
    // Nature
    { devanagari: "सूर्य", roman: "sūrya",  meaning: "sun",    category: "Nature",  sentence: "सूर्यः उदयते। — The sun rises." },
    { devanagari: "चन्द्र", roman: "candra", meaning: "moon",   category: "Nature",  sentence: "चन्द्रः शोभते। — The moon shines." },
    { devanagari: "जल",   roman: "jala",    meaning: "water",  category: "Nature",  sentence: "जलं शीतलम्। — Water is cool." },
    { devanagari: "वायु", roman: "vāyu",   meaning: "wind",   category: "Nature",  sentence: "वायुः वहति। — The wind blows." },
    { devanagari: "पृथ्वी", roman: "pṛthvī", meaning: "earth",  category: "Nature",  sentence: "पृथ्वी महती। — The earth is vast." },
    { devanagari: "अग्नि", roman: "agni",   meaning: "fire",   category: "Nature",  sentence: "अग्निः दहति। — Fire burns." },
    { devanagari: "आकाश", roman: "ākāśa",  meaning: "sky",    category: "Nature",  sentence: "आकाशः नीलः। — The sky is blue." },
    { devanagari: "वन",   roman: "vana",    meaning: "forest", category: "Nature",  sentence: "वनं हरितम्। — The forest is green." },
    // Body
    { devanagari: "हस्त", roman: "hasta",   meaning: "hand",   category: "Body",    sentence: "मम हस्तः। — My hand." },
    { devanagari: "पाद",  roman: "pāda",    meaning: "foot",   category: "Body",    sentence: "पादेन गच्छति। — Goes by foot." },
    { devanagari: "नेत्र", roman: "netra",   meaning: "eye",    category: "Body",    sentence: "नेत्रे सुन्दरे। — The eyes are beautiful." },
    { devanagari: "मुख",  roman: "mukha",   meaning: "face/mouth", category: "Body", sentence: "मुखं प्रसन्नम्। — The face is joyful." },
    { devanagari: "हृदय", roman: "hṛdaya",  meaning: "heart",  category: "Body",    sentence: "हृदयं शुद्धम्। — The heart is pure." },
    // Greetings & Common
    { devanagari: "नमस्ते", roman: "namaste", meaning: "greetings / I bow to you", category: "Greetings", sentence: "नमस्ते मित्र! — Greetings, friend!" },
    { devanagari: "धन्यवाद", roman: "dhanyavāda", meaning: "thank you", category: "Greetings", sentence: "धन्यवादः। — Thank you." },
    { devanagari: "मित्र", roman: "mitra",   meaning: "friend", category: "Greetings", sentence: "त्वं मम मित्रम्। — You are my friend." },
    { devanagari: "शान्ति", roman: "śānti",  meaning: "peace",  category: "Greetings", sentence: "शान्तिः सर्वत्र। — Peace everywhere." },
    // Numbers
    { devanagari: "एक",  roman: "eka",    meaning: "one",   category: "Numbers", sentence: "एकः वृक्षः। — One tree." },
    { devanagari: "द्वि", roman: "dvi",    meaning: "two",   category: "Numbers", sentence: "द्वे फले। — Two fruits." },
    { devanagari: "त्रि", roman: "tri",    meaning: "three", category: "Numbers", sentence: "त्रीणि पुष्पाणि। — Three flowers." },
    { devanagari: "चतुर्", roman: "catur", meaning: "four",  category: "Numbers", sentence: "चत्वारो बालाः। — Four boys." },
    { devanagari: "पञ्च", roman: "pañca", meaning: "five",  category: "Numbers", sentence: "पञ्च आम्राः। — Five mangoes." },
    { devanagari: "दश",  roman: "daśa",  meaning: "ten",   category: "Numbers", sentence: "दश वर्षाणि। — Ten years." },
    // Verbs
    { devanagari: "गच्छति", roman: "gacchati", meaning: "goes",   category: "Verbs", sentence: "बालः गच्छति। — The boy goes." },
    { devanagari: "आगच्छति", roman: "āgacchati", meaning: "comes", category: "Verbs", sentence: "सः आगच्छति। — He comes." },
    { devanagari: "खादति",  roman: "khādati",  meaning: "eats",   category: "Verbs", sentence: "सा खादति। — She eats." },
    { devanagari: "पठति",  roman: "paṭhati",  meaning: "reads/studies", category: "Verbs", sentence: "छात्रः पठति। — The student studies." },
    { devanagari: "वदति",  roman: "vadati",   meaning: "speaks", category: "Verbs", sentence: "गुरुः वदति। — The teacher speaks." },
    { devanagari: "जानाति", roman: "jānāti",  meaning: "knows",  category: "Verbs", sentence: "सः जानाति। — He knows." },
  ],

  // ── GRAMMAR LESSONS ───────────────────────────────────────
  grammar: [
    {
      id: "gender",
      title: "Gender (लिङ्ग)",
      subtitle: "Liṅga",
      icon: "⚖️",
      intro: "Every Sanskrit noun has one of three genders. Unlike English, gender in Sanskrit is grammatical — it must be memorized for each word.",
      sections: [
        {
          name: "Masculine (पुल्लिङ्ग)",
          color: "#4A90D9",
          examples: [
            { word: "राम", roman: "rāma", meaning: "Rama (a name)" },
            { word: "बालः", roman: "bālaḥ", meaning: "boy" },
            { word: "वृक्षः", roman: "vṛkṣaḥ", meaning: "tree" },
            { word: "देवः", roman: "devaḥ", meaning: "god/deity" },
          ]
        },
        {
          name: "Feminine (स्त्रीलिङ्ग)",
          color: "#D94A90",
          examples: [
            { word: "सीता", roman: "sītā", meaning: "Sita (a name)" },
            { word: "बाला", roman: "bālā", meaning: "girl" },
            { word: "नदी", roman: "nadī", meaning: "river" },
            { word: "देवी", roman: "devī", meaning: "goddess" },
          ]
        },
        {
          name: "Neuter (नपुंसकलिङ्ग)",
          color: "#4AD990",
          examples: [
            { word: "फलम्", roman: "phalam", meaning: "fruit" },
            { word: "जलम्", roman: "jalam", meaning: "water" },
            { word: "पुस्तकम्", roman: "pustakam", meaning: "book" },
            { word: "वनम्", roman: "vanam", meaning: "forest" },
          ]
        }
      ]
    },
    {
      id: "cases",
      title: "Cases (विभक्ति)",
      subtitle: "Vibhakti",
      icon: "🔄",
      intro: "Sanskrit uses 8 cases (Vibhakti) to show the role of a noun in a sentence. The ending of the noun changes based on its function — no prepositions needed!",
      sections: [
        { name: "1st — Nominative (कर्ता)",  role: "Subject of the sentence",     example: "रामः गच्छति", trans: "Rāma goes", ending: "-aḥ / -ā / -am" },
        { name: "2nd — Accusative (कर्म)",   role: "Direct object",               example: "रामं पश्यति", trans: "Sees Rāma", ending: "-am / -ām / -am" },
        { name: "3rd — Instrumental (करण)",  role: "By means of / with",          example: "रामेण सह", trans: "Together with Rāma", ending: "-ena / -ayā / -ena" },
        { name: "4th — Dative (सम्प्रदान)",  role: "For / to (indirect object)",  example: "रामाय ददाति", trans: "Gives to Rāma", ending: "-āya / -āyai / -āya" },
        { name: "5th — Ablative (अपादान)",   role: "From / away from",            example: "रामात् आगच्छति", trans: "Comes from Rāma", ending: "-āt / -āyāḥ / -āt" },
        { name: "6th — Genitive (सम्बन्ध)",  role: "Of / belonging to",           example: "रामस्य पुस्तकम्", trans: "Rāma's book", ending: "-asya / -āyāḥ / -asya" },
        { name: "7th — Locative (अधिकरण)", role: "In / at / on",               example: "रामे विश्वासः", trans: "Faith in Rāma", ending: "-e / -āyām / -e" },
        { name: "8th — Vocative (सम्बोधन)", role: "Addressing someone",          example: "हे राम!", trans: "O Rāma!", ending: "-a / -e / -a" },
      ]
    },
    {
      id: "verbs",
      title: "Verb Forms (क्रिया)",
      subtitle: "Kriyā",
      icon: "✨",
      intro: "Sanskrit verbs are highly systematic. They change based on person (1st/2nd/3rd) and number (singular/dual/plural). Here is the present tense of √gam (to go).",
      table: {
        root: "√गम् (gam) — to go",
        headers: ["Person", "Singular", "Dual", "Plural"],
        rows: [
          ["3rd (he/she/it)", "गच्छति (gacchati)", "गच्छतः (gacchataḥ)", "गच्छन्ति (gacchanti)"],
          ["2nd (you)", "गच्छसि (gacchasi)", "गच्छथः (gacchāthaḥ)", "गच्छथ (gacchatha)"],
          ["1st (I/we)", "गच्छामि (gacchāmi)", "गच्छावः (gacchāvaḥ)", "गच्छामः (gacchāmaḥ)"],
        ]
      }
    },
    {
      id: "sandhi",
      title: "Sound Rules (सन्धि)",
      subtitle: "Sandhi",
      icon: "🔗",
      intro: "Sandhi means 'joining'. When words meet, their sounds blend together according to specific rules. This is a hallmark of Sanskrit's phonetic elegance.",
      rules: [
        { name: "Vowel Sandhi", rule: "a + a → ā", example: "राम + अयन = रामायण", romanExample: "rāma + ayana = rāmāyaṇa", note: "Two 'a' vowels merge into long 'ā'" },
        { name: "Visarga Sandhi", rule: "aḥ + a → o", example: "रामः + अयति = रामोऽयति", romanExample: "rāmaḥ + ayati = rāmo'yati", note: "Visarga before voiced sounds changes" },
        { name: "Consonant Sandhi", rule: "t + d → d", example: "तत् + धर्म = तद्धर्म", romanExample: "tat + dharma = taddharma", note: "Voiceless before voiced becomes voiced" },
        { name: "Nasal Sandhi", rule: "m̃ + consonant → matching nasal", example: "सम् + कर = संकर", romanExample: "sam + kara = saṃkara", note: "Anusvāra adapts to following consonant" },
      ]
    }
  ],

  // ── QUIZ QUESTIONS ────────────────────────────────────────
  quizzes: {
    alphabet: [
      { q: "What is the Roman transliteration of 'अ'?", opts: ["a","ā","i","u"], answer: 0, type: "vowel" },
      { q: "Which Devanagari letter represents 'ī' (long i)?", opts: ["इ","ई","उ","ए"], answer: 1, type: "vowel" },
      { q: "What sound does 'ओ' make?", opts: ["'o' as in go","'a' as in cat","'u' as in put","'e' as in pet"], answer: 0, type: "vowel" },
      { q: "Which vowel is called Anusvāra?", opts: ["अं","अः","आ","ऐ"], answer: 0, type: "vowel" },
      { q: "What group does 'क, ख, ग, घ, ङ' belong to?", opts: ["Gutturals","Palatals","Dentals","Labials"], answer: 0, type: "consonant" },
      { q: "What is the transliteration of 'ट'?", opts: ["ta","ṭa","tha","da"], answer: 1, type: "consonant" },
      { q: "Which consonant group is called 'तालव्य' (Tālavya)?", opts: ["Palatals","Gutturals","Retroflex","Dentals"], answer: 0, type: "consonant" },
      { q: "How many vowels does Sanskrit have (including anusvāra & visarga)?", opts: ["13","10","16","8"], answer: 0, type: "vowel" },
      { q: "What sound does 'श' (śa) produce?", opts: ["Palatal sibilant (sh)","Dental 's'","Retroflex 'sh'","Glottal 'h'"], answer: 0, type: "consonant" },
      { q: "Which letter is the retroflex nasal?", opts: ["ण","न","ञ","ङ"], answer: 0, type: "consonant" },
    ],
    vocabulary: [
      { q: "What does 'सूर्य' (sūrya) mean?", opts: ["moon","star","sun","sky"], answer: 2 },
      { q: "Which word means 'water' in Sanskrit?", opts: ["अग्नि","जल","वायु","पृथ्वी"], answer: 1 },
      { q: "What does 'नमस्ते' (namaste) express?", opts: ["Goodbye","Thank you","Greetings / I bow to you","Sorry"], answer: 2 },
      { q: "What is 'हृदय' (hṛdaya)?", opts: ["hand","eye","heart","foot"], answer: 2 },
      { q: "What does 'पञ्च' (pañca) mean?", opts: ["three","four","five","ten"], answer: 2 },
      { q: "Which word means 'friend'?", opts: ["मित्र","गुरु","राजा","देव"], answer: 0 },
      { q: "What does the verb 'पठति' (paṭhati) mean?", opts: ["eats","reads/studies","goes","speaks"], answer: 1 },
      { q: "What is 'चन्द्र' (candra)?", opts: ["sun","fire","moon","wind"], answer: 2 },
      { q: "What does 'शान्ति' (śānti) mean?", opts: ["happiness","peace","beauty","truth"], answer: 1 },
      { q: "Which word means 'forest'?", opts: ["वन","जल","पर्वत","नदी"], answer: 0 },
    ],
    grammar: [
      { q: "What gender is 'फलम्' (phalam — fruit)?", opts: ["Masculine","Feminine","Neuter","Dual"], answer: 2 },
      { q: "Which case (Vibhakti) marks the SUBJECT of a sentence?", opts: ["Accusative","Nominative","Dative","Genitive"], answer: 1 },
      { q: "The ending '-asya' belongs to which case?", opts: ["Dative","Instrumental","Genitive","Locative"], answer: 2 },
      { q: "What does 'Sandhi' mean in Sanskrit?", opts: ["Separation","Joining","Grammar","Pronunciation"], answer: 1 },
      { q: "How many cases (Vibhakti) does Sanskrit have?", opts: ["6","7","8","10"], answer: 2 },
      { q: "'गच्छति' is which person and number?", opts: ["1st singular","2nd plural","3rd singular","2nd singular"], answer: 2 },
      { q: "What gender is 'नदी' (nadī — river)?", opts: ["Masculine","Neuter","Feminine","Dual"], answer: 2 },
      { q: "The Vocative case is used for...", opts: ["Showing possession","Addressing someone","Showing location","Showing means"], answer: 1 },
      { q: "What is the Sanskrit term for 'verb'?", opts: ["नाम","क्रिया","विभक्ति","सन्धि"], answer: 1 },
      { q: "In 'a + a → ā', which sandhi rule applies?", opts: ["Visarga Sandhi","Consonant Sandhi","Vowel Sandhi","Nasal Sandhi"], answer: 2 },
    ]
  },

  // ── MOTIVATIONAL MANTRAS ──────────────────────────────────
  mantras: [
    { text: "सा विद्या या विमुक्तये।", roman: "Sā vidyā yā vimuktaye.", meaning: "That is true knowledge which liberates." },
    { text: "विद्यां ददाति विनयम्।", roman: "Vidyāṃ dadāti vinayam.", meaning: "Knowledge bestows humility." },
    { text: "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।", roman: "Abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate.", meaning: "By practice and detachment, one masters anything." },
    { text: "उद्यमेन हि सिध्यन्ति कार्याणि।", roman: "Udyamena hi sidhyanti kāryāṇi.", meaning: "Through effort, all tasks succeed." },
    { text: "ज्ञानं परमं बलम्।", roman: "Jñānaṃ paramaṃ balam.", meaning: "Knowledge is the supreme strength." },
  ]
};
