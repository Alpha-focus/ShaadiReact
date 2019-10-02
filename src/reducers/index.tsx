import { combineReducers } from 'redux'
import loginActionResponse from './shaadi.reducer';

export const RootReducer= combineReducers<any>({
    loginActionResponse: loginActionResponse
})
