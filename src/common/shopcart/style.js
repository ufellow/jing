import styled from 'styled-components';

export const ShopCartBox = styled.div `
    position: fixed;
    left: 0;
    bottom: 60px;
    z-index: 99;
    width: 100%;
    height:  1.28rem;
    .content {
        position: relative;
        display: flex;
        height: 100%;
        background: #141d27;
        font-size: 0; 
        .content-left {
            flex: 1;
            .logo-wrapper {
                display: inline-block;
                position: relative;
                top: -0.25rem;
                margin: 0 0.32rem;
                padding: 0.16rem;
                width: 1.5rem;
                height: 1.5rem;
                box-sizing: border-box;
                vertical-align: top;
                border-radius: 50%;
                background-color: #142d27;
                .logo {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #2b343c;
                    text-align: center;
                    &.highlight {
                        background:rgb(0,160,220);
                    }
                    i {
                        font-size: 24px;
                        line-height: 1.2rem;
                        font-style: normal;
                        color: rgba(255,255,255,0.4);
                        &.highlight {
                             color: #fff;
                        }                        
                    }
                }
                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: .64rem;
                    height: .42rem;
                    line-height: .42rem;
                    text-align: center;
                    border-radius: 16px;
                    font-size: 9px;
                    font-weight: 700;
                    color: #fff;
                    background-color: #f01414;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
                }
            }
            .price {
                display: inline-block;
                vertical-align: top;
                margin-top: 0.32rem;
                padding-right: 0.32rem;
                line-height: 0.64rem;
                box-sizing: border-box;
                border-right: 1px solid rgba(255,255,255,0.1);
                font-size: 16px;
                font-weight: 700;
                color: rgba(255,255,255,0.4);
                &.highlight {
                    color: #fff;
                }
            }
        }
        .content-right {
            flex: 0 0 105px;
            width: 105px;
            background: red;
            .pay {
                height: 1.28rem;
                line-height: 1.28rem;
                text-align: center;
                font-size: 12px;
                font-weight: 700;
                color: rgba(255,255,255,0.4);
                background: #2b333b;
                &.not-enough {
                    background-color: #2b333b;
                }
                &.enough {
                    background-color: #00b43c;
                    color: #fff;
                }     
            }
        }
        .shopcart-list {
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            width: 100%;
        }
    }
`;