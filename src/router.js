import React, {Component, Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './App'
import Home from './pages/home'
import Tabbar from './common/tabbar'
import Search from './pages/search'
import Order from './pages/order'
import SubmitOrder from './pages/submitorder'
import OrderDetail from './pages/orderDetail'
import User from './pages/user'
import UserInfo from './pages/userinfo'
import UserAddress from './pages/useraddress'
import AddressEdit from './pages/addressedit'
import AboutUs from './pages/aboutus'
import Regist from './pages/regist'
import Login from './pages/login'
class Router extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Fragment>
                        <BrowserRouter>
                            <Fragment>
                                <App>
                                    <Switch>
                                        <Route exact path='/home' component={Home}></Route>
                                        <Route exact path='/regist' component={Regist}></Route>
                                        <Route exact path='/order' component={Order}></Route>
                                        <Route exact path='/submitorder' component={SubmitOrder}></Route>
                                        <Route exact path='/orderdetail' component={OrderDetail}></Route>
                                        <Route exact path='/search' component={Search}></Route>
                                        <Route exact path='/user' component={User}></Route>
                                        <Route exact path='/user/userinfo' component={UserInfo}></Route>
                                        <Route exact path='/user/useraddress' component={UserAddress}></Route>
                                        <Route exact path='/user/useraddress/edit' component={AddressEdit}></Route>
                                        <Route exact path='/user/aboutus' component={AboutUs}></Route>
                                        <Route exact path='/login' component={Login}></Route>
                                        <Redirect
                                            exact
                                            path="/"
                                            to={{
                                            pathname: '/home'
                                        }}/>
                                    </Switch>
                                </App>
                                <Tabbar></Tabbar>
                            </Fragment>
                        </BrowserRouter>
                    </Fragment>
                </Fragment>
            </Provider>
        )
    }
}

export default Router;