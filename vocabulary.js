/* =========================================================
   LINGO HAMSTER
   MASTER VOCABULARY DATABASE
   ========================================================= */

/*
   Each vocabulary item uses this structure:

   {
       word: "Hello",
       translation: "Hola",
       pronunciation: "OH-la",
       example: "Hello, how are you?",
       exampleTranslation: "Hola, ¿cómo estás?",
       category: "greetings",
       partOfSpeech: "phrase",
       level: "A1"
   }

   Languages:
   English
   Spanish
   French
   Italian
   Chinese
   Korean
   Japanese
   German
   Arabic
   Russian
   Urdu
*/


const LINGO_LANGUAGES = {

    english: {
        name: "English",
        nativeName: "English",
        speechCode: "en-US"
    },

    spanish: {
        name: "Spanish",
        nativeName: "Español",
        speechCode: "es-ES"
    },

    french: {
        name: "French",
        nativeName: "Français",
        speechCode: "fr-FR"
    },

    italian: {
        name: "Italian",
        nativeName: "Italiano",
        speechCode: "it-IT"
    },

    chinese: {
        name: "Chinese",
        nativeName: "中文",
        speechCode: "zh-CN"
    },

    korean: {
        name: "Korean",
        nativeName: "한국어",
        speechCode: "ko-KR"
    },

    japanese: {
        name: "Japanese",
        nativeName: "日本語",
        speechCode: "ja-JP"
    },

    german: {
        name: "German",
        nativeName: "Deutsch",
        speechCode: "de-DE"
    },

    arabic: {
        name: "Arabic",
        nativeName: "العربية",
        speechCode: "ar-SA"
    },

    russian: {
        name: "Russian",
        nativeName: "Русский",
        speechCode: "ru-RU"
    },

    urdu: {
        name: "Urdu",
        nativeName: "اردو",
        speechCode: "ur-PK"
    }

};


/* =========================================================
   VOCABULARY CATEGORIES
   ========================================================= */

const LINGO_CATEGORIES = {

    greetings: "Greetings",

    family: "Family",

    people: "People",

    home: "Home",

    food: "Food & Drinks",

    education: "Education",

    work: "Work & Business",

    travel: "Travel",

    transport: "Transportation",

    shopping: "Shopping",

    health: "Health",

    body: "Body",

    emotions: "Emotions",

    nature: "Nature",

    weather: "Weather",

    animals: "Animals",

    clothing: "Clothing",

    technology: "Technology",

    verbs: "Common Verbs",

    adjectives: "Adjectives",

    adverbs: "Adverbs",

    numbers: "Numbers",

    time: "Time & Dates",

    colors: "Colors",

    places: "Places",

    school: "School",

    common: "Common Words",

    phrases: "Common Phrases"

};


/* =========================================================
   MASTER DATABASE
   ========================================================= */

const LINGO_VOCABULARY = {

    english: [],

    spanish: [],

    french: [],

    italian: [],

    chinese: [],

    korean: [],

    japanese: [],

    german: [],

    arabic: [],

    russian: [],

    urdu: []

};


/* =========================================================
   HELPER — ADD WORD
   ========================================================= */

function addWord(
    language,
    word,
    translation,
    category,
    options = {}
) {

    if (!LINGO_VOCABULARY[language]) {
        return;
    }

    LINGO_VOCABULARY[language].push({

        id:
            language +
            "-" +
            (LINGO_VOCABULARY[language].length + 1),

        word: word,

        translation: translation,

        pronunciation:
            options.pronunciation || "",

        example:
            options.example || "",

        exampleTranslation:
            options.exampleTranslation || "",

        category: category,

        partOfSpeech:
            options.partOfSpeech || "word",

        level:
            options.level || "A1"

    });

}


/* =========================================================
   ENGLISH
   ========================================================= */

addWord("english", "Hello", "Hello", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Good morning", "Good morning", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Good evening", "Good evening", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Goodbye", "Goodbye", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Please", "Please", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Thank you", "Thank you", "greetings",
    { partOfSpeech: "phrase", level: "A1" });

addWord("english", "Mother", "Mother", "family",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Father", "Father", "family",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Brother", "Brother", "family",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Sister", "Sister", "family",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "House", "House", "home",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Room", "Room", "home",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Door", "Door", "home",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Window", "Window", "home",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Water", "Water", "food",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Bread", "Bread", "food",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Apple", "Apple", "food",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "School", "School", "education",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Teacher", "Teacher", "education",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Book", "Book", "education",
    { partOfSpeech: "noun", level: "A1" });

