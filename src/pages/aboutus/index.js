import React from 'react';
import {
    AboutUsBox
} from './style'
class AboutUs extends React.Component {
    handlegoBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <AboutUsBox>
                <div className="title">
                    <i className='iconfont icon-right' onClick={this.handlegoBack.bind(this)} ></i>
                    关于我们
                </div>
                <div className='content'>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
            </AboutUsBox>
        )
    }
}

export default AboutUs;