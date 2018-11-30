import React, {Component} from 'react';
import {SubmitOrderBox, Toast} from './style'

class SubmitOrder extends Component {
	constructor(props){
		super(props);
		this.state={
			goods:[],
			totalPrice:0,
			 maskShow: false,
			 toastShow: false
		}
	}

	componentDidMount(){
		const arr = this.props.history.location.state.goods;
		let totalmoney =0;
		for(let i = 0; i < arr.length; i++){
			totalmoney += arr[i].price*arr[i].count;
		}
		this.setState({
			goods: arr,
			totalPrice:totalmoney
		})
	}
	handleSelectAddress(){
		this.props.history.push('/user/useraddress')
	}
		render() {
			const goods = this.state.goods;
			
			return (
				<SubmitOrderBox>
					  <div className="header">
		                    <i className='iconfont icon-right' onClick={this.handleback.bind(this)}></i>
		                  		 提交订单                   
		               </div>
					<div className="addressBox">
						<div className="addressdetail">
							<div>成都市龙泉驿区十陵街道竹林尚书</div>
							<div>店铺名称</div>
							<div className="contact">联系人 15822222222</div>							
						</div>
						  <div className="more">
						  <i className='iconfont icon-rightjt' onClick={this.handleSelectAddress.bind(this)}></i>
						  </div>
					</div>
					<ul className="orderdetail">	
					<li><span className="name">商品明细：</span></li>		
						<li>

							<ul className="products">
								
								{goods.map((good,index)=>{
									return(
											<li key={index}>
												<span>{good.name}</span>
												<div>
													<span className="price">￥{good.price} </span>
													<span className="add">* </span>
													<span className="count">{good.count}</span>
												</div>
											</li>								
										)
								})

								}
								
							</ul>
						</li>					
							
						
					</ul>
					<div className="submitorder">
						<span>合计：￥{this.state.totalPrice}</span>
						<div  onClick={this.handleClick.bind(this)}>下单</div>
					</div>
					 {
                    this.state.toastShow ? 
                    <Toast>
                        <div className="title">确认下单吗？</div>
                        <div className='operation'>
                            <button className='cancel' onClick={this.handleCancel.bind(this)}>取消</button>
                            <button className='sure' onClick={this.handlePurchase.bind(this)}>确定</button>
                        </div>
                    </Toast>
                    : ''
                }
                  {this.state.maskShow 
                            ? <div className="mask" ></div>
                            : ''}
				</SubmitOrderBox>
			);
		}
	handleback(){
			this.props.history.go(-1);
		}

		// 立即下单
    handleClick() {
        this.setState({
            toastShow: true,
            maskShow: true
        })
    }
     handlePurchase() {
       this.props.history.push('/order');
    }
    handleCancel() {
        this.setState({
            toastShow: false,
            maskShow: false
        })
    }
	

} 

export default SubmitOrder;