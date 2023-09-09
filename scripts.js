function startGame(gridSizeInput) {
    
    // Create grid

    const grid = document.querySelector(".grid-container");

    const fragment = document.createDocumentFragment();

    const totalSquares = gridSizeInput * gridSizeInput;

    const squareDimensions = ((1 / gridSizeInput) * 100);

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.style.cssText = `border: 4px solid black; flex: 1 1 ${squareDimensions}%; background-color: white;`;
        square.classList.add("grid-squares");
        fragment.appendChild(square);
    }

    grid.appendChild(fragment);

    // Add event listener for hover effect

    let gridSquares = document.querySelectorAll(".grid-squares");

    function hoverEffect() {
        this.style.cssText = "border: 4px solid black; flex: 1 1 6.25%; background-color: black;";
    }

    gridSquares.forEach(function(square) {
        square.addEventListener('mouseenter', hoverEffect);
        square.addEventListener('touchstart', hoverEffect);
    })
}



// Add grid size button

const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", () => {
    let gridSize = window.prompt("Enter the number of squares per side for the new grid:");
    startGame(gridSize);
})

//Start the game with default size

startGame(16);



