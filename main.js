document.addEventListener("DOMContentLoaded", () => {
    let word = "Pizza";
    let definitions = ["a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.","food made of flour, water, and yeast or another leavening agent, mixed together and baked."];
    let definition = "a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.";

    const definitionChoiceContainer = document.getElementById("definition-choices-container");

    createWord(word);
    createDefinitionChoices(definitions);

    function createWord(word) 
    {
        let wordText = document.getElementById("word");
        wordText.textContent = word;
    }
    function createDefinitionChoices(definitionChoices) 
    {
        for (let index = 0; index < definitionChoices.length; index++) {
            let definitionChoiceButton = document.createElement("button");
            definitionChoiceButton.classList.add("definition-choice");
            definitionChoiceButton.classList.add("animate__animated");
            // definitionChoiceButton.classList.add("animate__backOutRight");
            definitionChoiceButton.setAttribute("id", index + 1);
            definitionChoiceButton.setAttribute("data-definition", definitionChoices[index]);
            definitionChoiceButton.textContent = definitionChoices[index];
            definitionChoiceContainer.append(definitionChoiceButton);
        }
    }
    function handleSubmitDefinition(definitionChoice) {
        if (definitionChoice == definition) {
            window.alert("Congratualations!");
        }
        else {
            let x = `[data-definition="${definition}]`;
            let incorrectDefinitionButton = document.querySelector(`[data-definition="${definitionChoice}"]`);
            incorrectDefinitionButton.classList.add("animate__backOutRight"); 
            incorrectDefinitionButton.style = "background-color: red";
        }

    }

    for (let index = 0; index < definitionChoiceContainer.children.length; index++) {
        definitionChoiceContainer.children[index].onclick = ({ target }) => {
            let definitionChoice = target.getAttribute("data-definition");
            handleSubmitDefinition(definitionChoice);
            return;
        }
    }
})
