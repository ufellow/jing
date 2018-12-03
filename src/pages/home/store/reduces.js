import * as actionTypes from './actionTypes'

const defaultState = {
    ahao: '上勾拳',
    goods: []
}

export default (state = defaultState , action) => {
    if(action.type === actionTypes.GET_GOODS_DATA) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.goods = action.goods;
        return newState;
    }
    if(action.type === actionTypes.ADD_FOOD_COUNT) {
        action.food.num++;
        const newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if(action.type === actionTypes.REDUCER_FOOD_COUNT) {
        action.food.num--;
        const newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if(action.type === actionTypes.EMPTY_GOODS) {
        const newState = JSON.parse(JSON.stringify(state))
        const actionGoods = action.goods 
        for(let i=0;i<actionGoods.length;i++) {
            actionGoods[i].foods.forEach((food) => {
                food.num = 0;
            })
        }
        newState.goods = actionGoods;
        return newState;
    }
    return state;
}