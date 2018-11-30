import React , { Component } from 'react';
import {
    ToastBox
} from './style'
import load from './../../assets/ajax-loader.gif';

class ToastComponent extends Component {

    render() {
        return (
            <ToastBox>
                <div className="image">
                    <img src={load} alt='加载中' />
                </div>
                <div className="text">加载中</div>
            </ToastBox>
        )
    }
}

export default ToastComponent;