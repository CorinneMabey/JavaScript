function copyInput() {
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

const buttonElement = document.getElementById("submitButton");
buttonElement.addEventListener("click", copyInput);


const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e.keyCode);
}
