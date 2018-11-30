import React , { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import * as serviceWorker from './serviceWorker';
import './assets/flexible_css.debug'
import './assets/flexible.debug'
import './assets/phone_reset.css'


const Apps = () => {
    return (
      <Fragment>
        <Router />
      </Fragment>
    )
}

ReactDOM.render(<Apps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