addWord("english", "Learn", "Learn", "verbs",
    { partOfSpeech: "verb", level: "A1" });

addWord("english", "Speak", "Speak", "verbs",
    { partOfSpeech: "verb", level: "A1" });

addWord("english", "Write", "Write", "verbs",
    { partOfSpeech: "verb", level: "A1" });

addWord("english", "Read", "Read", "verbs",
    { partOfSpeech: "verb", level: "A1" });

addWord("english", "Happy", "Happy", "emotions",
    { partOfSpeech: "adjective", level: "A1" });

addWord("english", "Sad", "Sad", "emotions",
    { partOfSpeech: "adjective", level: "A1" });

addWord("english", "Big", "Big", "adjectives",
    { partOfSpeech: "adjective", level: "A1" });

addWord("english", "Small", "Small", "adjectives",
    { partOfSpeech: "adjective", level: "A1" });


/* =========================================================
   SPANISH
   ========================================================= */

addWord("spanish", "Hello", "Hola", "greetings",
    { pronunciation: "OH-la", level: "A1" });

addWord("spanish", "Good morning", "Buenos días", "greetings",
    { pronunciation: "BWEH-nos DEE-as", level: "A1" });

addWord("spanish", "Good evening", "Buenas noches", "greetings",
    { pronunciation: "BWEH-nas NO-ches", level: "A1" });

addWord("spanish", "Goodbye", "Adiós", "greetings",
    { pronunciation: "ah-DYOS", level: "A1" });

addWord("spanish", "Please", "Por favor", "greetings",
    { pronunciation: "por fa-VOR", level: "A1" });

addWord("spanish", "Thank you", "Gracias", "greetings",
    { pronunciation: "GRA-syas", level: "A1" });

addWord("spanish", "Mother", "Madre", "family",
    { pronunciation: "MA-dre", level: "A1" });

addWord("spanish", "Father", "Padre", "family",
    { pronunciation: "PA-dre", level: "A1" });

addWord("spanish", "Brother", "Hermano", "family",
    { pronunciation: "er-MA-no", level: "A1" });

addWord("spanish", "Sister", "Hermana", "family",
    { pronunciation: "er-MA-na", level: "A1" });

addWord("spanish", "House", "Casa", "home",
    { pronunciation: "KA-sa", level: "A1" });

addWord("spanish", "Room", "Habitación", "home",
    { pronunciation: "a-bee-ta-SYON", level: "A1" });

addWord("spanish", "Door", "Puerta", "home",
    { pronunciation: "PWER-ta", level: "A1" });

addWord("spanish", "Water", "Agua", "food",
    { pronunciation: "A-gwa", level: "A1" });

addWord("spanish", "Bread", "Pan", "food",
    { pronunciation: "pan", level: "A1" });

addWord("spanish", "Apple", "Manzana", "food",
    { pronunciation: "man-SA-na", level: "A1" });

addWord("spanish", "School", "Escuela", "education",
    { pronunciation: "es-KWE-la", level: "A1" });

addWord("spanish", "Teacher", "Profesor", "education",
    { pronunciation: "pro-fe-SOR", level: "A1" });

addWord("spanish", "Book", "Libro", "education",
    { pronunciation: "LEE-bro", level: "A1" });

addWord("spanish", "Learn", "Aprender", "verbs",
    { pronunciation: "a-pren-DER", level: "A1" });

addWord("spanish", "Speak", "Hablar", "verbs",
    { pronunciation: "a-BLAR", level: "A1" });

addWord("spanish", "Write", "Escribir", "verbs",
    { pronunciation: "es-kree-BEER", level: "A1" });

addWord("spanish", "Happy", "Feliz", "emotions",
    { pronunciation: "fe-LEES", level: "A1" });

addWord("spanish", "Sad", "Triste", "emotions",
    { pronunciation: "TREES-te", level: "A1" });


/* =========================================================
   FRENCH
   ========================================================= */

addWord("french", "Hello", "Bonjour", "greetings",
    { pronunciation: "bon-ZHOOR", level: "A1" });

addWord("french", "Good morning", "Bonjour", "greetings",
    { pronunciation: "bon-ZHOOR", level: "A1" });

addWord("french", "Good evening", "Bonsoir", "greetings",
    { pronunciation: "bon-SWAHR", level: "A1" });

