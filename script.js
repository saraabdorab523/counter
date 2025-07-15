// Get references to the counter display and buttons
const counterBox = document.getElementById('counter-box');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// This variable holds the current count
let count = 0;

// Function to update the number shown in the counter box
function updateDisplay() {
  counterBox.textContent = count;
  
  // Change color based on count value
  if (count > 0) {
    counterBox.style.color = 'green';  // positive: green
  } else if (count < 0) {
    counterBox.style.color = 'red';    // negative: red
  } else {
    counterBox.style.color = '#444';   // zero: default dark gray
  }
}

// Attach click event listeners to buttons

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Initialize the display at page load
updateDisplay();