import Calculator from './Calculator'

const calculator = new Calculator()
const themeSelector = document.querySelector('#themeToggle')
const resetBtn = document.querySelector('#resetOp')

const delLastBtn = document.querySelector('#delLastOp')
const resultBtn = document.querySelector('#resultOp')
const resultText = document.querySelector('.result')
const numbersBtns = document.querySelectorAll('.keyboard button:not([id])')
const lastCalculationSpan = document.querySelector('.lastCalculation')

const operators = [
    {name: "modulo", sign: "%"},
    {name: "divide", sign: "/"},
    {name: "multiply", sign: "*"},
    {name: "substract", sign: "-"},
    {name: "sum", sign: "+"}
]

numbersBtns.forEach(el => el.addEventListener('click', (e) => {
    if (calculator.isCalculComplete) {
        calculator.reset()
        updateScreen()
    }

    if (!calculator.operation) {
        calculator.firstMember += e.target.value
        resultText.innerHTML += e.target.value
    } else {
        calculator.secondMember += e.target.value
        resultText.innerHTML += e.target.value
    }
}))

for (let operation of operators) {
    document.querySelector(`#${operation.name}Op`).addEventListener('click', () => {
        if (calculator.setOperation(`${operation.sign}`)) {
            resultText.innerHTML += `<span class="operatorSpan">${calculator.operation}</span>`
        }
    })
}

function updateScreen() {
    resultText.innerHTML = calculator.result
    lastCalculationSpan.innerHTML = calculator.lastCalculation
}

resultBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.lastCalculation = resultText.innerHTML
    updateScreen()
})

resetBtn.addEventListener('click', () => {
    calculator.reset()
    updateScreen()
})

delLastBtn.addEventListener('click', () => {
    calculator.deleteLastChar()
    resultText.innerHTML = resultText.innerHTML.slice(0, -1)
})

updateScreen()