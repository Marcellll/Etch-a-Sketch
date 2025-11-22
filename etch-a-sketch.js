const mainContainer = document.querySelector(".container")
const squareBorderSize = 1; 
let size = prompt("Enter size of the boxes", 16)

for (let index = 0; index < size * size; index++) {
    let square = document.createElement("div");
    square.className = "square"
    square.style.width = `calc(100% / ${size} - ${squareBorderSize*2}px)`
    square.style.height = `calc(100% / ${size} - ${squareBorderSize*2}px)`
    square.style.border = `${squareBorderSize}px solid grey`
    square.style.background = "white"
    mainContainer.appendChild(square)
}

//Eventlistener to display the grid size to the user
const sliderInput = document.querySelector(".slider")
const sliderOutput = document.querySelectorAll(".gridSizeOutput")
//Initialization
sliderOutput.forEach(element => {
    element.textContent = sliderInput.value
});
//When a change occurs change the value as well
sliderInput.addEventListener("input", (event) => {
    sliderOutput.forEach(element => {
        element.textContent = event.target.value
    });
})