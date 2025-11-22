const mainContainer = document.querySelector(".container")
const squareBorderSize = 1; 

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
        mainContainer.appendChild(square)
    }
}

//Eventlistener to display the grid size to the user
const sliderInput = document.querySelector(".slider")
const sliderOutput = document.querySelectorAll(".gridSizeOutput")
//When a change occurs change the value as well
sliderInput.addEventListener("input", (event) => {
    sliderOutput.forEach(element => {
        element.textContent = event.target.value
    });
    createGridElement(event.target.value)
})



//Initialization
sliderOutput.forEach(element => {
    element.textContent = sliderInput.value
});
createGridElement(16)