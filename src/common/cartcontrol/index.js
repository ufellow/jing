import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CartcontrolBox} from './style'

class Cartcontrol extends Component {
    constructor(props) {
        super(props)
        this.handleAddCount = this
            .handleAddCount
            .bind(this)
        this.handleDecreaseCount = this
            .handleDecreaseCount
            .bind(this)

        this.state = {
            count: 0
        }
    }
    handleAddCount(event) {
        if (event._constructed) {
            return;
        }

    }
    handleDecreaseCount(event) {
        if (event._constructed) {
            return;
        }
        let count = this.state.count;

    }

    render() {
        return (
            <CartcontrolBox>
                <div className="cart-decrease" onClick={this.handleDecreaseCount}>
                    <i className='inner iconfont icon-jianhao'></i>
                </div>

                <div className="cart-count">{this.state.count}</div>
                <div className="crat-add iconfont icon-jiahao" onClick={this.handleAddCount}></div>
            </CartcontrolBox>
        )
    }
    componentDidMount() {}
}

export default Cartcontrol