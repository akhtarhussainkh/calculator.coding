let display = document.getElementById('display');

function appendCharacter(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function square() {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = currentValue * currentValue;
  }
}

function squareRoot() {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue >= 0) {
    display.value = Math.sqrt(currentValue);
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
