import axios from 'axios';
import * as actionTypes from './actionTypes'
import {getAllGoodsApi} from './../../../api/index'
const getGoodsDataAction = (goods) => {
    return {
        type: actionTypes.GET_GOODS_DATA,
        goods
    }
}

// export const getGoodsData = () => {
//     return (dispatch) => {
//         axios.post('http://result.eolinker.com/ryfVuuNe56d9619232220f51d7a2f231f3df0a6a54029bf?uri=react-ele').then((res) => {
//             dispatch(getGoodsDataAction(res.data.goods))
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
// }

export const getGoodsData = () => {
    return (dispatch) => {
        axios.post(getAllGoodsApi,{openid:'openid'}).then((res) => {
            console.log(res.data)
            dispatch(getGoodsDataAction(res.data))
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const addFoodCountAction = (food,goods) => {
    return {
        type: actionTypes.ADD_FOOD_COUNT,
        food,
        goods
    }
}

export const reduceFoodCountAction = (food,goods) => {
    return {
        type: actionTypes.REDUCER_FOOD_COUNT,
        food,
        goods
    }
}

export const emptyGoodsAction = (goods) => {
    return {
        type: actionTypes.EMPTY_GOODS,
        goods
    }
}
