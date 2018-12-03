import React , { Component } from 'react';
import {
    UserInfoBox
} from './style'
import axios from 'axios'
import {getUserInfoApi} from './../../api/index'
class UserInfo extends Component {

    handlegoback() {
        this.props.history.goBack()
    }
    state={
        userInfo:{}
    }

    render() {
        const userinfo = this.state.userInfo;
        console.log(userinfo)
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
                        <span className='info-content'>{userinfo.name}</span>
                    </li>
                    <li>
                        <i className='iconfont icon-lianxifangshi'></i>
                        <span className='info-title'>手机&nbsp;: </span>
                        <span className='info-content'>{userinfo.mobile}</span>
                    </li>
                    <li>
                        <i className='iconfont icon-dizhi'></i>
                        <span className='info-title'>地址&nbsp;: </span>
                        <span className='info-content'>{userinfo.address}</span>
                    </li>
                    <li>
                        <i className='iconfont icon-dianpu'></i>
                        <span className='info-title'>店名&nbsp;: </span>
                        <span className='info-content'>{userinfo.storename}</span>
                    </li>
                </ul>
            </UserInfoBox>
        )
    }
     componentDidMount(){
        axios.post(getUserInfoApi,{
            id:1
        }).then((res)=>{
            this.setState({
                userInfo:res.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

}

export default UserInfo;