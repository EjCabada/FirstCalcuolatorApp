let oneButton = document.querySelector('#one');
let twoButton = document.querySelector('#two');
let threeButton = document.querySelector('#three');
let fourButton = document.querySelector('#four');
let fiveButton = document.querySelector('#five');
let sixButton = document.querySelector('#six');
let sevenButton = document.querySelector('#seven');
let eightButton = document.querySelector('#eight');
let nineButton = document.querySelector('#nine');
let zerroButton = document.querySelector('#zero');
let currentInput = document.querySelector('#currentInput');
let firstInput = document.querySelector('#firstInput');
let lastInput = document.querySelector('#lastInput')
let erase = document.querySelector('#erase');
let equals = document.querySelector('#equals');
let possitiveNegative = document.querySelector('#possitiveNegative');
let percent = document.querySelector('#percent');
let division = document.querySelector('#division');
let x = document.querySelector('#x');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let operators = ["+", "-", "÷", "x", "%"];
let period = document.querySelector('#period');
let equalsPressed = false;



//NumButtons
oneButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "1";
      } else {
        currentInput.innerText += "1";
      }
    }
  });
  twoButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "2";
      } else {
        currentInput.innerText += "2";
      }
    }
  });
  
  threeButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "3";
      } else {
        currentInput.innerText += "3";
      }
    }
  });
  
  fourButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "4";
      } else {
        currentInput.innerText += "4";
      }
    }
  });
  
  fiveButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "5";
      } else {
        currentInput.innerText += "5";
      }
    }
  });
  
  sixButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "6";
      } else {
        currentInput.innerText += "6";
      }
    }
  });
  
  sevenButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "7";
      } else {
        currentInput.innerText += "7";
      }
    }
  });
  eightButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "8";
      } else {
        currentInput.innerText += "8";
      }
    }
  });
  
  nineButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "9";
      } else {
        currentInput.innerText += "9";
      }
    }
  });
  
  zerroButton.addEventListener('click', function() {
    // reset the calculator if equals button was pressed
    if (equalsPressed) {
      resetCalculator();
    }
    if (currentInput.innerText.length < 10) {
      if (operators.includes(currentInput.innerText)) {
        lastInput.innerText = firstInput.innerText;
        firstInput.innerText = currentInput.innerText;
        currentInput.innerText = "0";
      } else {
        currentInput.innerText += "0";
      }
    }
  });
  



//FunctionButtons
erase.addEventListener('click', function() {
    resetCalculator();
  });

  equals.addEventListener('click', function() {
    if (lastInput.innerText != "" && firstInput.innerText != "") {
      let firstPart = lastInput.innerText;
      let lastPart = currentInput.innerText;
      currentInput.innerText = mathOperation(Number(lastInput.innerText) , Number(currentInput.innerText));
      let reason = `${firstPart} ${firstInput.innerText} ${lastPart}`;
      lastInput.innerText = reason;
      firstInput.innerText = "";
      equalsPressed = true; // set equalsPressed to true
    }
  });



//operatorButtons
possitiveNegative.addEventListener('click', function(){
    if (currentInput.innerText != "" && lastInput.innerText === "" || currentInput.innerText != operators) {
        if (Number(currentInput.innerText) != 0) {currentInput.innerText = Number(currentInput.innerText) * -1;}
    }
})
percent.addEventListener('click', function(){
    if (equalsPressed) {
        return;
    }
    if (currentInput.innerText != "" && lastInput.innerText === "" && !operators.includes(currentInput.innerText)) {
        if (Number(currentInput) != 0) {
            currentInput.innerText = (Number(currentInput.innerText) * 0.01).toFixed(2);
        };
    }
})

//operators
division.addEventListener('click', function(){
    if (equalsPressed) {
      lastInput.innerText = currentInput.innerText;
      firstInput.innerText = "÷";
      equalsPressed = false;
      currentInput.innerText = "";
    }
    if (currentInput.innerText != "" && lastInput.innerText === "" && !operators.includes(currentInput.innerText)) {
      firstInput.innerText = currentInput.innerText;
      currentInput.innerText = "÷";
      lastInput.innerText = "";
    }
  })
x.addEventListener('click', function(){
    if (equalsPressed) {
      lastInput.innerText = currentInput.innerText;
      firstInput.innerText = "x";
      equalsPressed = false;
      currentInput.innerText = "";
    }
    if (currentInput.innerText != "" && lastInput.innerText === "" && !operators.includes(currentInput.innerText)) {
      firstInput.innerText = currentInput.innerText;
      currentInput.innerText = "x";
      lastInput.innerText = "";
    }
  })
minus.addEventListener('click', function(){
    if (equalsPressed) {
        lastInput.innerText = currentInput.innerText;
        firstInput.innerText = "-";
        equalsPressed = false;
        currentInput.innerText = "";
    }
    if (currentInput.innerText != "" && lastInput.innerText === "" && !operators.includes(currentInput.innerText)) {
      firstInput.innerText = currentInput.innerText;
      currentInput.innerText = "-";
      lastInput.innerText = "";
    }
  })
plus.addEventListener('click', function(){
    if (equalsPressed) {
      lastInput.innerText = currentInput.innerText;
      firstInput.innerText = "+";
      equalsPressed = false;
      currentInput.innerText = "";
    }
    if (currentInput.innerText != "" && lastInput.innerText === "" && !operators.includes(currentInput.innerText)) {
      firstInput.innerText = currentInput.innerText;
      currentInput.innerText = "+";
      lastInput.innerText = "";
    }
  });


//period
period.addEventListener('click', function() {
    if (!equalsPressed && currentInput.innerText != "") {
      currentInput.innerText = currentInput.innerText + ".";
    } else if (!equalsPressed) {
      currentInput.innerText = "0.";
    }
  });


//Math Functions
function mathOperation(num1 , num2) {
    let total = 0;
    if (firstInput.innerText === "+") {
        total = num1 + num2
    }
    else if (firstInput.innerText === "-") {
        total = num1 - num2
    }
    else if (firstInput.innerText === "x") {
        total = num1 * num2
    }
    else if (firstInput.innerText === "÷") {
        total = num1 / num2
    }
    return total;
}

// reset function to clear inputs
function resetCalculator() {
    currentInput.innerText = "";
    firstInput.innerText = "";
    lastInput.innerText = "";
    equalsPressed = false;
  }