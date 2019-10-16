import { COMMON_AMOUNT } from '../actions'

const amountReducer = (state = 0, action) => {
    switch (action.type) {
        case COMMON_AMOUNT:
            return state = action.value;
        default:
            return state    
    }
}

export default amountReducer;