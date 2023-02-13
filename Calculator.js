export default class Calculator {
    firstMember = ''
    secondMember = ''
    result = ''
    operation = null
    isCalculComplete = false

    get result() {
        return this.result
    }

    get isCalculComplete() {
        return this.isCalculComplete
    }

    set isCalculComplete(expression) {
        this.isCalculComplete = expression
    }

    set operation(expression) {
        this.operation = expression
    }

    setOperation(expression) {
        this.operation = expression
        this.isCalculComplete = false
        this.result = ''
    }

    set result(expression) {
        this.result = expression
    }

    set firstMember(expression) {
        this.firstMember = expression
    }

    set secondMember(expression) {
        this.secondMember = expression
    }

    compute() {
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

    reset() {
        this.result = ''
        this.operation = null
        this.firstMember = ''
        this.secondMember = ''
        this.isCalculComplete = false
    }

    deleteLastChar() {
        if (!this.operation) {
            this.firstMember = this.firstMember.substring(0, this.firstMember.length - 1)
        } else if (this.operation && this.secondMember.length > 0) {
            this.secondMember = this.firstMember.substring(0, this.firstMember.length - 1)
        } else {
            this.operation = null
        }
    }
}