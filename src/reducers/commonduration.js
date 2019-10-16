import { COMMON_DURATION } from '../actions'

const durationReducer = (state = 0, action) => {
    switch (action.type) {
        case COMMON_DURATION:
            return state = action.value;
        default:
            return state    
    }
}

export default durationReducer;