addWord("french", "Goodbye", "Au revoir", "greetings",
    { pronunciation: "oh ruh-VWAR", level: "A1" });

addWord("french", "Please", "S'il vous plaît", "greetings",
    { pronunciation: "seel voo PLEH", level: "A1" });

addWord("french", "Thank you", "Merci", "greetings",
    { pronunciation: "mehr-SEE", level: "A1" });

addWord("french", "Mother", "Mère", "family",
    { pronunciation: "mehr", level: "A1" });

addWord("french", "Father", "Père", "family",
    { pronunciation: "pehr", level: "A1" });

addWord("french", "Brother", "Frère", "family",
    { pronunciation: "frehr", level: "A1" });

addWord("french", "Sister", "Sœur", "family",
    { pronunciation: "sur", level: "A1" });

addWord("french", "House", "Maison", "home",
    { pronunciation: "meh-ZON", level: "A1" });

addWord("french", "Room", "Chambre", "home",
    { pronunciation: "SHAHMBR", level: "A1" });

addWord("french", "Door", "Porte", "home",
    { pronunciation: "port", level: "A1" });

addWord("french", "Water", "Eau", "food",
    { pronunciation: "oh", level: "A1" });

addWord("french", "Bread", "Pain", "food",
    { pronunciation: "pan", level: "A1" });

addWord("french", "Apple", "Pomme", "food",
    { pronunciation: "pom", level: "A1" });

addWord("french", "School", "École", "education",
    { pronunciation: "ay-KOL", level: "A1" });

addWord("french", "Teacher", "Professeur", "education",
    { pronunciation: "pro-fe-SUR", level: "A1" });

addWord("french", "Book", "Livre", "education",
    { pronunciation: "LEEVR", level: "A1" });

addWord("french", "Learn", "Apprendre", "verbs",
    { pronunciation: "a-PRAHN-druh", level: "A1" });

addWord("french", "Speak", "Parler", "verbs",
    { pronunciation: "par-LAY", level: "A1" });

addWord("french", "Happy", "Heureux", "emotions",
    { pronunciation: "uh-RUH", level: "A1" });


/* =========================================================
   ITALIAN
   ========================================================= */

addWord("italian", "Hello", "Ciao", "greetings",
    { pronunciation: "chow", level: "A1" });

addWord("italian", "Good morning", "Buongiorno", "greetings",
    { pronunciation: "bwon-JOR-no", level: "A1" });

addWord("italian", "Good evening", "Buonasera", "greetings",
    { pronunciation: "bwoh-na-SEH-ra", level: "A1" });

addWord("italian", "Goodbye", "Arrivederci", "greetings",
    { pronunciation: "ah-ree-veh-DER-chee", level: "A1" });

addWord("italian", "Please", "Per favore", "greetings",
    { pronunciation: "per fa-VO-re", level: "A1" });

addWord("italian", "Thank you", "Grazie", "greetings",
    { pronunciation: "GRAHT-see-eh", level: "A1" });

addWord("italian", "Mother", "Madre", "family",
    { pronunciation: "MA-dreh", level: "A1" });

addWord("italian", "Father", "Padre", "family",
    { pronunciation: "PA-dreh", level: "A1" });

addWord("italian", "Brother", "Fratello", "family",
    { pronunciation: "fra-TEL-lo", level: "A1" });

addWord("italian", "Sister", "Sorella", "family",
    { pronunciation: "so-REL-la", level: "A1" });

addWord("italian", "House", "Casa", "home",
    { pronunciation: "KA-za", level: "A1" });

addWord("italian", "Room", "Stanza", "home",
    { pronunciation: "STAN-tsa", level: "A1" });

addWord("italian", "Door", "Porta", "home",
    { pronunciation: "POR-ta", level: "A1" });

addWord("italian", "Water", "Acqua", "food",
    { pronunciation: "AK-kwa", level: "A1" });

addWord("italian", "Bread", "Pane", "food",
    { pronunciation: "PAH-neh", level: "A1" });

addWord("italian", "Apple", "Mela", "food",
    { pronunciation: "MEH-la", level: "A1" });

addWord("italian", "School", "Scuola", "education",
    { pronunciation: "SKWO-la", level: "A1" });

addWord("italian", "Teacher", "Insegnante", "education",
    { pronunciation: "in-sen-YAN-teh", level: "A1" });

