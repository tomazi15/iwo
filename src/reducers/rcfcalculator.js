import { RCF_RATE } from '../actions';

const rcfReducer = (state = 0, action) => {
    switch (action.type) {
        case RCF_RATE:
            return state = action.value
        default:
            return state    
    }
}

export default rcfReducer;