export default class Calculator {
    firstMember = 0
    secondMember = 0
    result = 0

    constructor() {
    }

    get result() {
        return this.result
    }

    set firstMember(expression) {
        this.firstMember = expression
    }

    set secondMember(expression) {
        this.secondMember = expression
    }

    sum() {
        this.result = parseFloat(this.firstMember) + parseFloat(this.secondMember)
    }

    substract() {
        this.result = parseFloat(this.firstMember) - parseFloat(this.secondMember)
    }

    multiply() {
        this.result = parseFloat(this.firstMember) * parseFloat(this.secondMember)
    }

    divide() {
        this.result = parseFloat(this.firstMember) / parseFloat(this.secondMember)
    }

    modulo() {
        this.result = parseFloat(this.firstMember) % parseFloat(this.secondMember)
    }

    reset() {
        this.result = 0
    }
}