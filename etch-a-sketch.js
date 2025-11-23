const mainContainer = document.querySelector(".container")
const squareBorderSize = 1;
const colorPickerRGB = document.querySelector(".colorPicker")
const colorButtonEnum = {
    customColor : "customColorButton",
    greyScale: "greyScaleButton",
    rainbow: "rainbowButton"
}

function createGridElement(gridSize) {
    //Cleaning up the grid for a new one
    while(mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild)
    }

    for (let index = 0; index < gridSize * gridSize; index++) {
        let square = document.createElement("div");
        square.className = "square"
        square.style.width = `calc(100% / ${gridSize} - ${squareBorderSize*2}px)`
        square.style.height = `calc(100% / ${gridSize} - ${squareBorderSize*2}px)`
        square.style.border = `${squareBorderSize}px solid grey`
        square.style.background = "white"
        square.addEventListener("mouseover", (event) =>{
            event.target.style.background = colorPickerRGB.value
        })
        mainContainer.appendChild(square)
    }
}

/*
Handles which button is currently active and changes the status of the 
currentColorButton
*/
function focusButton(button) {
    controlButtons.forEach(element => {
        element.classList.remove("btnOn")
    });
    button.classList.toggle("btnOn")
    switch(button.id) {
        case colorButtonEnum.customColor:
            currentColorButton = colorButtonEnum.customColor
            break;
        case colorButtonEnum.greyScale:
            currentColorButton = colorButtonEnum.greyScale
            break;
        case colorButtonEnum.rainbow:
            currentColorButton = colorButtonEnum.rainbow
            break;
    }
}

/*
Eventlisteners to display the grid size to the user
*/
const sliderInput = document.querySelector(".slider")
const sliderOutput = document.querySelectorAll(".gridSizeOutput")
//When the slider is released the grid will update
sliderInput.addEventListener("change", (event) => {
    createGridElement(event.target.value)
})
//As soon as the value of the slider changes, the text of the grid changes as well
sliderInput.addEventListener("input", (event) => {
    sliderOutput.forEach(element => {
        element.textContent = event.target.value
    });
})

/*
Eventlisteners for the buttons to know which color we should display on the grid
*/
const controlButtons = document.querySelectorAll("button")
controlButtons.forEach(element => {
    element.addEventListener("click", (event) => {
        focusButton(element)
    })
})



/*
Initialization
*/
sliderOutput.forEach(element => {
    element.textContent = sliderInput.value
});
createGridElement(16)
const customColorButton = document.querySelector("#customColorButton")
let currentColorButton = colorButtonEnum.customColor
focusButton(customColorButton)