addWord("italian", "Book", "Libro", "education",
    { pronunciation: "LEE-bro", level: "A1" });


/* =========================================================
   CHINESE
   ========================================================= */

addWord("chinese", "Hello", "你好", "greetings",
    { pronunciation: "nǐ hǎo", level: "A1" });

addWord("chinese", "Good morning", "早上好", "greetings",
    { pronunciation: "zǎo shàng hǎo", level: "A1" });

addWord("chinese", "Goodbye", "再见", "greetings",
    { pronunciation: "zài jiàn", level: "A1" });

addWord("chinese", "Please", "请", "greetings",
    { pronunciation: "qǐng", level: "A1" });

addWord("chinese", "Thank you", "谢谢", "greetings",
    { pronunciation: "xiè xie", level: "A1" });

addWord("chinese", "Mother", "妈妈", "family",
    { pronunciation: "māma", level: "A1" });

addWord("chinese", "Father", "爸爸", "family",
    { pronunciation: "bàba", level: "A1" });

addWord("chinese", "Brother", "哥哥", "family",
    { pronunciation: "gēge", level: "A1" });

addWord("chinese", "Sister", "姐姐", "family",
    { pronunciation: "jiějie", level: "A1" });

addWord("chinese", "House", "房子", "home",
    { pronunciation: "fángzi", level: "A1" });

addWord("chinese", "Room", "房间", "home",
    { pronunciation: "fángjiān", level: "A1" });

addWord("chinese", "Door", "门", "home",
    { pronunciation: "mén", level: "A1" });

addWord("chinese", "Water", "水", "food",
    { pronunciation: "shuǐ", level: "A1" });

addWord("chinese", "Rice", "米饭", "food",
    { pronunciation: "mǐfàn", level: "A1" });

addWord("chinese", "Apple", "苹果", "food",
    { pronunciation: "píngguǒ", level: "A1" });

addWord("chinese", "School", "学校", "education",
    { pronunciation: "xuéxiào", level: "A1" });

addWord("chinese", "Teacher", "老师", "education",
    { pronunciation: "lǎoshī", level: "A1" });

addWord("chinese", "Book", "书", "education",
    { pronunciation: "shū", level: "A1" });


/* =========================================================
   KOREAN
   ========================================================= */

addWord("korean", "Hello", "안녕하세요", "greetings",
    { pronunciation: "annyeonghaseyo", level: "A1" });

addWord("korean", "Goodbye", "안녕히 가세요", "greetings",
    { pronunciation: "annyeonghi gaseyo", level: "A1" });

addWord("korean", "Please", "부탁합니다", "greetings",
    { pronunciation: "butakhamnida", level: "A1" });

addWord("korean", "Thank you", "감사합니다", "greetings",
    { pronunciation: "gamsahamnida", level: "A1" });

addWord("korean", "Mother", "어머니", "family",
    { pronunciation: "eomeoni", level: "A1" });

addWord("korean", "Father", "아버지", "family",
    { pronunciation: "abeoji", level: "A1" });

addWord("korean", "Brother", "형제", "family",
    { pronunciation: "hyeongje", level: "A1" });

addWord("korean", "Sister", "자매", "family",
    { pronunciation: "jamae", level: "A1" });

addWord("korean", "House", "집", "home",
    { pronunciation: "jip", level: "A1" });

addWord("korean", "Room", "방", "home",
    { pronunciation: "bang", level: "A1" });

addWord("korean", "Door", "문", "home",
    { pronunciation: "mun", level: "A1" });

addWord("korean", "Water", "물", "food",
    { pronunciation: "mul", level: "A1" });

addWord("korean", "Rice", "밥", "food",
    { pronunciation: "bap", level: "A1" });

addWord("korean", "Apple", "사과", "food",
    { pronunciation: "sagwa", level: "A1" });

addWord("korean", "School", "학교", "education",
    { pronunciation: "hakgyo", level: "A1" });

addWord("korean", "Teacher", "선생님", "education",
    { pronunciation: "seonsaengnim", level: "A1" });

addWord("korean", "Book", "책", "education",
    { pronunciation: "chaek", level: "A1" });


/* =========================================================
   JAPANESE
   ========================================================= */

addWord("japanese", "Hello", "こんにちは", "greetings",
    { pronunciation: "konnichiwa", level: "A1" });

addWord("japanese", "Good morning", "おはようございます", "greetings",
    { pronunciation: "ohayou gozaimasu", level: "A1" });

