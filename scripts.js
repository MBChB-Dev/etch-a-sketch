// Create grid

const grid = document.querySelector(".grid-container");

const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.cssText = "border: 4px solid black; flex: 1 1 6.25%; background-color: white;";
    square.classList.add("grid-squares");
    fragment.appendChild(square);
}

grid.appendChild(fragment);

// Add event listener

let gridSquares = document.querySelectorAll(".grid-squares");

function hoverEffect() {
    this.style.cssText = "border: 4px solid black; flex: 1 1 6.25%; background-color: black;";
}

gridSquares.forEach(function(square) {
    square.addEventListener('mouseenter', hoverEffect);
    square.addEventListener('touchstart', hoverEffect);
})

// Add grid size button



