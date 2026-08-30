/* =========================================================
   LINGO HAMSTER — COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. APP DATA
   ========================================================= */

const vocabulary = {

    english: [
        { word: "Hello", meaning: "Hello", category: "greetings" },
        { word: "Goodbye", meaning: "Goodbye", category: "greetings" },
        { word: "Water", meaning: "Water", category: "food" },
        { word: "Book", meaning: "Book", category: "school" },
        { word: "Friend", meaning: "Friend", category: "family" },
        { word: "House", meaning: "House", category: "daily-life" }
    ],

    spanish: [
        { word: "Hello", meaning: "Hola", category: "greetings" },
        { word: "Goodbye", meaning: "Adiós", category: "greetings" },
        { word: "Water", meaning: "Agua", category: "food" },
        { word: "Book", meaning: "Libro", category: "school" },
        { word: "Friend", meaning: "Amigo", category: "family" },
        { word: "House", meaning: "Casa", category: "daily-life" }
    ],

    french: [
        { word: "Hello", meaning: "Bonjour", category: "greetings" },
        { word: "Goodbye", meaning: "Au revoir", category: "greetings" },
        { word: "Water", meaning: "Eau", category: "food" },
        { word: "Book", meaning: "Livre", category: "school" },
        { word: "Friend", meaning: "Ami", category: "family" },
        { word: "House", meaning: "Maison", category: "daily-life" }
    ],

    italian: [
        { word: "Hello", meaning: "Ciao", category: "greetings" },
        { word: "Goodbye", meaning: "Arrivederci", category: "greetings" },
        { word: "Water", meaning: "Acqua", category: "food" },
        { word: "Book", meaning: "Libro", category: "school" },
        { word: "Friend", meaning: "Amico", category: "family" },
        { word: "House", meaning: "Casa", category: "daily-life" }
    ],

    chinese: [
        { word: "Hello", meaning: "你好", category: "greetings" },
        { word: "Goodbye", meaning: "再见", category: "greetings" },
        { word: "Water", meaning: "水", category: "food" },
        { word: "Book", meaning: "书", category: "school" },
        { word: "Friend", meaning: "朋友", category: "family" },
        { word: "House", meaning: "房子", category: "daily-life" }
    ],

    korean: [
        { word: "Hello", meaning: "안녕하세요", category: "greetings" },
        { word: "Goodbye", meaning: "안녕히 가세요", category: "greetings" },
        { word: "Water", meaning: "물", category: "food" },
        { word: "Book", meaning: "책", category: "school" },
        { word: "Friend", meaning: "친구", category: "family" },
        { word: "House", meaning: "집", category: "daily-life" }
    ],

    japanese: [
        { word: "Hello", meaning: "こんにちは", category: "greetings" },
        { word: "Goodbye", meaning: "さようなら", category: "greetings" },
        { word: "Water", meaning: "水", category: "food" },
        { word: "Book", meaning: "本", category: "school" },
        { word: "Friend", meaning: "友達", category: "family" },
        { word: "House", meaning: "家", category: "daily-life" }
    ],

    german: [
        { word: "Hello", meaning: "Hallo", category: "greetings" },
        { word: "Goodbye", meaning: "Auf Wiedersehen", category: "greetings" },
        { word: "Water", meaning: "Wasser", category: "food" },
        { word: "Book", meaning: "Buch", category: "school" },
        { word: "Friend", meaning: "Freund", category: "family" },
        { word: "House", meaning: "Haus", category: "daily-life" }
    ],

    arabic: [
        { word: "Hello", meaning: "مرحبا", category: "greetings" },
        { word: "Goodbye", meaning: "مع السلامة", category: "greetings" },
        { word: "Water", meaning: "ماء", category: "food" },
        { word: "Book", meaning: "كتاب", category: "school" },
        { word: "Friend", meaning: "صديق", category: "family" },
        { word: "House", meaning: "بيت", category: "daily-life" }
    ],

    russian: [
        { word: "Hello", meaning: "Привет", category: "greetings" },
        { word: "Goodbye", meaning: "До свидания", category: "greetings" },
        { word: "Water", meaning: "Вода", category: "food" },
        { word: "Book", meaning: "Книга", category: "school" },
        { word: "Friend", meaning: "Друг", category: "family" },
        { word: "House", meaning: "Дом", category: "daily-life" }
    ],

    urdu: [
        { word: "Hello", meaning: "سلام", category: "greetings" },
        { word: "Goodbye", meaning: "خدا حافظ", category: "greetings" },
        { word: "Water", meaning: "پانی", category: "food" },
        { word: "Book", meaning: "کتاب", category: "school" },
        { word: "Friend", meaning: "دوست", category: "family" },
        { word: "House", meaning: "گھر", category: "daily-life" }
    ]

};


