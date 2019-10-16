import commonamount from './commonamount';
import commonduration from './commonduration';
import blcalculator from './blcalculator';
import rcfcalculator from './rcfcalculator';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    amount: commonamount,
    bl_rate: blcalculator,
    rcf_rate: rcfcalculator,
    duration: commonduration,
});

export default rootReducers;
