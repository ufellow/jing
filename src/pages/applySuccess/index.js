import React, {Component} from 'react';
import {ApplyMsg} from './style';
import Success from './../../assets/success.png'
import axios from 'axios';
import {registStatus} from './../../api/index'


class ApplySuccess extends Component {
    render() {
        return (
            <ApplyMsg>
                <img src={Success} alt='..'/>
                <span>您的申请正在后台审核，请耐心等待...</span>
            </ApplyMsg>
			
        );
	}
	
	isLogin() {
		axios.post(registStatus, {openid: 'openid'}).then((res) => {
            console.log(res.data)
			if (res.data.code === 0) { //审核中
				this.props.history.replace('/applysuccess')
			} else if (res.data.code === 1) { //审核通过
				console.log(this.props)
				this.props.history.replace('/home')
			} else if (res.data.code === -1) { //申请
				this.props.history.replace('/regist')
			}
		})
		.catch((error) => {
			console.log(error)
		})
	}

    componentDidMount() {
		this.isLogin();
	}
}

export default ApplySuccess;