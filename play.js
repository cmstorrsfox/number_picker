const inputField = document.querySelector("input");
const submitButton = document.querySelector("button");
const displayText = document.querySelector("p");
const displayField = document.getElementById("display-field");
const header = document.querySelector("h1");


const guessingGame = (input) => {
    input = parseInt(inputField.value);

    if(input <=10 && input > 0 && input !== 4) {
        displayText.innerHTML = "Sorry! That's not the right number";
        displayField.style.backgroundColor = "lightpink";
    } else if(input === 4) {
        displayText.innerHTML = "Woo! You got it right!";
        displayField.style.backgroundColor = "lightgreen";
        
    } else {
        displayText.innerHTML = "Please enter a number between 1 and 10 and try again"
        displayField.style.backgroundColor = "red"
    }
};

submitButton.addEventListener("click", guessingGame);
