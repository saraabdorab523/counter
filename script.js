// references 
const counterBox = document.getElementById('counter-box');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');


let count = 0;

// Function to update the number 
function updateDisplay() {
  counterBox.textContent = count;
  
  // Change color based on count value
  if (count > 0) {
    counterBox.style.color = 'green';  
  } else if (count < 0) {
    counterBox.style.color = 'red';    
  } else {
    counterBox.style.color = '#444';   
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


updateDisplay();