/* =========================================================
   2. STORIES
   ========================================================= */

const stories = [

    {
        id: 1,
        title: "The Little Hamster",
        level: "beginner",
        text: "A little hamster wakes up early. He finds a small piece of food and takes it home."
    },

    {
        id: 2,
        title: "A New Friend",
        level: "beginner",
        text: "Sara goes to the park. She meets a new friend and they play together."
    },

    {
        id: 3,
        title: "The Lost Book",
        level: "beginner",
        text: "Ali cannot find his book. He looks around the classroom and finally finds it under his desk."
    },

    {
        id: 4,
        title: "A Rainy Morning",
        level: "beginner",
        text: "It is raining in the morning. Emma takes her umbrella and walks to school."
    },

    {
        id: 5,
        title: "The Small Garden",
        level: "beginner",
        text: "Tom has a small garden. He plants flowers and waters them every morning."
    },

    {
        id: 6,
        title: "The Happy Family",
        level: "beginner",
        text: "A family sits together for dinner. They talk about their day and laugh together."
    },

    {
        id: 7,
        title: "The Clever Dog",
        level: "beginner",
        text: "Max is a clever dog. He finds his owner's lost keys near the garden."
    },

    {
        id: 8,
        title: "The School Trip",
        level: "beginner",
        text: "The students visit a museum. They learn many interesting things about history."
    },

    {
        id: 9,
        title: "The Blue Bicycle",
        level: "beginner",
        text: "Mia gets a blue bicycle. She learns how to ride it with her father."
    },

    {
        id: 10,
        title: "The Morning Walk",
        level: "beginner",
        text: "David walks every morning. He enjoys the fresh air and the quiet streets."
    },

    {
        id: 11,
        title: "The Friendly Teacher",
        level: "beginner",
        text: "A friendly teacher enters the classroom. She smiles and helps her students."
    },

    {
        id: 12,
        title: "The Birthday Gift",
        level: "beginner",
        text: "Lina receives a beautiful book for her birthday. She is very happy."
    },

    {
        id: 13,
        title: "The Busy Market",
        level: "intermediate",
        text: "The market is busy today. People are buying fruit, vegetables, clothes and other useful things."
    },

    {
        id: 14,
        title: "A Journey to the City",
        level: "intermediate",
        text: "Daniel travels to the city by train. He watches the countryside through the window."
    },

    {
        id: 15,
        title: "The Helpful Neighbor",
        level: "intermediate",
        text: "Maria's neighbor helps her carry some heavy boxes into her new house."
    },

    {
        id: 16,
        title: "The Forgotten Umbrella",
        level: "intermediate",
        text: "James leaves his umbrella on the bus. The next morning, he contacts the bus station."
    },

    {
        id: 17,
        title: "The Cooking Lesson",
        level: "intermediate",
        text: "Nora learns how to cook a traditional meal from her grandmother."
    },

    {
        id: 18,
        title: "The Mountain Village",
        level: "intermediate",
        text: "A small village lies between two mountains. The people there live a peaceful life."
    },

    {
        id: 19,
        title: "The Library",
        level: "intermediate",
        text: "Omar visits the library every weekend. He enjoys discovering books about different cultures."
    },

    {
        id: 20,
        title: "The Unexpected Journey",
        level: "intermediate",
        text: "A simple journey becomes an exciting adventure when the travelers discover a beautiful hidden lake."
    },

    {
        id: 21,
        title: "The Old Photograph",
        level: "intermediate",
        text: "Anna finds an old photograph in a box. She asks her grandmother about the people in it."
    },

    {
        id: 22,
        title: "The Community Project",
        level: "intermediate",
        text: "Young people work together to clean a local park and plant new trees."
    },

    {
        id: 23,
        title: "The School Competition",
        level: "intermediate",
        text: "Students prepare for a language competition. They practice every afternoon."
    },

    {
        id: 24,
        title: "The Helpful Stranger",
        level: "intermediate",
        text: "A traveler gets lost in a new city. A stranger kindly shows him the way."
    },

    {
        id: 25,
        title: "The Winter Evening",
        level: "intermediate",
        text: "Snow falls outside while the family sits beside the warm fireplace."
    },

    {
        id: 26,
        title: "The Young Artist",
        level: "intermediate",
        text: "A young artist spends weeks painting a picture of the town where she grew up."
    },

    {
        id: 27,
        title: "The Science Experiment",
        level: "intermediate",
        text: "Students conduct a simple science experiment and carefully record their results."
    },

    {
        id: 28,
        title: "The Train Journey",
        level: "intermediate",
        text: "During a long train journey, two strangers begin talking about their dreams."
    },

    {
        id: 29,
        title: "The Secret Garden",
        level: "intermediate",
        text: "Behind an old house, a child discovers a forgotten garden filled with colorful flowers."
    },

    {
        id: 30,
        title: "The Power of Kindness",
        level: "intermediate",
        text: "One small act of kindness changes the day of several people in a busy neighborhood."
    },

    {
        id: 31,
        title: "A Difficult Decision",
        level: "advanced",
        text: "When faced with a difficult decision, Daniel carefully considers the consequences before choosing his path."
    },

    {
        id: 32,
        title: "The Changing City",
        level: "advanced",
        text: "The city has changed dramatically over the years, but some old traditions remain important to its people."
    },

    {
        id: 33,
        title: "The Power of Education",
        level: "advanced",
        text: "Education can transform individuals and communities by providing knowledge, confidence and new opportunities."
    },

    {
        id: 34,
        title: "The Forgotten Village",
        level: "advanced",
        text: "A researcher discovers an almost forgotten village and begins documenting its history and traditions."
    },

    {
        id: 35,
        title: "A New Beginning",
        level: "advanced",
        text: "After facing several challenges, Sofia decides to begin again and build a different future."
    },

    {
        id: 36,
        title: "The Long Road",
        level: "advanced",
        text: "The journey is difficult, but every challenge teaches the travelers something valuable about themselves."
    },

    {
        id: 37,
        title: "The Meaning of Success",
        level: "advanced",
        text: "Different people define success in different ways. For some, it means wealth; for others, it means freedom and happiness."
    },

    {
        id: 38,
        title: "The Environmental Challenge",
        level: "advanced",
        text: "Communities around the world are searching for practical ways to protect the environment and reduce waste."
    },

    {
        id: 39,
        title: "The Digital World",
        level: "advanced",
        text: "Technology has changed how people communicate, work and learn, creating both opportunities and challenges."
    },

    {
        id: 40,
        title: "The Power of Language",
        level: "advanced",
        text: "Learning another language can open a door to new cultures, friendships and ways of understanding the world."
    },

    {
        id: 41,
        title: "The Independent Traveler",
        level: "advanced",
        text: "Traveling alone teaches a person how to solve problems, make decisions and become more confident."
    },

    {
        id: 42,
        title: "The Future of Learning",
        level: "advanced",
        text: "Modern education is changing rapidly as technology creates new ways for students to learn."
    },

    {
        id: 43,
        title: "A Lesson from Failure",
        level: "advanced",
        text: "Failure can be disappointing, but it can also teach lessons that success sometimes cannot."
    },

    {
        id: 44,
        title: "The Power of Curiosity",
        level: "advanced",
        text: "Curiosity encourages people to ask questions, explore unfamiliar ideas and continue learning."
    },

    {
        id: 45,
        title: "The Community Garden",
        level: "advanced",
        text: "Residents transform an unused piece of land into a community garden where everyone can grow food."
    },

    {
        id: 46,
        title: "The Forgotten Letter",
        level: "advanced",
        text: "An old letter reveals a family story that had remained unknown for several generations."
    },

    {
        id: 47,
        title: "The Value of Time",
        level: "advanced",
        text: "Time is limited, so learning how to use it wisely is one of the most important skills a person can develop."
    },

    {
        id: 48,
        title: "The Unexpected Teacher",
        level: "advanced",
        text: "A difficult experience becomes an unexpected teacher, showing Maya the importance of patience and persistence."
    },

    {
        id: 49,
        title: "The Road to Knowledge",
        level: "advanced",
        text: "Knowledge grows through curiosity, practice and the willingness to learn from mistakes."
    },

    {
        id: 50,
        title: "The Language Adventure",
        level: "advanced",
        text: "Learning a new language begins with simple words but eventually becomes a journey into another culture."
    },

    {
        id: 51,
        title: "The Hamster's Big Adventure",
        level: "beginner",
        text: "A little hamster leaves his home and discovers a wonderful world full of new sights and sounds."
    },

    {
        id: 52,
        title: "The Last Page",
        level: "intermediate",
        text: "Before finishing an old book, Daniel realizes that every story can teach him something about life."
    }

];


