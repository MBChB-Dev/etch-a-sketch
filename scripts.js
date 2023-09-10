//Function to play a new game

function startGame(gridSizeInput) {
    


    //Erase the old grid

    const gridContainer = document.querySelector(".grid-container");

    gridContainer.textContent = '';



    // Create grid

    const grid = document.querySelector(".grid-container");

    const fragment = document.createDocumentFragment();

    const totalSquares = gridSizeInput * gridSizeInput;

    const squareDimensions = ((1 / gridSizeInput) * 100);

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.style.cssText = `border: none; flex: 1 1 ${squareDimensions}%; background-color: white;`;
        square.classList.add("grid-squares");
        fragment.appendChild(square);
    }

    grid.appendChild(fragment);



    // Add event listener for hover effect

    let gridSquares = document.querySelectorAll(".grid-squares");

    function hoverEffect() {
        this.style.cssText = `border: none; flex: 1 1 ${squareDimensions}%; background-color: black;`;
    }


    // Function to handle touchmove event
    function touchMoveEffect(event) {

        event.preventDefault(); // Prevent default touch event behavior

        const touch = event.touches[0]; // Get the first touch (assuming one finger touch)

        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        
        if (element && element.classList.contains("grid-squares")) {
            hoverEffect.call(element); // Apply the hover effect to the touched square
    }
  }

    gridSquares.forEach(function(square) {
        square.addEventListener('mouseenter', hoverEffect);
        square.addEventListener('touchstart', hoverEffect);
        square.addEventListener('touchmove', touchMoveEffect);
    })
}


// Add grid size button event listener

const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", () => {
    
    let gridSize = window.prompt("Enter the number of squares per side for the new grid (maximum allowed is 100):", 16);
    
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        
        alert("Please enter a valid number from 1 to 100");
    } else {
        startGame(gridSize);
    }
})


//Start the game with default size

startGame(16);



