export const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'Number':
            console.log(action.payload)
            return {
                ...state,
                display: state.display == '0' ? action.payload : state.display + action.payload
            }
        case 'Operator':
            let currentVal = parseFloat(state.display)
            switch (action.payload) {
                case '+/-':
                    
                    return{
                        ...state,
                        firstOperand: currentVal*(-1),
                        operator: state.operator,
                        display: currentVal * (-1)
                    }
                case '%':
                    return{
                        ...state,
                        firstOperand: currentVal%(100),
                        operator: state.operator,
                        display: currentVal %(100)
                    }
                default:
                    return {
                        ...state,
                        firstOperand : currentVal,
                        operator: action.payload,
                        display: 0
                    }
            }
            
        case 'Eval':
            const secondOperand = parseFloat(state.display);
            console.log(secondOperand)
            let result;
            switch (state.operator) {
                case '+':
                    console.log(state.firstOperand,state.operator,secondOperand)
                    result = state.firstOperand + secondOperand;
                    console.log(result)
                    break;
                case '-':
                    console.log(state.firstOperand,state.operator,secondOperand)
                    result = state.firstOperand - secondOperand;
                    console.log(result)
                    break;
                case 'X':
                    console.log(state.firstOperand,state.operator,secondOperand)
                    result = state.firstOperand * secondOperand;
                    console.log(result)
                    break;
                case '/':
                    console.log(state.firstOperand,state.operator,secondOperand)
                    result = state.firstOperand / secondOperand;
                    console.log(result)
                    break;
            
                default:
                    return state;
            }
            return {
                ...state,
                display:result.toString(),
                firstOperand: result,
                operator: null
            }
        case 'Clear':
            return {
                ...state,
                display: 0,
                firstOperand: null,
                operator: null
            }
    }
}