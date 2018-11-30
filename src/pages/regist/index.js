import React , { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
    RegistBox
} from './style'
class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            shopName: '',
            toastShow: false,
            toastText: ''
        }
    }
    render() {
        return (
            <RegistBox>
                <div className="title">
                    <img src="" alt=""/>
                </div>
                <section className='name'>
                    <input type="text" placeholder='姓名' onChange={this.handleChangeName.bind(this)} value={this.state.name} name='name'  />
                </section>
                <section className='phone'>
                    <input type="text" placeholder='手机号' onChange={this.handleChangePhone.bind(this)} value={this.state.phone} name='name'  />
                </section>
                <section className='address'>
                    <input type="text" placeholder='地址' onChange={this.handleChangeAddress.bind(this)} value={this.state.address} name='name'  />
                </section>
                <section className='shop-name'>
                    <input type="text" placeholder='店名' onChange={this.handleChangeShopName.bind(this)} value={this.state.shopName} name='name'  />
                </section>
                <div className='btn'>
                    <button className='apply' onClick={this.handleApply.bind(this)}>申请</button>
                </div>
                <div className="contact">联系我们></div>
                <CSSTransition 
                    in={this.state.toastShow}
                    timeout={800}
                    classNames='fade'
                    appear={true}
                    unmountOnExit
                >
                    <div className='toast' >
                        {this.state.toastText}
                    </div> 
                </CSSTransition> 
                  
            </RegistBox>
        )
    }
    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    
    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleChangeShopName(e) {
        this.setState({
            shopName: e.target.value
        })
    }

    showToast(text) {
        this.setState({
            toastShow: true,
            toastText: text
        })
        setTimeout(() => {
            this.setState({
                toastShow: false
            })
        },2000)
    }

    handleApply () {
        const { name , phone , address , shopName } = this.state;
        if(name === '') {
            this.showToast('姓名不能为空');
            return false;
        } else if (!/^1[1-9]\d{9}$/.test(phone)) {
            this.showToast('手机格式不正确');
            return false;
        } else if (address === '') {
            this.showToast('地址不能为空');
            return false;
        } else if (shopName === '') {
            this.showToast('店名不能为空');
            return false;
        } else {
            alert('ok')
        }
    }
}

export default Regist;
