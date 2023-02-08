/* Constants */
const grid = document.getElementById("grid-space");
const colorPicker = document.getElementById("color-input-value");
const colorBtn = document.getElementById("colorBtn")
const eraserBtn = document.getElementById("eraserBtn")

/* Default values */
let currentMode = "color";
let currentColor = "black";

/* Events */ 
colorPicker.oninput = (e) => changeColor(e.target.value)
colorBtn.onclick = () => changeMode('color')
eraserBtn.onclick = () => changeMode('eraser')

/* Functions */
function createGrid() {  /*Creates a grid of user inputed size*/
  grid.innerHTML = "";
  var size = document.getElementById("grid-size-input-value").value;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-item");
    gridElement.addEventListener("mouseover", drawColor);
    gridElement.addEventListener("mousedown", drawColor);
    gridElement.style.border = ".5px solid black";
    
    grid.appendChild(gridElement);
  }
}
  
function drawColor(e) { /* Enables "drawing" */
  if (e.type === "mouseover" && !"mouseDown") return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "burlywood";
  }
}


function changeColor() {  /* Changes Color of the brush */
  currentColor = document.getElementById("color-input-value").value;
}

function changeMode(input) { /* Changes modes for eraser/brush */
  currentMode = input;
  console.log(currentMode);
}
