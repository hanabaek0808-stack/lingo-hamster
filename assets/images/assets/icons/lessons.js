/* =========================================================
   LINGO HAMSTER — LESSONS DATABASE
   ========================================================= */

const LINGO_LESSONS = {

    english: [
        {
            id: "en-1",
            level: "A1",
            title: "Basic Greetings",
            description: "Learn simple English greetings.",
            words: ["hello", "goodbye", "please", "thank you", "sorry"],
            phrases: [
                "Hello!",
                "Good morning!",
                "How are you?",
                "Nice to meet you.",
                "See you later."
            ]
        },
        {
            id: "en-2",
            level: "A1",
            title: "Introducing Yourself",
            description: "Learn how to introduce yourself.",
            words: ["name", "student", "teacher", "friend", "country"],
            phrases: [
                "My name is Ali.",
                "I am a student.",
                "I am from Pakistan.",
                "Nice to meet you."
            ]
        },
        {
            id: "en-3",
            level: "A1",
            title: "Everyday Activities",
            description: "Learn vocabulary for daily activities.",
            words: ["wake", "eat", "drink", "work", "study", "sleep"],
            phrases: [
                "I wake up early.",
                "I eat breakfast.",
                "I study English.",
                "I go to work.",
                "I go to sleep."
            ]
        }
    ],

    spanish: [
        {
            id: "es-1",
            level: "A1",
            title: "Saludos básicos",
            description: "Aprende saludos básicos en español.",
            words: ["hola", "adiós", "por favor", "gracias", "perdón"],
            phrases: [
                "¡Hola!",
                "¡Buenos días!",
                "¿Cómo estás?",
                "Mucho gusto.",
                "Hasta luego."
            ]
        },
        {
            id: "es-2",
            level: "A1",
            title: "Presentarse",
            description: "Aprende a presentarte.",
            words: ["nombre", "estudiante", "profesor", "amigo", "país"],
            phrases: [
                "Me llamo Ali.",
                "Soy estudiante.",
                "Soy de Pakistán.",
                "Mucho gusto."
            ]
        }
    ],

    french: [
        {
            id: "fr-1",
            level: "A1",
            title: "Salutations",
            description: "Apprenez les salutations françaises.",
            words: ["bonjour", "au revoir", "merci", "pardon", "s'il vous plaît"],
            phrases: [
                "Bonjour !",
                "Comment allez-vous ?",
                "Merci beaucoup.",
                "Enchanté.",
                "À bientôt."
            ]
        },
        {
            id: "fr-2",
            level: "A1",
            title: "Se présenter",
            description: "Apprenez à vous présenter.",
            words: ["nom", "étudiant", "professeur", "ami", "pays"],
            phrases: [
                "Je m'appelle Ali.",
                "Je suis étudiant.",
                "Je viens du Pakistan.",
                "Enchanté."
            ]
        }
    ],

    italian: [
        {
            id: "it-1",
            level: "A1",
            title: "Saluti di base",
            description: "Impara i saluti italiani.",
            words: ["ciao", "arrivederci", "grazie", "scusa", "per favore"],
            phrases: [
                "Ciao!",
                "Buongiorno!",
                "Come stai?",
                "Piacere.",
                "A presto."
            ]
        },
        {
            id: "it-2",
            level: "A1",
            title: "Presentarsi",
            description: "Impara a presentarti.",
            words: ["nome", "studente", "insegnante", "amico", "paese"],
            phrases: [
                "Mi chiamo Ali.",
                "Sono uno studente.",
                "Vengo dal Pakistan.",
                "Piacere di conoscerti."
            ]
        }
    ],

    chinese: [
        {
            id: "zh-1",
            level: "A1",
            title: "基本问候",
            description: "学习基本的中文问候语。",
            words: ["你好", "再见", "谢谢", "对不起", "请"],
            phrases: [
                "你好！",
                "早上好！",
                "你好吗？",
                "很高兴认识你。",
                "再见！"
            ]
        },
        {
            id: "zh-2",
            level: "A1",
            title: "介绍自己",
            description: "学习如何用中文介绍自己。",
            words: ["名字", "学生", "老师", "朋友", "国家"],
            phrases: [
                "我叫阿里。",
                "我是学生。",
                "我来自巴基斯坦。",
                "很高兴认识你。"
            ]
        }
    ],

    korean: [
        {
            id: "ko-1",
            level: "A1",
            title: "기본 인사",
            description: "기본적인 한국어 인사를 배워요.",
            words: ["안녕하세요", "안녕히 가세요", "감사합니다", "미안합니다", "주세요"],
            phrases: [
                "안녕하세요!",
                "좋은 아침이에요!",
                "어떻게 지내세요?",
                "만나서 반가워요.",
                "또 만나요."
            ]
        },
        {
            id: "ko-2",
            level: "A1",
            title: "자기소개",
            description: "한국어로 자신을 소개하는 방법을 배워요.",
            words: ["이름", "학생", "선생님", "친구", "나라"],
            phrases: [
                "제 이름은 알리예요.",
                "저는 학생이에요.",
                "저는 파키스탄에서 왔어요.",
                "만나서 반가워요."
            ]
        }
    ],

    japanese: [
        {
            id: "ja-1",
            level: "A1",
            title: "基本のあいさつ",
            description: "基本的な日本語のあいさつを学びます。",
            words: ["こんにちは", "さようなら", "ありがとう", "すみません", "お願いします"],
            phrases: [
                "こんにちは！",
                "おはようございます。",
                "お元気ですか？",
                "はじめまして。",
                "また会いましょう。"
            ]
        },
        {
            id: "ja-2",
            level: "A1",
            title: "自己紹介",
            description: "日本語で自己紹介する方法を学びます。",
            words: ["名前", "学生", "先生", "友達", "国"],
            phrases: [
                "私の名前はアリです。",
                "私は学生です。",
                "パキスタンから来ました。",
                "はじめまして。"
            ]
        }
    ],

    german: [
        {
            id: "de-1",
            level: "A1",
            title: "Grundlegende Begrüßungen",
            description: "Lerne einfache deutsche Begrüßungen.",
            words: ["hallo", "auf Wiedersehen", "danke", "Entschuldigung", "bitte"],
            phrases: [
                "Hallo!",
                "Guten Morgen!",
                "Wie geht es dir?",
                "Schön, dich kennenzulernen.",
                "Bis später."
            ]
        },
        {
            id: "de-2",
            level: "A1",
            title: "Sich vorstellen",
            description: "Lerne, wie du dich vorstellst.",
            words: ["Name", "Schüler", "Lehrer", "Freund", "Land"],
            phrases: [
                "Ich heiße Ali.",
                "Ich bin Schüler.",
                "Ich komme aus Pakistan.",
                "Schön, dich kennenzulernen."
            ]
        }
    ],

    arabic: [
        {
            id: "ar-1",
            level: "A1",
            title: "التحيات الأساسية",
            description: "تعلم التحيات الأساسية باللغة العربية.",
            words: ["مرحبا", "وداعا", "شكرا", "آسف", "من فضلك"],
            phrases: [
                "مرحبا!",
                "صباح الخير!",
                "كيف حالك؟",
                "تشرفت بلقائك.",
                "إلى اللقاء."
            ]
        },
        {
            id: "ar-2",
            level: "A1",
            title: "التعريف بالنفس",
            description: "تعلم كيفية تقديم نفسك.",
            words: ["اسم", "طالب", "معلم", "صديق", "بلد"],
            phrases: [
                "اسمي علي.",
                "أنا طالب.",
                "أنا من باكستان.",
                "تشرفت بلقائك."
            ]
        }
    ],

    russian: [
        {
            id: "ru-1",
            level: "A1",
            title: "Основные приветствия",
            description: "Изучите основные русские приветствия.",
            words: ["привет", "до свидания", "спасибо", "извините", "пожалуйста"],
            phrases: [
                "Привет!",
                "Доброе утро!",
                "Как дела?",
                "Приятно познакомиться.",
                "До встречи."
            ]
        },
        {
            id: "ru-2",
            level: "A1",
            title: "Знакомство",
            description: "Учитесь представляться по-русски.",
            words: ["имя", "студент", "учитель", "друг", "страна"],
            phrases: [
                "Меня зовут Али.",
                "Я студент.",
                "Я из Пакистана.",
                "Приятно познакомиться."
            ]
        }
    ],

    urdu: [
        {
            id: "ur-1",
            level: "A1",
            title: "بنیادی سلام",
            description: "اردو میں بنیادی سلام اور دعائیہ جملے سیکھیں۔",
            words: ["سلام", "خدا حافظ", "شکریہ", "معاف کیجیے", "براہ کرم"],
            phrases: [
                "السلام علیکم!",
                "صبح بخیر!",
                "آپ کیسے ہیں؟",
                "آپ سے مل کر خوشی ہوئی۔",
                "پھر ملیں گے۔"
            ]
        },
        {
            id: "ur-2",
            level: "A1",
            title: "اپنا تعارف",
            description: "اردو میں اپنا تعارف کرنا سیکھیں۔",
            words: ["نام", "طالب علم", "استاد", "دوست", "ملک"],
            phrases: [
                "میرا نام علی ہے۔",
                "میں طالب علم ہوں۔",
                "میں پاکستان سے ہوں۔",
                "آپ سے مل کر خوشی ہوئی۔"
            ]
        }
    ]

};