addWord("japanese", "Good evening", "こんばんは", "greetings",
    { pronunciation: "konbanwa", level: "A1" });

addWord("japanese", "Goodbye", "さようなら", "greetings",
    { pronunciation: "sayounara", level: "A1" });

addWord("japanese", "Please", "お願いします", "greetings",
    { pronunciation: "onegaishimasu", level: "A1" });

addWord("japanese", "Thank you", "ありがとう", "greetings",
    { pronunciation: "arigatou", level: "A1" });

addWord("japanese", "Mother", "母", "family",
    { pronunciation: "haha", level: "A1" });

addWord("japanese", "Father", "父", "family",
    { pronunciation: "chichi", level: "A1" });

addWord("japanese", "Brother", "兄弟", "family",
    { pronunciation: "kyoudai", level: "A1" });

addWord("japanese", "Sister", "姉妹", "family",
    { pronunciation: "shimai", level: "A1" });

addWord("japanese", "House", "家", "home",
    { pronunciation: "ie", level: "A1" });

addWord("japanese", "Room", "部屋", "home",
    { pronunciation: "heya", level: "A1" });

addWord("japanese", "Door", "ドア", "home",
    { pronunciation: "doa", level: "A1" });

addWord("japanese", "Water", "水", "food",
    { pronunciation: "mizu", level: "A1" });

addWord("japanese", "Rice", "ご飯", "food",
    { pronunciation: "gohan", level: "A1" });

addWord("japanese", "Apple", "りんご", "food",
    { pronunciation: "ringo", level: "A1" });

addWord("japanese", "School", "学校", "education",
    { pronunciation: "gakkou", level: "A1" });

addWord("japanese", "Teacher", "先生", "education",
    { pronunciation: "sensei", level: "A1" });

addWord("japanese", "Book", "本", "education",
    { pronunciation: "hon", level: "A1" });


/* =========================================================
   GERMAN
   ========================================================= */

addWord("german", "Hello", "Hallo", "greetings",
    { pronunciation: "HA-lo", level: "A1" });

addWord("german", "Good morning", "Guten Morgen", "greetings",
    { pronunciation: "GOO-ten MOR-gen", level: "A1" });

addWord("german", "Good evening", "Guten Abend", "greetings",
    { pronunciation: "GOO-ten AH-bent", level: "A1" });

addWord("german", "Goodbye", "Auf Wiedersehen", "greetings",
    { pronunciation: "owf VEE-der-zay-en", level: "A1" });

addWord("german", "Please", "Bitte", "greetings",
    { pronunciation: "BIT-teh", level: "A1" });

addWord("german", "Thank you", "Danke", "greetings",
    { pronunciation: "DAN-keh", level: "A1" });

addWord("german", "Mother", "Mutter", "family",
    { pronunciation: "MOO-ter", level: "A1" });

addWord("german", "Father", "Vater", "family",
    { pronunciation: "FA-ter", level: "A1" });

addWord("german", "Brother", "Bruder", "family",
    { pronunciation: "BROO-der", level: "A1" });

addWord("german", "Sister", "Schwester", "family",
    { pronunciation: "SHVES-ter", level: "A1" });

addWord("german", "House", "Haus", "home",
    { pronunciation: "howss", level: "A1" });

addWord("german", "Room", "Zimmer", "home",
    { pronunciation: "TSIM-mer", level: "A1" });

addWord("german", "Door", "Tür", "home",
    { pronunciation: "tewr", level: "A1" });

addWord("german", "Water", "Wasser", "food",
    { pronunciation: "VAS-ser", level: "A1" });

addWord("german", "Bread", "Brot", "food",
    { pronunciation: "broht", level: "A1" });

addWord("german", "Apple", "Apfel", "food",
    { pronunciation: "AP-fel", level: "A1" });

addWord("german", "School", "Schule", "education",
    { pronunciation: "SHOO-leh", level: "A1" });

addWord("german", "Teacher", "Lehrer", "education",
    { pronunciation: "LAY-rer", level: "A1" });

addWord("german", "Book", "Buch", "education",
    { pronunciation: "bookh", level: "A1" });


/* =========================================================
   ARABIC
   ========================================================= */

addWord("arabic", "Hello", "مرحبا", "greetings",
    { pronunciation: "marhaban", level: "A1" });

