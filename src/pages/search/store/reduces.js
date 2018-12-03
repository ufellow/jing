import * as actionTypes from './actionTypes'

const defaultState = {
    hanzo: '半藏',
    result: [],
}

export default (state = defaultState , action) => {
    if(action.type === actionTypes.REDUCER_FOOD_COUNT) {
        action.food.num--;
        const newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if(action.type === actionTypes.ADD_FOOD_COUNT) {
        action.food.num++;
        const newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    return state;
}