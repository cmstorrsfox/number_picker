//HTML elements
const forDisplay = document.getElementById("for-display");
const forInDisplay = document.getElementById("for-in-display");
const forOfDisplay = document.getElementById("for-of-display");
const whileDisplay = document.getElementById("while-display");
const doWhileDisplay = document.getElementById("do-while-display");
const forButton = document.getElementById("for-button");
const forLoopList = document.querySelector("ol");
const forInButton = document.getElementById("for-in-button");
const forInList = document.getElementById("for-in-list");

//Data to loop
const forInput = document.getElementById("for-input"); //input field for FOR loop
const animals = [] //input for for...in loop
const animalInput = document.getElementById("animal"); //animal input field for FOR...IN loop
const behaviourInput = document.getElementById("behaviour"); //animal input field for FOR...IN loop
const dietInput = document.getElementById("diet"); //animal input field for FOR...IN loop



//For Loop
const startForLoop = () => {
    event.preventDefault();
    forLoopList.innerHTML = "";  
    for(let i = 0; i < forInput.value.length; i++) {
        forLoopList.innerHTML += `<li>Letter number ${i + 1} in ${forInput.value} is <span>${forInput.value[i].toUpperCase()}</span></li>`
    }

    forInput.value = "";

};

forButton.addEventListener("click", startForLoop);

//For..in Loop

const animalLooper = () => {
    event.preventDefault();
    forInList.innerHTML = "";

    let newAnimal = {
        name: animalInput.value,
        behaviour: behaviourInput.value,
        diet: dietInput.value,
    }
    
    animals.push(newAnimal);
    
    console.log(animals);
    
    for (animal of animals) {
        if(animal.name.charAt(animal.name.length-1) === 's') {
            forInList.innerHTML += (`<li>${animal.name.charAt(0).toUpperCase()}${animal.name.slice(1)} are ${animal.behaviour}. They live on a diet of ${animal.diet}</li>`);
        } else {
            forInList.innerHTML += (`<li>A ${animal.name.charAt(0).toLowerCase()}${animal.name.slice(1)} is ${animal.behaviour}. It lives on a diet of ${animal.diet}</li>`);
        }
    }

    animalInput.value = "";
}

forInButton.addEventListener("click", animalLooper);