/* =========================================================
   3. APP STATE
   ========================================================= */

let currentWordIndex = 0;

let selectedLanguage = "english";

let totalXP =
    Number(localStorage.getItem("lingoXP")) || 0;

let wordsLearned =
    Number(localStorage.getItem("lingoWords")) || 0;

let storiesCompleted =
    Number(localStorage.getItem("lingoStories")) || 0;

let streak =
    Number(localStorage.getItem("lingoStreak")) || 0;

let savedWords =
    JSON.parse(
        localStorage.getItem("lingoSavedWords") || "[]"
    );


/* =========================================================
   4. ELEMENTS
   ========================================================= */

const languageSelect =
    document.getElementById("language");

const startLearningButton =
    document.getElementById("startLearningButton");

const vocabularyButton =
    document.getElementById("vocabularyButton");

const practiceButton =
    document.getElementById("practiceButton");

const storiesButton =
    document.getElementById("storiesButton");

const listeningButton =
    document.getElementById("listeningButton");

const speakingButton =
    document.getElementById("speakingButton");

const writingButton =
    document.getElementById("writingButton");

const darkModeButton =
    document.getElementById("darkModeButton");


/* =========================================================
   5. XP SYSTEM
   ========================================================= */

function addXP(amount) {

    totalXP += amount;

    localStorage.setItem(
        "lingoXP",
        totalXP
    );

    updateProgress();

}


