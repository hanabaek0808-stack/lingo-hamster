const language = document.getElementById("language");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function () {

    const selectedLanguage =
        language.options[language.selectedIndex].text;

    alert(
        "🐹 Great choice!\n\n" +
        "You selected: " +
        selectedLanguage +
        "\n\nLet's start learning!"
    );

});
