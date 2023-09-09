const grid = document.querySelector(".grid-container");

const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.cssText = "border: 4px solid black; flex: 1 1 6.25%; background-color: white;";
    fragment.appendChild(square);
}

grid.appendChild(fragment);