function updateProgress() {

    const xpDisplay =
        document.getElementById("xpDisplay");

    const progressXP =
        document.getElementById("progressXP");

    const levelXP =
        document.getElementById("levelXP");

    const levelDisplay =
        document.getElementById("levelDisplay");

    const currentLevel =
        document.getElementById("currentLevel");

    const progressBar =
        document.getElementById("xpProgressBar");


    const level =
        Math.floor(totalXP / 100) + 1;

    const currentLevelXP =
        totalXP % 100;


    if (xpDisplay)
        xpDisplay.textContent = totalXP;

    if (progressXP)
        progressXP.textContent = totalXP;

    if (levelXP)
        levelXP.textContent = currentLevelXP;

    if (levelDisplay)
        levelDisplay.textContent = level;

    if (currentLevel)
        currentLevel.textContent = level;

    if (progressBar)
        progressBar.style.width =
            currentLevelXP + "%";


    const streakDisplay =
        document.getElementById("streakDisplay");

    const progressStreak =
        document.getElementById("progressStreak");

    if (streakDisplay)
        streakDisplay.textContent = streak;

    if (progressStreak)
        progressStreak.textContent = streak;


    const wordsDisplay =
        document.getElementById("wordsLearnedDisplay");

    const progressWords =
        document.getElementById("progressWords");

    if (wordsDisplay)
        wordsDisplay.textContent = wordsLearned;

    if (progressWords)
        progressWords.textContent = wordsLearned;


    const progressStories =
        document.getElementById("progressStories");

    if (progressStories)
        progressStories.textContent =
            storiesCompleted;

}


/* =========================================================
   6. LANGUAGE
   ========================================================= */

languageSelect.addEventListener(
    "change",
    function () {

        selectedLanguage =
            languageSelect.value;

        currentWordIndex = 0;

        displayCurrentWord();

        renderVocabulary();

    }
);


/* =========================================================
   7. VOCABULARY
   ========================================================= */

function getCurrentVocabulary() {

    return vocabulary[selectedLanguage] || [];

}


function displayCurrentWord() {

    const words =
        getCurrentVocabulary();

    if (!words.length)
        return;


    const current =
        words[currentWordIndex];


    const wordElement =
        document.getElementById("currentWord");

    const translationElement =
        document.getElementById("currentTranslation");


    if (wordElement)
        wordElement.textContent =
            current.word;

    if (translationElement)
        translationElement.textContent =
            current.meaning;

}


