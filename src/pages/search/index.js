import React , { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    SearchBox,
    CartcontrolBox
} from './style'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            result: [],
            text: ''
        }
        this.searchInput = React.createRef();
    }
    handleBack () {
        this.props.history.goBack();
    }

    render() {
        const { goods , addFoodCount , reduceFoodCount } = this.props;
        const { result } = this.state;
        return (
            <SearchBox>
                <div className="header">
                    <span className='back iconfont icon-right' onClick={this.handleBack.bind(this)}></span>
                    <div className='search-input'>
                        <input ref={this.searchInput} type="search" onChange={this.handleSearch.bind(this)} placeholder='请输入你选择的商品' />
                    </div>
                    <button className='btn-search'>搜索</button>
                </div>
                {
                    result.length <= 0 ? <div className="search-history">
                    <div className="title">
                        <i className='iconfont icon-lishi'></i>
                        <span>搜索历史</span>
                    </div>
                    <ul className='history-list'>
                        <li>111111</li>
                        <li>11a1</li>
                        <li>11sadas1</li>
                        <li>111</li>
                        <li>11sadsa1</li>
                        <li>111</li>
                        <li>1211211</li>
                        <li>111</li>
                    </ul>
                </div> : ''
                }
                <div className="food-wrapper">
                    <ul>
                        {
                            result.length <= 0 ? this.state.text :
                            result.map((food,index) => {
                                console.log(food)
                                return (
                                    <li className='food-item' key={index}>
                                        <div className='image'>
                                            <img src={food.image} alt=""/>
                                        </div>
                                        <div className="rightInfo">
                                            <h2 className='title'>{food.name}</h2>
                                            <p className='price'>¥{food.price}元</p>
                                            <div className='cartcontrol'>
                                                <CartcontrolBox>
                                                    {
                                                        food.count <= 0 ? '' : <div className="cart-decrease" onClick={reduceFoodCount.bind(this,food,result)}  >
                                                        <i className='inner iconfont icon-jianhao'></i>
                                                    </div>
                                                    }
                                                    {
                                                        food.count <= 0 ? '' : <div className="cart-count">{food.count}</div>
                                                    }
                                                    <div className="crat-add iconfont icon-jiahao" onClick={addFoodCount.bind(this,food,result)} ></div>
                                                </CartcontrolBox>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </SearchBox>
        )
    }

   
    handleSearch() {
        const { goods } = this.props;
        let value = this.searchInput.current.value;
        if(value === '') {
            this.setState({
                text: '抱歉~ 请输入你选择的商品',
                result: []
            })
            return false;
        } else {
            this.setState({
                keyword: value
            },() => {
                let result = [];
                goods.forEach((good,index) => {
                    good.foods.forEach((food,index) => {
                        if(food.name.indexOf(value) > -1) {
                            result.push(food)
                            this.setState({
                                result
                            })
                        } else {
                            this.setState({
                                text: '抱歉~ 没有你要选择的商品',
                            })
                        }
                    })
                })
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ahao: state.HomeReducer.ahao,
        goods: state.HomeReducer.goods,
        result: state.SearchReducer.result,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduceFoodCount(food,result) {
            dispatch(actionCreators.reduceFoodCountAction(food,result))
        },
        addFoodCount(food,result) {
            dispatch(actionCreators.addFoodCountAction(food,result))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);