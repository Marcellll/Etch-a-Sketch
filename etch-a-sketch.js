const mainContainer = document.querySelector(".container")
const squareBorderSize = 1; 
let size = prompt("Enter size of the boxes", 12)

for (let index = 0; index < size * size; index++) {
    let square = document.createElement("div");
    square.className = "square"
    square.style.width = `calc(100% / ${size} - ${squareBorderSize*2}px)`
    square.style.height = `calc(100% / ${size} - ${squareBorderSize*2}px)`
    square.style.border = `${squareBorderSize}px solid grey`
    mainContainer.appendChild(square)
}0