import { combineReducers } from 'redux'
import billedAdjustmentsReducer from './shaadi.reducer';

export default combineReducers<any>({
    billedAdjustments: billedAdjustmentsReducer
})