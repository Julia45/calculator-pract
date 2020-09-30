// Calculator name

const calcNameDiv = document.createElement("div");
calcNameDiv.classList.add('calcNameDiv')
calcNameDiv.innerHTML = "Calculator"
document.body.append(calcNameDiv)

// Calculator container

const calcContainer = document.createElement("div");
calcContainer.classList.add('calcContainer')

// Table where you can see what you do

const inputWithActions = document.createElement("input");
inputWithActions.classList.add('inputWithActions')
calcContainer.append(inputWithActions)

// All the figures of the calculator

const figuresContainer = document.createElement('div')
figuresContainer.classList.add('figuresContainer')
calcContainer.append(figuresContainer)

// All Operations name

const operationContainer = document.createElement('div')
operationContainer.classList.add('operationContainer')
operationContainer.innerHTML = "All Operations:"

// Your operations container

const operationsList = document.createElement('ul')
operationsList.classList.add('operationsList')
operationContainer.append(operationsList)

// General container for the calculator and "All Operations"

const generalContainer = document.createElement('div')
generalContainer.classList.add('generalContainer')
generalContainer.appendChild(calcContainer)
generalContainer.appendChild(operationContainer)
document.body.append(generalContainer)

// All buttons

const addButton = document.createElement('button')
addButton.innerHTML = "+"
const divideButton = document.createElement('button')
divideButton.innerHTML = "/"
const multiplyButton = document.createElement('button')
multiplyButton.innerHTML = "*"
const substractButton = document.createElement('button')
substractButton.innerHTML = "-"
const calcButton = document.createElement('button')
calcButton.innerHTML = "Calc"
const delButton = document.createElement('button')
delButton.classList.add('delButton')
delButton.innerHTML = "Del"

// Function to generate the numbers

function generateNumbers(end) {
  for (let i = end; i > 0; i--) {
    const buttonNumber = document.createElement('button')
    buttonNumber.innerHTML = i;
    figuresContainer.append(buttonNumber)
  }
}

generateNumbers(9)
figuresContainer.append(addButton)
const buttonNumber = document.createElement('button')
buttonNumber.innerHTML = 0;
figuresContainer.append(buttonNumber)
figuresContainer.append(divideButton)
figuresContainer.append(multiplyButton)
figuresContainer.append(substractButton)
figuresContainer.append(delButton)
figuresContainer.append(calcButton)



let num1;
let num2;


function buttonClicked(e) {
  const target = e.target;
  const text = target.innerHTML

  const operationItem = document.createElement("li")

  if (target.nodeName === "BUTTON") {
    if (e.target === calcButton) {
      num1 = parseInt(inputWithActions.value.match(/\d+/))
      num2 = parseInt(inputWithActions.value.match(/\d+$/))

      if (inputWithActions.value.includes("+")) {
        const result = num1 + num2
        inputWithActions.value = result;
        operationItem.innerHTML = num1 + "+" + num2 + "=" + result
        operationsList.appendChild(operationItem)
        num1 = result;
      } else if (inputWithActions.value.includes("-")) {
        const result = num1 - num2
        inputWithActions.value = result;
        operationItem.innerHTML = num1 + "-" + num2 + "=" + result
        operationsList.appendChild(operationItem)
        num1 = result;

      } else if (inputWithActions.value.includes("*")) {
        const result = num1 * num2
        inputWithActions.value = result;
        operationItem.innerHTML = num1 + "*" + num2 + "=" + result
        operationsList.appendChild(operationItem)
        num1 = result;

      } else if (inputWithActions.value.includes("/")) {
        const result = num1 / num2
        inputWithActions.value = result;
        operationItem.innerHTML = num1 + "/" + num2 + "=" + result
        operationsList.appendChild(operationItem)
        num1 = result;
      }

    } 
    else {
      inputWithActions.value += text;
    }
    if (e.target === delButton) {
      inputWithActions.value = '';
      operationsList.innerHTML = ''
    }
  }
}

document.addEventListener("click", buttonClicked);

