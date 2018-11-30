import { combineReducers } from 'redux'
import { HomeReducer } from './../pages/home/store'
import { SearchReducer } from './../pages/search/store'

const reducer = combineReducers({
    HomeReducer,
    SearchReducer
})

export default reducer;