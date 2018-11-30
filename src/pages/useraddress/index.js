import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {UserAddressBox, Toast} from './style'

class UserAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
              maskShow: false,
            toastShow: false,
            msg:'',
            AddressArr: [
                {
                    id: '111',
                    name: '王先生',
                    phone: 13329191028,
                    address: '成都市锦江区沙河堡塔子山壹号',
                    shopname:'XX酒水',
                    isSelected:true
                }, {
                    id: '222',
                    name: '吕先生',
                    phone: 233012121,
                    address: '成都市高新区大源都城雅颂居',
                    shopname:'店铺名称',
                    isSelected:false
                }, {
                    id: '333',
                    name: '吕先生',
                    phone: 233012121,
                    address: '成都市高新区大源都城雅颂居',
                    shopname:'店铺名称',
                    isSelected:false
                }
            ]
        }
    }

    handlegoback() {
        this
            .props
            .history
            .goBack()
    }
//添加地址
    handleAddAddress(){
        const _this = this;
        if(this.state.AddressArr.length == 3) {
            this.setState({
                maskShow:true,
                toastShow:true,
                msg:'最多有三个地址，不能再添加'
            });
             setTimeout(()=>{
                _this.setState({
                     maskShow:false,
                    toastShow:false
                })},3000)
        }else{
            _this.props.history.push('useraddress/edit');
        }
      
    }
    // 删除地址
    handleDeleteAddress(event){
        const _this = this;
        if (_this.state.AddressArr.length==1) {
             this.setState({
                maskShow:true,
                toastShow:true,
                msg:'至少有一个地址'
            });
                 setTimeout(()=>{
                _this.setState({
                     maskShow:false,
                    toastShow:false,
                    msg:''
                })
            },3000) 
        }
        const idx = event.target.getAttribute('data-idx');
        console.log(idx);
        const list = this.state.AddressArr
        list.splice(idx,1);
        this.setState({
            AddressArr:list
        })
    }
    //设置默认地址
    handleClickSelect=(event)=>{
         
    }
   
    render() {
        return (
            <UserAddressBox>
                <div className="header">
                    <i
                        className='iconfont icon-right'
                        onClick={this
                        .handlegoback
                        .bind(this)}></i>
                    我的地址
                </div>
                <ul className='address-list'>
                    {this
                        .state
                        .AddressArr
                        .map((item,index) => {
                            return (
                                <li className='address-item' key={item.id} >
                                        <div className="address-title">
                                            <div className="address-name">{item.name}</div>
                                            <div className="address-phone">{item.phone}</div>
                                        </div>
                                         <div className='address-shopname'>{item.shopname}</div>
                                        <div className='address-text'>{item.address}</div>
                                    <div className="address-operation">
                                        <div className="address-default">
                                            <div className='address-radio' >
                                                <input type="radio" id={item.id} onClick={this.handleClickSelect.bind(this)}  checked={item.isSelected} name='address'/>
                                                <label htmlFor={item.id}></label>
                                                <span className='default-text'>设为默认</span>
                                            </div>
                                            <div className='address-delete'>
                                                <i className='iconfont icon-shanchu' data-idx={index} onClick={this.handleDeleteAddress.bind(this)}></i>
                                            </div>
                                            <Link to={`/user/useraddress/edit/?${item.id}`} className='address-edit'>
                                                <i className='iconfont icon-unif012'></i>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        }
                </ul>
                    {
                    this.state.toastShow ? 
                    <Toast>
                        {this.state.msg}
                    </Toast>
                    : ''
                }
                 <button className='add'  onClick={this.handleAddAddress.bind(this)}>添加地址</button>
            </UserAddressBox>
        )
    }
}

export default UserAddress;