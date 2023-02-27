export default class Calculator {
    firstMember = ''
    secondMember = ''
    result = ''
    operation = null
    isCalculComplete = false
    lastCalculation = ''

    // SETTER
    set result(expression) {
        this.result = expression
    }

    set firstMember(expression) {
        this.firstMember = expression
    }

    set secondMember(expression) {
        this.secondMember = expression
    }

    set isCalculComplete(expression) {
        this.isCalculComplete = expression
    }

    set operation(expression) {
        this.operation = expression
    }

    set lastCalculation(expression) {
        this.lastCalculation = expression
    }

    // GETTER
    get lastCalculation() {
        return this.lastCalculation
    }

    get result() {
        return this.result
    }

    get isCalculComplete() {
        return this.isCalculComplete
    }

    // METHODS
    setOperation(expression) {
        if (this.firstMember === '' || this.operation !== null) {
            return false
        }

        this.operation = expression
        this.isCalculComplete = false
        this.result = ''
        return true
    }

    compute() {
        if (this.firstMember !== '' && this.operation !== null && this.secondMember !== '') {
            switch (this.operation) {
                case '+':
                    this.result = (parseFloat(this.firstMember) + parseFloat(this.secondMember)).toString()
                    break
                case '-':
                    this.result = (parseFloat(this.firstMember) - parseFloat(this.secondMember)).toString()
                    break
                case '*':
                    this.result = (parseFloat(this.firstMember) * parseFloat(this.secondMember)).toString()
                    break
                case '/':
                    this.result = (parseFloat(this.firstMember) / parseFloat(this.secondMember)).toString()
                    break
                case '%':
                    this.result = (parseFloat(this.firstMember) % parseFloat(this.secondMember)).toString()
                    break
                default:
                    alert('opération inconnue')
                    break
            }

            this.operation = null
            this.firstMember = this.result.toString()
            this.secondMember = ''
            this.isCalculComplete = true
        }
    }

    reset() {
        this.result = ''
        this.operation = null
        this.firstMember = ''
        this.secondMember = ''
        this.isCalculComplete = false
        this.lastCalculation = ''
    }

    deleteLastChar() {
        if (this.firstMember !== '' && this.operation === null && this.secondMember === '') {
            this.firstMember = this.firstMember.slice(0, -1)
        } else if (this.firstMember !== '' && this.operation !== null && this.secondMember === '') {
            this.operation = null
        } else if (this.firstMember !== '' && this.operation !== null && this.secondMember !== '') {
            this.secondMember = this.secondMember.slice(0, -1)
        }
    }
}