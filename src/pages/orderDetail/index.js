import React , { Component } from 'react';
import {
    OrderDetailBox
} from './style'

class OrderDetail extends Component {
    handleback() {
        this.props.history.goBack()
    }
    render() {
        return (
            <OrderDetailBox>
                <div className="header">
                    <i className='iconfont icon-right' onClick={this.handleback.bind(this)}></i>
                    订单详情
                </div>

                <div className="order-num">
                    <i className='iconfont icon-icon--copy'></i>
                    <span className='title'>订单编号&nbsp;:</span>
                    <span className='num'>ACAS1203U2183211</span>
                </div>
                <div className='food-content'>
                    <div className="title">
                        <i className='iconfont icon-shangpin'></i>
                        <span>商品明细&nbsp;:</span>
                    </div>
                    <ul className='food-list'>
                        <li>
                            <span className='food-name'>长城葡萄酒</span>
                            <span className='food-price'>
                                <span className="price">¥150</span>
                                <span>*</span>
                                <span className="count">5</span>
                            </span>
                        </li>
                        <li>
                            <span className='food-name'>长城葡萄酒</span>
                            <span className='food-price'>
                                <span className="price">¥150</span>
                                <span>*</span>
                                <span className="count">5</span>
                            </span>
                        </li>
                        <li>
                            <span className='food-name'>长城葡萄酒</span>
                            <span className='food-price'>
                                <span className="price">¥150</span>
                                <span>*</span>
                                <span className="count">5</span>
                            </span>
                        </li>
                        <li>
                            <span className='food-name'>长城葡萄酒</span>
                            <span className='food-price'>
                                <span className="price">¥150</span>
                                <span>*</span>
                                <span className="count">5</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="consignee">
                    <div className="title">
                        <i className='iconfont icon-ren'></i>
                        <span>收货人</span>
                    </div>
                    <div className="info">某某某</div>
                </div>

                <div className="consignee">
                    <div className="title">
                        <i className='iconfont icon-lianxifangshi'></i>
                        <span>联系方式</span>
                    </div>
                    <div className="info">13310281012</div>
                </div>

                <div className="consignee">
                    <div className="title">
                        <i className='iconfont icon-dianpu'></i>
                        <span>店铺名称</span>
                    </div>
                    <div className="info">某某烟酒店</div>
                </div>

                <div className="consignee">
                    <div className="title">
                        <i className='iconfont icon-renminbi'></i>
                        <span>合计</span>
                    </div>
                    <div className="info">¥182</div>
                </div>

                <div className="consignee">
                <div className="title">
                    <i className='iconfont icon-lishi'></i>
                    <span>下单时间</span>
                </div>
                <div className="info">2018-06-12 10:21:16</div>
            </div>

            </OrderDetailBox>
        )
    }
    componentDidMount() {
        document.title = '订单详情'
    }
}
export default OrderDetail;