const grid = document.getElementById("grid-space");
const colorPicker = document.getElementById("color-input-value");
const colorBtn = document.getElementById("colorBtn")
const eraserBtn = document.getElementById("eraserBtn")

console.log(grid)
let currentMode = "color";
let currentColor = "black";

colorPicker.oninput = (e) => changeColor(e.target.value)
colorBtn.onclick = () => changeMode('color')
eraserBtn.onclick = () => changeMode('eraser')

function createGrid() {
  grid.innerHTML = "";
  var size = document.getElementById("grid-size-input-value").value;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-item");
    gridElement.addEventListener("mouseover", drawColor);
    gridElement.addEventListener("mousedown", drawColor);
    gridElement.style.border = "1px solid black";
    gridElement.style.width = "10px";
    grid.appendChild(gridElement);
  }
}

function drawColor(e) {
  if (e.type === "mouseover" && !"mouseDown") return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "burlywood";
  }
}


function changeColor() {
  currentColor = document.getElementById("color-input-value").value;
}

function changeMode(input) {
  currentMode = input;
  console.log(currentMode);
}
