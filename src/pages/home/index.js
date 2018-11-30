import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'
import BScroll from 'better-scroll'
// import './index.css'
import {Goods, CartcontrolBox, ShopCartBox, SearchBox , Toast} from './style'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectFoods: [],
            listHeight: [],
            scrollY: 0,
            totalCount: 0, // 总数量
            totalPrice: 0, // 总价
            shopShow: false,
            maskShow: false,
            toastShow: false

        }
        this.menuWrapper = React.createRef();
        this.foodWrapper = React.createRef();
        this.mask = React.createRef();
    }
   
    handleDecreaseCount(food, event) {
        let {goods} = this.state;
        if (event._constructed) {
            return;
        }
        food.count--;
        let Arr = JSON.parse(JSON.stringify(goods));
        this.setState({goods: Arr})
        if(this.selectFoods().length <= 0) {
            this.setState({
                show: false
            })
        }
    }

    selectFoods() {
        let {goods} = this.props;
        let foods = [];
        goods.forEach((good, index) => {
            good
                .foods
                .forEach((food, index) => {
                    if (food.count > 0) {
                        foods.push(food)
                    }
                })
        })
        return foods;
    }

    handleEmpty() {
        let {goods} = this.props;
        this.props.emptyGoods(goods)
        this.setState({selectFoods: [], maskShow: false, shopShow: false})
    }

    render() {
        let totalCount = 0;
        let totalPrice = 0;
        this
            .selectFoods()
            .forEach((food) => {
                totalCount += food.count;
                totalPrice += food.count * food.price;
                return (totalCount, totalPrice)
            })
            
        const { goods , addFoodCount , reduceFoodCount} = this.props;
        return (
            <div>
                <SearchBox>
                    <Link to='search'>
                        <div className="input">
                            <i className='iconfont icon-fangdajing'></i>
                        </div>
                    </Link>
                </SearchBox>
                <Goods>
                    <div className="menu-wrapper" ref={this.menuWrapper}>
                        <ul>
                            {goods.map((good, index) => {
                                return (
                                    <li
                                        className={this.currentIndex() === index
                                        ? 'menu-item current'
                                        : 'menu-item'}
                                        key={index}
                                        onClick={this
                                        .selectMenu
                                        .bind(this, index)}>
                                        <span className='text'>{good.name}</span>
                                    </li>
                                )
                            })
}
                        </ul>
                    </div>

                    <div className="food-wrapper" ref={this.foodWrapper}>
                        <ul>
                            {goods.map((good, index) => {
                                return (
                                    <li className='food-list-hook' key={index}>
                                        <h1 className='title'>{good.name}</h1>
                                        <ul>
                                            {good
                                                .foods
                                                .map((food, index) => {
                                                    return (
                                                        <li key={index} className='food-item'>
                                                            <div className='icon'>
                                                                <img src={food.icon} alt='1'/>
                                                            </div>
                                                            <div className="content">
                                                                <h2 className='name'>{food.name}</h2>
                                                               
                                                                <div className='extra'>
                                                                    <span className='count'>月售{food.sellCount}份</span>
                                                                    <span>好评率{food.rating}%</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span>¥{food.price}</span>
                                                                </div>
                                                                <div className="cartcontrol-wrapper">
                                                                    <CartcontrolBox>
                                                                        {food.count > 0
                                                                            ? <div
                                                                                    className="cart-decrease"
                                                                                    onClick={reduceFoodCount
                                                                                    .bind(this, food,goods)}>
                                                                                    <i className='inner iconfont icon-jianhao'></i>

                                                                                </div>
                                                                            : ""
}
                                                                        {food.count > 0
                                                                            ? <div className="cart-count">{food.count}</div>
                                                                            : ''
}
                                                                        <div
                                                                            className="crat-add iconfont icon-jiahao" onClick={addFoodCount.bind(this,food,goods)}
                                                                            ></div>
                                                                    </CartcontrolBox>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
}
                                        </ul>
                                    </li>
                                )
                            })
}
                        </ul>
                    </div>
                    <ShopCartBox>
                        <div className="content">
                            <div
                                className="content-left"
                                onClick={this
                                .shopcartlistShow
                                .bind(this)}>
                                <div className="logo-wrapper">
                                    {totalCount > 0
                                        ? <div>
                                                <div className="logo highlight">
                                                    <i className="iconfont icon-gouwuche highlight"></i>
                                                </div>
                                                <div className="num">
                                                    {totalCount}
                                                </div>
                                            </div>
                                        : <div>
                                            <div className="logo">
                                                <i className="iconfont icon-gouwuche"></i>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="price">¥{totalPrice}</div>
                            </div>
                            {totalPrice > 0
                                ? <div className="content-right">
                                        <div
                                            className='pay enough'
                                            onClick={this
                                            .handleSure
                                            .bind(this)}>立即下单</div>
                                    </div>
                                : <div className="content-right">
                                    <div className='pay not-enough'>选择商品</div>
                                </div>
}
                        </div>
                        <CSSTransition
                            in={this.state.shopShow}
                            timeout={800}
                            classNames='fade'
                            appear={true}
                            unmountOnExit>
                            <div className="shopcart-list">
                                {
                                    this.selectFoods().length > 0 ? 
                                    <div className="list-header">
                                    <h1 className='title'>购物车</h1>
                                    <span
                                        className='empty'
                                        onClick={this
                                        .handleEmpty
                                        .bind(this)}>清空</span>
                                </div>: ''
                                }
                                <div className="list-content">
                                    <ul>
                                        {this
                                            .selectFoods()
                                            .map((food, index) => {
                                                // console.log(food, index)
                                                return (
                                                    <li key={index} className='food'>
                                                        <span className='name'>{food.name}</span>
                                                        <span className='price'>{food.price * food.count}</span>
                                                        <div className="cartcontrol-wrapper">
                                                            <CartcontrolBox>
                                                                <div className="cart-decrease" onClick={reduceFoodCount
                                                                    .bind(this, food,goods)}>
                                                                    <i className='inner iconfont icon-jianhao'></i>
                                                                </div>
                                                                <div className="cart-count">{food.count}</div>
                                                                <div className="crat-add iconfont icon-jiahao" onClick={addFoodCount.bind(this,food,goods)}></div>
                                                            </CartcontrolBox>
                                                        </div>
                                                    </li>
                                                )
                                            })
}
                                    </ul>
                                </div>
                            </div>
                        </CSSTransition>
                        {this.state.maskShow 
                            ? <div className="list-mask" ref={this.mask}></div>
                            : ''}
                    </ShopCartBox>
                </Goods>
               
            </div>
        )
    }
    // 点击显示选择了的商品
    shopcartlistShow() {
        if (this.selectFoods().length > 0) {
             this.setState({
                maskShow: !this.state.maskShow,
                shopShow: !this.state.shopShow
            })
          
        } else {
             this.setState({
                maskShow: false,
                shopShow: false
            })
        }
    }
    // // 立即下单
    // handlePurchase() {
    //     this.setState({
    //         toastShow: true,
    //         maskShow: true
    //     },() => {
    //         this.mask.current.style.zIndex = 100;
    //     })
    // }
    // handleCancel() {
    //     this.mask.current.style.zIndex = -2;
    //     this.setState({
    //         toastShow: false,
    //         maskShow: false
    //     })
    // }
    handleSure() {
        let arr = this.selectFoods();
      this.props.history.push({pathname:'/submitorder',state:{goods:arr}});
        this.props.getGoodsData();
    }

    // BScroll初始化
    _initScroll() {
        this.meunScroll = new BScroll(this.menuWrapper.current, {click: true});
        this.foodScroll = new BScroll(this.foodWrapper.current, {
            click: true,
            probeType: 3
        });
        this.foodScroll.on('scroll', (pos) => {
            const posY = Math.abs(Math.round(pos.y))
            this.setState({scrollY: posY})
        })
    }
    currentIndex() {
        const {listHeight, scrollY} = this.state;
        // console.log(listHeight , scrollY)
        for (let i = 0; i < listHeight.length; i++) {
            let height1 = listHeight[i];
            let height2 = listHeight[i + 1];
            if (!height2 || (scrollY >= height1 && scrollY < height2)) {
                return i;
            }
        }
        return 0;
    }

    _calculateHeight() {
        let foodList = this
            .foodWrapper
            .current
            .getElementsByClassName('food-list-hook');
        let height = 0;
        this.state.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
            let item = foodList[i];
            height += item.clientHeight;
            this.state.listHeight.push(height);
        }
    }

    selectMenu(index, event) {
        console.log(index)
        if (event._constructed) {
            return;
        }
        let foodList = this
            .foodWrapper
            .current
            .getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this
            .foodScroll
            .scrollToElement(el, 800);
    }

    componentWillMount() {
       
    }

    componentDidMount() {
        if(this.props.goods.length <= 0) {
           this.props.getGoodsData();
        }
        this._initScroll();
        // this._calculateHeight();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.scrollY === this.state.scrollY) {
            this._calculateHeight()
        }
    }

    componentWillUnmount() {
    }
}

const mapStateToProps = (state) => {
    return {
        ahao: state.HomeReducer.ahao,
        goods: state.HomeReducer.goods,
        hanzo: state.SearchReducer.hanzo,
       

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGoodsData() {
            dispatch(actionCreators.getGoodsData());
        },
        addFoodCount(food,goods) {
            this.setState({
                shopShow: false,
                maskShow: false,
                toastShow: false,
            })
            dispatch(actionCreators.addFoodCountAction(food,goods))
        },
        reduceFoodCount(food,goods) {        
            dispatch(actionCreators.reduceFoodCountAction(food,goods))
            if (this.selectFoods().length<=0) {
                 this.setState({
                 maskShow: false
                })
            }

        },
        emptyGoods(goods) {
            dispatch(actionCreators.emptyGoodsAction(goods))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);