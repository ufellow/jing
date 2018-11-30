import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from './../../assets/wxavatar.jpg'
import {
    UserBox
} from './style'


class User extends Component {

    render() {
        return (
            <UserBox>
                <div className='title'>我的</div>
                <div className="header">
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="info">
                        <p>姓名: ahaow</p>
                        <p>手机号码: 12332910291</p>
                    </div>
                </div>

                <Link to='user/userinfo' className="user-info">
                    <i className='icon iconfont icon-ren'></i>
                    <span>个人信息</span>
                    <i className='right iconfont icon-rightjt'></i>
                </Link>

                <Link to='user/useraddress' className="user-info">
                    <i className='icon iconfont icon-dizhi'></i>
                    <span>收货地址</span>
                    <i className='right iconfont icon-rightjt'></i>
                </Link>

                <Link to='user/aboutus' className="user-info">
                    <i className='icon iconfont icon-guanyu'></i>
                    <span>关于我们</span>
                    <i className='right iconfont icon-rightjt'></i>
                </Link>

            </UserBox>
        )
    }
}

export default User;