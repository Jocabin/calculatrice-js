import Calculator from './Calculator'

const calculator = new Calculator()
const themeSelector = document.querySelector('#themeToggle')
const resetBtn = document.querySelector('#resetOp')
const moduloBtn = document.querySelector('#moduloOp')
const divideBtn = document.querySelector('#divideOp')
const multiplyBtn = document.querySelector('#multiplyOp')
const substractBtn = document.querySelector('#substractOp')
const sumBtn = document.querySelector('#sumOp')
const delLastBtn = document.querySelector('#delLastOp')
const resultBtn = document.querySelector('#resultOp')
const resultText = document.querySelector('.result')
const numbersBtns = document.querySelectorAll('.keyboard button:not([id])')
const lastCalculationSpan = document.querySelector('.lastCalculation')

numbersBtns.forEach(el => el.addEventListener('click', (e) => {
    if (calculator.isCalculComplete) {
        calculator.reset()
        updateScreen()
    }

    if (!calculator.operation) {
        calculator.firstMember += e.target.value
        resultText.textContent += e.target.value
    } else {
        calculator.secondMember += e.target.value
        resultText.textContent += e.target.value
    }
}))

function updateScreen() {
    resultText.textContent = calculator.result
    lastCalculationSpan.textContent = calculator.lastCalculation
}

themeSelector.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

resultBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.lastCalculation = resultText.textContent
    updateScreen()
})

resetBtn.addEventListener('click', () => {
    calculator.reset()
    updateScreen()
})

delLastBtn.addEventListener('click', () => {
    calculator.deleteLastChar()
    resultText.textContent = resultText.textContent.slice(0, -1)
})

moduloBtn.addEventListener('click', () => {
    if (calculator.setOperation('%')) {
        resultText.textContent += calculator.operation
    }
})

divideBtn.addEventListener('click', () => {
    if (calculator.setOperation('/')) {
        resultText.textContent += calculator.operation
    }
})

multiplyBtn.addEventListener('click', () => {
    if (calculator.setOperation('*')) {
        resultText.textContent += calculator.operation
    }
})

substractBtn.addEventListener('click', () => {
    if (calculator.setOperation('-')) {
        resultText.textContent += calculator.operation
    }
})

sumBtn.addEventListener('click', () => {
    if (calculator.setOperation('+')) {
        resultText.textContent += calculator.operation
    }
})

updateScreen()