addWord("arabic", "Good morning", "صباح الخير", "greetings",
    { pronunciation: "sabah al-khayr", level: "A1" });

addWord("arabic", "Good evening", "مساء الخير", "greetings",
    { pronunciation: "masa al-khayr", level: "A1" });

addWord("arabic", "Goodbye", "مع السلامة", "greetings",
    { pronunciation: "ma'a as-salama", level: "A1" });

addWord("arabic", "Please", "من فضلك", "greetings",
    { pronunciation: "min fadlik", level: "A1" });

addWord("arabic", "Thank you", "شكرا", "greetings",
    { pronunciation: "shukran", level: "A1" });

addWord("arabic", "Mother", "أم", "family",
    { pronunciation: "umm", level: "A1" });

addWord("arabic", "Father", "أب", "family",
    { pronunciation: "ab", level: "A1" });

addWord("arabic", "Brother", "أخ", "family",
    { pronunciation: "akh", level: "A1" });

addWord("arabic", "Sister", "أخت", "family",
    { pronunciation: "ukht", level: "A1" });

addWord("arabic", "House", "بيت", "home",
    { pronunciation: "bayt", level: "A1" });

addWord("arabic", "Room", "غرفة", "home",
    { pronunciation: "ghurfa", level: "A1" });

addWord("arabic", "Door", "باب", "home",
    { pronunciation: "bab", level: "A1" });

addWord("arabic", "Water", "ماء", "food",
    { pronunciation: "maa", level: "A1" });

addWord("arabic", "Bread", "خبز", "food",
    { pronunciation: "khubz", level: "A1" });

addWord("arabic", "Apple", "تفاحة", "food",
    { pronunciation: "tuffaha", level: "A1" });

addWord("arabic", "School", "مدرسة", "education",
    { pronunciation: "madrasa", level: "A1" });

addWord("arabic", "Teacher", "معلم", "education",
    { pronunciation: "mu'allim", level: "A1" });

addWord("arabic", "Book", "كتاب", "education",
    { pronunciation: "kitab", level: "A1" });


/* =========================================================
   RUSSIAN
   ========================================================= */

addWord("russian", "Hello", "Привет", "greetings",
    { pronunciation: "privet", level: "A1" });

addWord("russian", "Good morning", "Доброе утро", "greetings",
    { pronunciation: "dobroye utro", level: "A1" });

addWord("russian", "Good evening", "Добрый вечер", "greetings",
    { pronunciation: "dobryy vecher", level: "A1" });

addWord("russian", "Goodbye", "До свидания", "greetings",
    { pronunciation: "do svidaniya", level: "A1" });

addWord("russian", "Please", "Пожалуйста", "greetings",
    { pronunciation: "pozhaluysta", level: "A1" });

addWord("russian", "Thank you", "Спасибо", "greetings",
    { pronunciation: "spasibo", level: "A1" });

addWord("russian", "Mother", "Мать", "family",
    { pronunciation: "mat", level: "A1" });

addWord("russian", "Father", "Отец", "family",
    { pronunciation: "otets", level: "A1" });

addWord("russian", "Brother", "Брат", "family",
    { pronunciation: "brat", level: "A1" });

addWord("russian", "Sister", "Сестра", "family",
    { pronunciation: "sestra", level: "A1" });

addWord("russian", "House", "Дом", "home",
    { pronunciation: "dom", level: "A1" });

addWord("russian", "Room", "Комната", "home",
    { pronunciation: "komnata", level: "A1" });

addWord("russian", "Door", "Дверь", "home",
    { pronunciation: "dver", level: "A1" });

addWord("russian", "Water", "Вода", "food",
    { pronunciation: "voda", level: "A1" });

addWord("russian", "Bread", "Хлеб", "food",
    { pronunciation: "khleb", level: "A1" });

addWord("russian", "Apple", "Яблоко", "food",
    { pronunciation: "yabloko", level: "A1" });

addWord("russian", "School", "Школа", "education",
    { pronunciation: "shkola", level: "A1" });

addWord("russian", "Teacher", "Учитель", "education",
    { pronunciation: "uchitel", level: "A1" });

addWord("russian", "Book", "Книга", "education",
    { pronunciation: "kniga", level: "A1" });


/* =========================================================
   URDU
   ========================================================= */

addWord("urdu", "Hello", "سلام", "greetings",
    { pronunciation: "salaam", level: "A1" });

addWord("urdu", "Good morning", "صبح بخیر", "greetings",
    { pronunciation: "subah bakhair", level: "A1" });

