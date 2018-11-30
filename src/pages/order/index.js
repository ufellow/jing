import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OrderBox} from './style'
import ToastComponent from './../../common/toast'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
       if(this.state.show) {
        return (
            <OrderBox>
                <ul className='order-list'>
                    <li className='order-item'>
                        <Link to='/orderdetail'>
                            <div className="header">
                                <span className='date'>2018-09-21 10:49:20</span>
                                <span className='order-state'>下单成功</span>
                            </div>
                            <div className="content">
                                <div className="title">商品明细&nbsp;:</div>
                                <ul className='food-list'>
                                    <li className='food-item'>
                                        <span className='food-name'>长城葡萄酒</span>
                                        <span className='food-price'>¥10</span>
                                        <span className='food-count'>x5</span>
                                    </li>
                                    <li className='food-item'>
                                        <span className='food-name'>长城葡萄酒</span>
                                        <span className='food-price'>¥10</span>
                                        <span className='food-count'>x5</span>
                                    </li>
                                    <li className='food-item'>
                                        <span className='food-name'>长城葡萄酒</span>
                                        <span className='food-price'>¥10</span>
                                        <span className='food-count'>x5</span>
                                    </li>
                                    <li className='food-item'>
                                        <span className='food-name'>长城葡萄酒</span>
                                        <span className='food-price'>¥10</span>
                                        <span className='food-count'>x5</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="detail">
                                <div className='total-price'>
                                    <span className='total-title'>合计&nbsp;:</span>
                                    <span className='price'>¥381.10</span>
                                </div>
                                <div className="operation">
                                    <div className="go-detail">详情</div>
                                </div>
                            </div>
                        </Link>
                    </li>

                </ul>

            </OrderBox>
        )
       } else {
        return (
            <ToastComponent></ToastComponent>
        )
       }
    }
    componentDidMount() {
        document.title = '订单'
        setTimeout(() => {
            this.setState({
                show: true
            })
        },2000)
    }
}

export default Order;