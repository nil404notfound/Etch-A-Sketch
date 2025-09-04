const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");

// Function to create grid
function createGrid(size) {
  // Clear previous grid
  container.innerHTML = "";

  // Calculate square size so total = 960px
  let squareSize = 960 / size;

  // Create squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect with random colors
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

// Random color generator
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Reset button functionality
resetBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Create default 16x16 grid
createGrid(16);
