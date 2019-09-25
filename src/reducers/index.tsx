import { combineReducers } from 'redux'
import billedAdjustmentsReducer from './shaadi.reducer';

export const RootReducer= combineReducers<any>({
    billedAdjustments: billedAdjustmentsReducer
})
