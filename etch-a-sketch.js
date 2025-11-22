const mainContainer = document.querySelector(".container")
const squareBorderSize = 1;
const colorPicker = document.querySelector(".colorPicker")

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
            event.target.style.background = colorPicker.value
        })
        mainContainer.appendChild(square)
    }
}

//Eventlistener to display the grid size to the user
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



//Initialization
sliderOutput.forEach(element => {
    element.textContent = sliderInput.value
});
createGridElement(16)