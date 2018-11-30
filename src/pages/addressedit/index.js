import React , { Component } from 'react';
import {
    AddressEditBox
} from './style'

class AddressEdit extends Component {
    handlegoback() {
        this.props.history.goBack();
    }
    render() {
        return (
            <AddressEditBox>
                <div className="header">
                    <i
                        className='iconfont icon-right'
                        onClick={this
                        .handlegoback
                        .bind(this)}></i>
                    编辑地址
                </div>
                <div className="name">
                    <i className='iconfont icon-ren'></i>
                    <span>收货人&nbsp;: </span>
                    <input type="text" name='name' />
                </div>

                <div className="name">
                    <i className='iconfont icon-lianxifangshi'></i>
                    <span>手机号码&nbsp;: </span>
                    <input type="text" name='name' />
                </div>

                <div className="name">
                    <i className='iconfont icon-dianpu'></i>
                    <span>店名&nbsp;: </span>
                    <input type="text" name='name' />
                </div>

                <div className="name">
                    <i className='iconfont icon-dizhi'></i>
                    <span>地址&nbsp;: </span>
                    <input type="text" name='name' />
                </div>

                <button className='save'>保存</button>

            </AddressEditBox>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}

export default AddressEdit;