function renderVocabulary() {

    const list =
        document.getElementById(
            "vocabularyList"
        );

    if (!list)
        return;


    list.innerHTML = "";


    const words =
        getCurrentVocabulary();


    words.forEach(
        function (item, index) {

            const card =
                document.createElement("div");

            card.className =
                "word-card";


            card.innerHTML = `
                <p class="word-label">
                    ${item.category}
                </p>

                <h3>
                    ${item.word}
                </h3>

                <p>
                    ${item.meaning}
                </p>

                <div class="word-actions">

                    <button
                        onclick="speakText('${escapeText(item.meaning)}')">
                        🔊 Listen
                    </button>

                    <button
                        onclick="saveVocabularyWord(${index})">
                        ⭐ Save
                    </button>

                </div>
            `;


            list.appendChild(card);

        }
    );

}


function escapeText(text) {

    return text
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');

}


function saveVocabularyWord(index) {

    const words =
        getCurrentVocabulary();

    const word =
        words[index];


    if (!word)
        return;


    const exists =
        savedWords.some(
            item =>
                item.word === word.word &&
                item.meaning === word.meaning &&
                item.language === selectedLanguage
        );


    if (!exists) {

        savedWords.push({

            word: word.word,

            meaning: word.meaning,

            language: selectedLanguage

        });


        localStorage.setItem(
            "lingoSavedWords",
            JSON.stringify(savedWords)
        );


        alert("⭐ Word saved!");

    } else {

        alert("⭐ This word is already saved!");

    }


    renderSavedWords();

}


const nextWordButton =
    document.getElementById("nextWordButton");


if (nextWordButton) {

    nextWordButton.addEventListener(
        "click",
        function () {

            const words =
                getCurrentVocabulary();


            if (!words.length)
                return;


            currentWordIndex++;

            if (
                currentWordIndex >=
                words.length
            ) {

                currentWordIndex = 0;

            }


            displayCurrentWord();

        }
    );

}


const saveWordButton =
    document.getElementById("saveWordButton");


if (saveWordButton) {

    saveWordButton.addEventListener(
        "click",
        function () {

            saveVocabularyWord(
                currentWordIndex
            );

        }
    );

}


/* =========================================================
   8. TEXT TO SPEECH
   ========================================================= */

function speakText(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Your browser does not support text-to-speech."
        );

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang =
        getSpeechLanguage();


    speech.rate = 0.85;


    window.speechSynthesis.speak(
        speech
    );

}


function getSpeechLanguage() {

    const languages = {

        english: "en-US",

        spanish: "es-ES",

        french: "fr-FR",

        italian: "it-IT",

        chinese: "zh-CN",

        korean: "ko-KR",

        japanese: "ja-JP",

        german: "de-DE",

        arabic: "ar-SA",

        russian: "ru-RU",

        urdu: "ur-PK"

    };


    return languages[selectedLanguage]
        || "en-US";

}


const listenWordButton =
    document.getElementById(
        "listenWordButton"
    );


if (listenWordButton) {

    listenWordButton.addEventListener(
        "click",
        function () {

            const words =
                getCurrentVocabulary();

            if (!words.length)
                return;


            speakText(
                words[currentWordIndex].meaning
            );

        }
    );

}


/* =========================================================
   9. SEARCH & CATEGORY FILTER
   ========================================================= */

const vocabularySearch =
    document.getElementById(
        "vocabularySearch"
    );

const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );


function filterVocabulary() {

    const list =
        document.getElementById(
            "vocabularyList"
        );

    if (!list)
        return;


    const search =
        vocabularySearch.value
            .toLowerCase()
            .trim();


    const category =
        categoryFilter.value;


    const words =
        getCurrentVocabulary()
            .filter(function (item) {

                const matchesSearch =
                    item.word
                        .toLowerCase()
                        .includes(search)
                    ||
                    item.meaning
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =
                    category === "all"
                    ||
                    item.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            });


    list.innerHTML = "";


    words.forEach(function (item) {

        const card =
            document.createElement("div");

        card.className =
            "word-card";


        card.innerHTML = `

            <p class="word-label">
                ${item.category}
            </p>

            <h3>
                ${item.word}
            </h3>

            <p>
                ${item.meaning}
            </p>

            <div class="word-actions">

                <button
                    onclick="speakText('${escapeText(item.meaning)}')">
                    🔊 Listen
                </button>

            </div>

        `;


        list.appendChild(card);

    });

}


