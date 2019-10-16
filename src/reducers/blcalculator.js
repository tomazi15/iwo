import { BL_RATE } from '../actions';

const blReducer = (state = 0, action) => {
    switch (action.type) {
        case BL_RATE:
            return state = action.value
        default:
            return state    
    }
}

export default blReducer;