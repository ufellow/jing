import styled from 'styled-components';

export const Goods = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 1.8rem;
    // height: 10rem;
    bottom:2.78rem
    overflow: hidden;
    .menu-wrapper {
        flex: 0 0 2.13rem;
        width: 2.13rem;
        background: #f3f5f7;
        .menu-item {
            display: table;
            height: 1.28rem;
            width: 100%;
            line-height: 0.8rem;
            padding: 0 0.37rem;
            text-align: center;
            &.current {
                position: relative;
                z-index: 10px;
                margin-top: -1px;
                background: #fff;
                font-weight: 700;
            }
            .text {
                display: table-cell;
                width: 1.5rem;
                vertical-align: middle;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                font-size: 12px;
            }
        }
    }
    .food-wrapper {
        flex: 1;
        background: #fff;
        .food-item {
            display: flex;
            margin: 0.48rem;
            padding-bottom: 0.48rem;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            &:last-child {
                border-bottom: none;
            }
            .icon {
                flex: 0 0 1.52rem;
                margin-right: 0.38rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                position: relative;
                flex: 1;
                .name {
                    margin: 0.05rem 0 0.2rem;
                    height: 0.38rem;
                    line-height: 0.38rem;
                    font-size: 14px;
                    color: #000;
                    font-weight: 700;
                }
                .des, .extra {
                    line-height: 0.3rem;
                    font-size: 11px;
                    color: rgba(147,153,159,1);
                }
                .desc {
                    margin-bottom: 0.21rem;
                }
                .extra {
                    .count {
                        margin-right: 0.32rem;
                    }
                }
                .price {
                    font-weight: 700;
                    line-height: 0.64rem;
                }
                .cartcontrol-wrapper {
                    position: absolute;
                    right: 0;
                    bottom: -0.35rem;
                }
            }
        }
        .title {
            padding-left: 0.37rem;
            height: 0.7rem;
            line-height: 0.7rem;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            background: #f3f5f7;
            color: rgb(147,153,159);
        }
    }
`;

export const CartcontrolBox = styled.div`
    .cart-decrease {
        display: inline-block;
        padding: 0.16rem;
        line-height: 0.64rem;
        color: rgb(0,160,220);
        transition: all 0.4s linear;
        .inner {
            line-height: 0.64rem;
            font-size: 20px;
            transition: all 0.4s linear;
        }
    }
    .cart-count {
        display: inline-block;
        vertical-align: top;
        width: 0.32rem;
        padding-top: 0.16rem;
        line-height: 0.64rem;
        text-align: center;
        font-size: 12px;
        color: rgb(147,153,159);
    }
    .crat-add {
        
        display: inline-block;
        padding: 0.16rem;
        line-height: 0.64rem;
        font-size: 20px;
        color: rgb(0,160,220)
    }  
`;

export const ShopCartBox = styled.div`
    position: fixed;
    left: 0;
    bottom: 1.4rem;
    z-index: 99;
    width: 100%;
    height:  1.38rem;
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
                    width: .5rem;
                    height: .5rem;
                    line-height: .5rem;
                    text-align: center;
                    border-radius: 50%;
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
            flex: 0 0 2.8rem;
            width: 2.8rem;
            .pay {
                height: 1.38rem;
                line-height: 1.38rem;
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
    }
    .shopcart-list {
            position: absolute;
            left: 0;
            bottom: 1.28rem;
            z-index: -1;
            width: 100%;
            /* opacity: 0; */
            /* transform: translate3d(0,100%,0); */
            .list-header {
                height: 1.06rem;
                line-height: 1.06rem;
                padding: 0 0.48rem;
                background-color: #f3f5f7;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                .title {
                    float: left;
                    font-size: 14px;
                    color: rgba(7,17,27,1);
                }
                .empty {
                    float: right;
                    font-size: 12px;
                    color: rgb(0,160,220);
                }
            }
            .list-content {
                padding: 0 0.48rem;
                overflow: hidden;
                background-color: #fff;
                .food {
                    position: relative;
                    padding: 0.32rem 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    .name {
                        line-height: 0.64rem;
                        font-size: 14px;
                        color: rgb(7,17,27);
                    }
                    .price {
                        position: absolute;
                        right: 2.4rem;
                        bottom: 0.32rem;
                        line-height: 0.64rem;
                        font-size: 14px;
                        font-weight: 700;
                        color: rgb(240,20,20);
                    }
                    .cartcontrol-wrapper {
                        position: absolute;
                        right: 0;
                        bottom: 2px;
                    }
                }
            }
    }
    .list-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background-color: rgba(7,17,27,.5);
    }
    .fade-enter , .fade-appear {
        opacity: 0;
        /* transform: translate3d(0,100%,0);   */
    }
    .fade-enter-active , .fade-appear-active {
        /* transform: translate3d(0,0,0);   */
        opacity: 1;
        transition: all 0.3s ease-in;
    }
    .fade-enter-done {
        opacity: 1;
        /* transform: translate3d(0,0,0);   */
    }
    .fade-exit {
        opacity: 1;
        /* transform: translate3d(0,0,0);   */
    }
    .fade-exit-active {
        opacity: 0;
        transition: all 0.3s ease-in;
    }
    .fade-exit-done {
        opacity: 0
    }
`;


export const SearchBox = styled.div`
    width: 100%;
    height: 1.6rem;
    background: #008de1;
    overflow: hidden;
    .name {
        font-size: 16px;
        padding: 0.16rem 0.26rem;
        margin-left: 5px;
        color: #fff;
    }
    .input {
        position: relative;
        width: 80%;
        padding: 0.26rem;
        height: 0.8rem;
        margin: 0.4rem auto;
        background: #fff;
        border-radius: 10px; 
        i {
            position: absolute;
            left: 10px;
            top: 7px;
        }
    }
`

export const Toast = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    z-index: 9999;
    width: 60%;
    height: 2.66rem;
    background: #fff;
    .title {
        width: 100%;
        height: 50%;
        font-size: 14px;
        text-align: center;
        line-height: 1.33rem;
    }
    .operation {
        width: 100%;
        height: 1.06rem;
        margin-top: .26rem;
        button {
            border: none;
            width: 50%;
            height: 100%;
            font-size: 14px;
        }
        .cancel {
            border-right: 1px solid #e0e0e0;
        }
        .sure {
            background: #4cd96f;
            color: #fff;
        }
    }
`;