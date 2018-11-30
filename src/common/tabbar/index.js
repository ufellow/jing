import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import {TabbarBox} from './style'
class Tabbar extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    render() {
        const pathname = this.context.router.route.location.pathname
        console.log(pathname)
        if(pathname === '/search' || 
            pathname === '/regist' ||   
            pathname === '/orderdetail' || 
            pathname === '/submitorder' ||
            pathname.indexOf('/user/') !== -1) {
            return ''
        } else {
            return (
                <TabbarBox>
                    <div className='tab-item'>
                        <NavLink to='/home' activeClassName='active'>
                            <i className='iconfont icon-shangcheng'></i>
                            <p>商城</p>
                        </NavLink>
                    </div>
                    <div className='tab-item'>
                        <NavLink to='/order' activeClassName='active'>
                            <i className='iconfont icon-bill'></i>
                            <p>订单</p>
                        </NavLink>
                    </div>
                    <div className='tab-item'>
                        <NavLink to='/user' activeClassName='active'>
                            <i className='iconfont icon-jingjirenjinglikehumianxingcopy'></i>
                            <p>个人</p>
                        </NavLink>
                    </div>
                </TabbarBox>
            )
        }
    }
}

export default Tabbar;