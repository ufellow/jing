import * as actionTypes from './actionTypes'

export const init_result_data_action = () => {
    return {
        type: actionTypes.INIT_RESULT_DATA,
    }
}

export const get_result_data_action = (result) => {
    return {
        type: actionTypes.GET_RESULT_DATA,
        result
    }
}

export const addFoodCountAction = (food,result) => {
    return {
        type: actionTypes.ADD_FOOD_COUNT,
        food,
        result
    }
}

export const reduceFoodCountAction = (food,result) => {
    return {
        type: actionTypes.REDUCER_FOOD_COUNT,
        food,
        result
    }
}