/* =========================================================
   LESSON FUNCTIONS
   ========================================================= */

function getLessons(language) {
    return LINGO_LESSONS[language] || [];
}


function getLessonById(language, lessonId) {

    return getLessons(language).find(
        lesson => lesson.id === lessonId
    ) || null;

}


function getLessonsByLevel(language, level) {

    return getLessons(language).filter(
        lesson => lesson.level === level
    );

}


function searchLessons(language, searchTerm = "") {

    const term = searchTerm
        .toLowerCase()
        .trim();

    if (!term) {
        return getLessons(language);
    }

    return getLessons(language).filter(lesson => {

        const searchableText = [
            lesson.title,
            lesson.description,
            ...lesson.words,
            ...lesson.phrases
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(term);
    });

}


function getTotalLessonCount() {

    return Object.values(LINGO_LESSONS)
        .reduce(
            (total, lessons) =>
                total + lessons.length,
            0
        );

}


/* =========================================================
   GLOBAL LESSON API
   ========================================================= */

window.LingoLessons = {

    all: LINGO_LESSONS,

    get: getLessons,

    getById: getLessonById,

    byLevel: getLessonsByLevel,

    search: searchLessons,

    totalCount: getTotalLessonCount

};


/* =========================================================
   READY
   ========================================================= */

console.log(
    "🐹 Lingo Hamster lessons loaded."
);

console.log(
    "Total lessons:",
    getTotalLessonCount()
);
