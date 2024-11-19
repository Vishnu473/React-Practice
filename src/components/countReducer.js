//counterReducer.js
export const initialState = {
    count:0
}

export const countReducer = (state,action) => {
    const val = action.payload !== 0 ? action.payload : 1
switch (action.type) {
    case 'Increment':
        return {...state, count: state.count + Number(val)}
    
    case 'Decrement':
        return {...state, count: state.count - Number(val)}

    case 'Reset':
        return {...state,count:0}
    default:
        break;
}
}