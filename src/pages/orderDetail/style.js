import styled from 'styled-components';

export const OrderDetailBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    .header {
        position: relative;
        background: #418BCC;
        padding: .26rem;
        font-size: 14px;
        color: #fff;
        text-align: center;
        i {
            position: absolute;
            top: 50%;
            left: 10px;
            margin-top: -9px;
        }
    }
    .order-num {
        background: #fff;
        padding: .26rem;
        margin-top: .26rem;
        font-size: 14px;
        color: #6B6B6B;
        i {
            font-size: 20px;
            vertical-align: middle;
        }
        .title {
            margin-left: .26rem;
            vertical-align: middle;
        }
        .num {
            margin-left: 15px;
            vertical-align: middle;
        }
    }
    .food-content {
        background: #fff;
        margin-top: .26rem;
        padding: .26rem;
        font-size: 14px;
        color: #6B6B6B;
        .title {
            span {
                margin-left: .26rem;
            }
        }
    }
    .food-list {
        padding: .26rem 0 .26rem 0;
        li {
            border-bottom: 1px solid #e0e0e0;
            padding: .26rem 0;
            zoom: 1;
            &::after {
                content: '';
                clear: both;
                height: 0;
                display: block;
                visibility: hidden;
            }
            .food-name {
                float: left;
            }
            .food-price {
                float: right;
                color: red;
                span {
                    margin: 0 2px;
                }
                .price {
                    color: #D69B23;
                }
                .count {
                    color: red;
                }
            }
        }
    }
    .consignee {
        background: #fff;
        margin-top: .26rem;
        padding: .26rem;
        font-size: 14px;
        color: #6B6B6B;
        zoom: 1;
        line-height: 20px;
        &::after {
            content: '';
            clear: both;
            height: 0;
            visibility: hidden;
            display: block;
        }
        .title {
            float: left;
            i {
                font-size: 22px;
                vertical-align: middle;
            }
            span {
                margin-left: .26rem;
                vertical-align: middle;
            }
        }
        .info {
            float: right;
            vertical-align: middle;
        }
    }
`;