import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ShopCartBox} from './style'

class ShopCart extends Component {
    render() {
        return (
            <ShopCartBox>
                <div className="content">
                    <div className="content-left">
                        <div className="logo-wrapper">
                            {this.totalCount()
                                ? <div className="logo highlight">
                                        <i className="iconfont icon-gouwuche highlight"></i>
                                    </div>
                                : <div className="logo">
                                    <i className="iconfont icon-gouwuche"></i>
                                </div>
                            }
                            <div className="num">{this.totalCount()}</div>
                        </div>
                        <div className="price">¥{this.totalPrice()}</div>
                    </div>
                    <div className="content-right">
                    {
                        this.totalCount() ?  <div className="pay enough" >去下单支付</div> : <div className="pay not-enough">选择商品</div>
                    }
                    </div>
                </div>
            </ShopCartBox>
        )
    }
  
    totalPrice() {
        let total = 0;
        this.props.selectFoods.forEach((food, index) => {
                total += food.price * food.count;
            });
        return total;
    }
    totalCount() {
        let count = 0;
        this.props.selectFoods.forEach((food, index) => {
                count += food.count;
            });
        return count;
    }
}
ShopCart.PropTypes = {
    selectFoods: PropTypes.array
}
ShopCart.defaultProps = {
    selectFoods: [
        {
            price: 10,
            count: 1
        }, {
            price: 15,
            count: 0
        }
    ]
}

export default ShopCart