if (vocabularySearch) {

    vocabularySearch.addEventListener(
        "input",
        filterVocabulary
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterVocabulary
    );

}


/* =========================================================
   10. SAVED WORDS
   ========================================================= */

function renderSavedWords() {

    const list =
        document.getElementById(
            "savedWordsList"
        );


    if (!list)
        return;


    if (!savedWords.length) {

        list.innerHTML =
            "<p>You haven't saved any words yet.</p>";

        return;

    }


    list.innerHTML = "";


    savedWords.forEach(
        function (item, index) {

            const card =
                document.createElement("div");

            card.className =
                "word-card";


            card.innerHTML = `

                <p class="word-label">
                    ${item.language}
                </p>

                <h3>
                    ${item.word}
                </h3>

                <p>
                    ${item.meaning}
                </p>

                <button
                    onclick="removeSavedWord(${index})">
                    ❌ Remove
                </button>

            `;


            list.appendChild(card);

        }
    );

}


function removeSavedWord(index) {

    savedWords.splice(index, 1);


    localStorage.setItem(
        "lingoSavedWords",
        JSON.stringify(savedWords)
    );


    renderSavedWords();

}


/* =========================================================
   11. STORIES
   ========================================================= */

function renderStories() {

    const list =
        document.getElementById(
            "storiesList"
        );


    if (!list)
        return;


    list.innerHTML = "";


    stories.forEach(
        function (story) {

            const card =
                document.createElement("div");


            card.className =
                "story-card";


            card.innerHTML = `

                <h3>
                    ${story.title}
                </h3>

                <small>
                    ${story.level}
                </small>

                <br><br>

                <button
                    onclick="openStory(${story.id})">
                    📖 Read Story
                </button>

            `;


            list.appendChild(card);

        }
    );

}


function openStory(id) {

    const story =
        stories.find(
            item => item.id === id
        );


    if (!story)
        return;


    document.getElementById(
        "storyTitle"
    ).textContent =
        story.title;


    document.getElementById(
        "storyLevel"
    ).textContent =
        story.level;


    document.getElementById(
        "storyContent"
    ).textContent =
        story.text;


    document.getElementById(
        "storyReader"
    ).scrollIntoView({
        behavior: "smooth"
    });


    addXP(5);

}


const storyLevelFilter =
    document.getElementById(
        "storyLevelFilter"
    );


if (storyLevelFilter) {

    storyLevelFilter.addEventListener(
        "change",
        function () {

            const selected =
                storyLevelFilter.value;


            const list =
                document.getElementById(
                    "storiesList"
                );


            list.innerHTML = "";


            stories
                .filter(
                    story =>
                        selected === "all"
                        ||
                        story.level === selected
                )
                .forEach(
                    function (story) {

                        const card =
                            document.createElement("div");

                        card.className =
                            "story-card";


                        card.innerHTML = `

                            <h3>
                                ${story.title}
                            </h3>

                            <small>
                                ${story.level}
                            </small>

                            <br><br>

                            <button
                                onclick="openStory(${story.id})">
                                📖 Read Story
                            </button>

                        `;


                        list.appendChild(card);

                    }
                );

        }
    );

}


/* =========================================================
   12. STORY LISTENING
   ========================================================= */

const listenStoryButton =
    document.getElementById(
        "listenStoryButton"
    );


if (listenStoryButton) {

    listenStoryButton.addEventListener(
        "click",
        function () {

            const content =
                document.getElementById(
                    "storyContent"
                ).textContent;


            speakText(content);

        }
    );

}


/* =========================================================
   13. LISTENING PRACTICE
   ========================================================= */

const playListeningButton =
    document.getElementById(
        "playListeningButton"
    );


const checkListeningButton =
    document.getElementById(
        "checkListeningButton"
    );


const listeningAnswer =
    document.getElementById(
        "listeningAnswer"
    );


const listeningResult =
    document.getElementById(
        "listeningResult"
    );


const listeningSentence =
    "Hello, how are you?";


if (playListeningButton) {

    playListeningButton.addEventListener(
        "click",
        function () {

            speakText(
                listeningSentence
            );

        }
    );

}


