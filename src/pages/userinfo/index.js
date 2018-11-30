import React , { Component } from 'react';
import {
    UserInfoBox
} from './style'

class UserInfo extends Component {

    handlegoback() {
        this.props.history.goBack()
    }
    render() {
        return (
            <UserInfoBox>
                <div className="title">
                    <i className='iconfont icon-right' onClick={this.handlegoback.bind(this)}></i>
                    个人信息
                </div>

                <ul className='info-list'>
                    <li>
                        <i className='iconfont icon-ren'></i>
                        <span className='info-title'>姓名&nbsp;: </span>
                        <span className='info-content'>某某某</span>
                    </li>
                    <li>
                        <i className='iconfont icon-lianxifangshi'></i>
                        <span className='info-title'>手机&nbsp;: </span>
                        <span className='info-content'>13391920101</span>
                    </li>
                    <li>
                        <i className='iconfont icon-dizhi'></i>
                        <span className='info-title'>地址&nbsp;: </span>
                        <span className='info-content'>某某某川师本部xxxxxxx</span>
                    </li>
                    <li>
                        <i className='iconfont icon-dianpu'></i>
                        <span className='info-title'>店名&nbsp;: </span>
                        <span className='info-content'>某某某烟酒店</span>
                    </li>
                </ul>
            </UserInfoBox>
        )
    }
}

export default UserInfo;