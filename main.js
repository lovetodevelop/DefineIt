document.addEventListener("DOMContentLoaded", () => {
    createWord();
    createWordChoices(["I love pizza", "Ice cream is greater"]);

    function createWord() 
    {
        let wordText = document.getElementById("word");
        wordText.textContent = "Pizza";
    }
    function createWordChoices(wordChoices) 
    {
        const wordChoiceContainer = document.getElementById("word-choices-container");

        for (let index = 0; index < wordChoices.length; index++) {
            let wordChoiceButton = document.createElement("button");
            wordChoiceButton.classList.add("word-choice");
            wordChoiceButton.setAttribute("id", index + 1);
            wordChoiceButton.textContent = wordChoices[index];
            wordChoiceContainer.append(wordChoiceButton);
        }
    }
})