if (checkListeningButton) {

    checkListeningButton.addEventListener(
        "click",
        function () {

            const answer =
                listeningAnswer.value
                    .trim()
                    .toLowerCase();


            if (
                answer ===
                listeningSentence.toLowerCase()
            ) {

                listeningResult.textContent =
                    "🎉 Correct! +5 XP";

                addXP(5);

            } else {

                listeningResult.textContent =
                    "❌ Try again!";

            }

        }
    );

}


/* =========================================================
   14. SPEAKING PRACTICE
   ========================================================= */

const startSpeakingButton =
    document.getElementById(
        "startSpeakingButton"
    );


const speakingResult =
    document.getElementById(
        "speakingResult"
    );


if (
    startSpeakingButton &&
    "webkitSpeechRecognition" in window
) {

    const recognition =
        new webkitSpeechRecognition();


    recognition.lang =
        getSpeechLanguage();


    recognition.continuous = false;


    recognition.interimResults = false;


    startSpeakingButton.addEventListener(
        "click",
        function () {

            speakingResult.textContent =
                "🎤 Listening... Speak now!";

            recognition.start();

        }
    );


    recognition.onresult =
        function (event) {

            const spoken =
                event.results[0][0].transcript;


            speakingResult.textContent =
                "You said: " + spoken +
                " 🎉 +10 XP";


            addXP(10);

        };


    recognition.onerror =
        function () {

            speakingResult.textContent =
                "Could not hear you. Please try again.";

        };

} else if (startSpeakingButton) {

    startSpeakingButton.addEventListener(
        "click",
        function () {

            speakingResult.textContent =
                "Speech recognition is not supported by this browser.";

        }
    );

}


/* =========================================================
   15. WRITING PRACTICE
   ========================================================= */

const checkWritingButton =
    document.getElementById(
        "checkWritingButton"
    );


const writingAnswer =
    document.getElementById(
        "writingAnswer"
    );


const writingResult =
    document.getElementById(
        "writingResult"
    );


if (checkWritingButton) {

    checkWritingButton.addEventListener(
        "click",
        function () {

            const answer =
                writingAnswer.value
                    .trim()
                    .toLowerCase();


            const words =
                getCurrentVocabulary();


            const correct =
                words[0].meaning
                    .toLowerCase();


            if (answer === correct) {

                writingResult.textContent =
                    "🎉 Correct! +10 XP";

                addXP(10);

                wordsLearned++;

                localStorage.setItem(
                    "lingoWords",
                    wordsLearned
                );

                updateProgress();

            } else {

                writingResult.textContent =
                    "❌ Not quite. Try again!";

            }

        }
    );

}


/* =========================================================
   16. DARK MODE
   ========================================================= */

const savedDarkMode =
    localStorage.getItem(
        "lingoDarkMode"
    );


if (savedDarkMode === "true") {

    document.body.classList.add(
        "dark-mode"
    );

    darkModeButton.textContent =
        "☀️";

}


if (darkModeButton) {

    darkModeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const dark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "lingoDarkMode",
                dark
            );


            darkModeButton.textContent =
                dark ? "☀️" : "🌙";

        }
    );

}


/* =========================================================
   17. NAVIGATION BUTTONS
   ========================================================= */

function goToSection(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


if (startLearningButton) {

    startLearningButton.addEventListener(
        "click",
        function () {

            goToSection("vocabulary");

        }
    );

}


if (vocabularyButton) {

    vocabularyButton.addEventListener(
        "click",
        function () {

            goToSection("vocabulary");

        }
    );

}


if (practiceButton) {

    practiceButton.addEventListener(
        "click",
        function () {

            goToSection("practice");

        }
    );

}


if (storiesButton) {

    storiesButton.addEventListener(
        "click",
        function () {

            goToSection("stories");

        }
    );

}


if (listeningButton) {

    listeningButton.addEventListener(
        "click",
        function () {

            goToSection("listening");

        }
    );

}


if (speakingButton) {

    speakingButton.addEventListener(
        "click",
        function () {

            goToSection("speaking");

        }
    );

}


if (writingButton) {

    writingButton.addEventListener(
        "click",
        function () {

            goToSection("writing");

        }
    );


}


/* =========================================================
   18. INITIALIZE APP
   ========================================================= */

displayCurrentWord();

renderVocabulary();

renderSavedWords();

renderStories();

updateProgress();