addWord("urdu", "Good evening", "شام بخیر", "greetings",
    { pronunciation: "shaam bakhair", level: "A1" });

addWord("urdu", "Goodbye", "خدا حافظ", "greetings",
    { pronunciation: "khuda hafiz", level: "A1" });

addWord("urdu", "Please", "براہ کرم", "greetings",
    { pronunciation: "barah-e-karam", level: "A1" });

addWord("urdu", "Thank you", "شکریہ", "greetings",
    { pronunciation: "shukriya", level: "A1" });

addWord("urdu", "Mother", "ماں", "family",
    { pronunciation: "maa", level: "A1" });

addWord("urdu", "Father", "والد", "family",
    { pronunciation: "walid", level: "A1" });

addWord("urdu", "Brother", "بھائی", "family",
    { pronunciation: "bhai", level: "A1" });

addWord("urdu", "Sister", "بہن", "family",
    { pronunciation: "behen", level: "A1" });

addWord("urdu", "House", "گھر", "home",
    { pronunciation: "ghar", level: "A1" });

addWord("urdu", "Room", "کمرہ", "home",
    { pronunciation: "kamra", level: "A1" });

addWord("urdu", "Door", "دروازہ", "home",
    { pronunciation: "darwaza", level: "A1" });

addWord("urdu", "Water", "پانی", "food",
    { pronunciation: "pani", level: "A1" });

addWord("urdu", "Bread", "روٹی", "food",
    { pronunciation: "roti", level: "A1" });

addWord("urdu", "Apple", "سیب", "food",
    { pronunciation: "seb", level: "A1" });

addWord("urdu", "School", "اسکول", "education",
    { pronunciation: "school", level: "A1" });

addWord("urdu", "Teacher", "استاد", "education",
    { pronunciation: "ustaad", level: "A1" });

addWord("urdu", "Book", "کتاب", "education",
    { pronunciation: "kitaab", level: "A1" });


/* =========================================================
   DATABASE FUNCTIONS
   ========================================================= */

function getVocabulary(language) {

    return LINGO_VOCABULARY[language] || [];

}


function getVocabularyByCategory(
    language,
    category
) {

    return getVocabulary(language)
        .filter(
            item => item.category === category
        );

}


function searchVocabulary(
    language,
    searchTerm = "",
    category = "all",
    level = "all"
) {

    const search =
        searchTerm
            .toLowerCase()
            .trim();


    return getVocabulary(language)
        .filter(function (item) {

            const matchesSearch =
                !search ||
                item.word
                    .toLowerCase()
                    .includes(search) ||
                item.translation
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "all" ||
                item.category === category;


            const matchesLevel =
                level === "all" ||
                item.level === level;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesLevel
            );

        });

}


function getRandomWord(language) {

    const words =
        getVocabulary(language);


    if (!words.length) {
        return null;
    }


    return words[
        Math.floor(
            Math.random() * words.length
        )
    ];

}


function getWordCount(language) {

    return getVocabulary(language).length;

}


function getTotalVocabularyCount() {

    return Object.values(
        LINGO_VOCABULARY
    )
    .reduce(
        (total, words) =>
            total + words.length,
        0
    );

}


/* =========================================================
   CATEGORY COUNT
   ========================================================= */

function getCategoryCounts(language) {

    const counts = {};


    getVocabulary(language)
        .forEach(function (word) {

            counts[word.category] =
                (counts[word.category] || 0) + 1;

        });


    return counts;

}


/* =========================================================
   EXPORT GLOBAL APP DATA
   ========================================================= */

window.LingoVocabulary = {

    languages:
        LINGO_LANGUAGES,

    categories:
        LINGO_CATEGORIES,

    vocabulary:
        LINGO_VOCABULARY,

    get:
        getVocabulary,

    getByCategory:
        getVocabularyByCategory,

    search:
        searchVocabulary,

    random:
        getRandomWord,

    count:
        getWordCount,

    totalCount:
        getTotalVocabularyCount,

    categoryCounts:
        getCategoryCounts

};


/* =========================================================
   DATABASE READY
   ========================================================= */

console.log(
    "🐹 Lingo Hamster vocabulary database loaded."
);

console.log(
    "Languages:",
    Object.keys(LINGO_LANGUAGES).length
);

console.log(
    "Vocabulary entries:",
    getTotalVocabularyCount()
);
