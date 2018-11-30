import styled from 'styled-components';

export const SearchBox = styled.div`
    width: 100%;
    .header {
        padding: .4rem;
        .back {
            color: #e0e0e0;
        }
        .search-input {
            display: inline-block;
            width: 72%;
            height: .8rem;
            margin-left: 0.26rem;
            margin-left: .53rem;
            input[type="search"] {
                width: 100%;
                height: 100%;
                border-radius: 15px;
                padding: 0 0.26rem;
                border: 1px solid #e0e0e0;
            }
        }
        .btn-search {
            float: right;
            border: none;
            padding: .21rem .4rem;
            border-radius: 15px;
            color: #fff;
            background: #00A0D6;
        }
    }
    .search-history {
        .title {
            padding: .26rem;
            color: #616161;
            i {
                font-size: 18px;
                vertical-align: middle;
            }
            span {
                font-size: 12px;
                vertical-align: middle;
                margin-left: 10px;
            }
        }
    }
    .history-list {
        padding: .26rem;
        zoom: 1;
        border-bottom: 1px solid #e0e0e0;
        &::after {
            content: '';
            display: block;
            visibility: hidden;
            height: 0;
            clear: both;
        }
        li {
            float: left;
            padding: .13rem .26rem;
            margin: .16rem .13rem;
            background-color: #F1F1F2;
            color: #989898;
            border-radius: 10px;
        }
    }
    .food-wrapper {
        padding: .26rem;
        ul {
            .food-item {
                zoom: 1;
                padding-bottom: .13rem;
                margin-bottom: .13rem;
                border-bottom: 1px solid #e0e0e0;
                &::after {
                    content: '';
                    display: block;
                    visibility: hidden;
                    height: 0;
                    clear: both;
                }
                .image {
                    float: left;
                    width: 75px;
                    height: 75px; 
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .rightInfo {
                    width: 70%;
                    float: left;
                    margin-left: .26rem;
                    .title {
                        font-size: 16px;
                    }
                    .price {
                        margin-top: 0.36rem;
                        color: red;
                    }
                    .cartcontrol {
                        float: right;
                    }
                }

            }
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