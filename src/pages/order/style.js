import styled from 'styled-components';

export const OrderBox = styled.div `
position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: #f9f9f9;
    padding: .26rem;
    .order-list {
        min-height: 100%;
        margin-bottom: 60px;
        .order-item {
            background: #fff;
            padding: .26rem;
            zoom: 1;
            margin-bottom: 10px;
            &::after {
                content: '';
                display: block;
                visibility: hidden;
                height: 0;
                clear: both;
            }
           .header {
                zoom: 1;
                font-size: 14px;
                border-bottom: 1px solid #E9E9E9;
                padding-bottom: .18rem;
                &::after {
                    content: '';
                    display: block;
                    visibility: hidden;
                    height: 0;
                    clear: both;
                }
               .date {
                   float: left;
                   color: #808080;
               }
               .order-state {
                   float: right;
                   color: #00D399;
               }
           }
           .content {
               padding: .26rem 0;
               font-size: 14px;
               color: #808080;
               border-bottom: 1px solid #e0e0e0;
               .food-list {
                   padding-left: 2.13rem;
                   .food-item {
                       margin: 10px 0;
                       span {
                           margin-right: 40px;
                       }
                       .food-price {
                           color: red;
                       }
                       .food-count {
                           color: #04D199;
                       }
                   }
               }
           }
           .detail {
               padding: .26rem 0;
               zoom: 1;
               &::after {
                   content: '';
                   display: block;
                   visibility: hidden;
                   height: 0;
                   clear: both;
               }
               .total-price {
                   float: left;
                   .total-title {
                        font-size: 14px;
                        color: #808080;
                        vertical-align: middle;
                   }
                   .price {
                        font-size: 18px;
                        color: #000;
                        margin-left: 5px;
                        vertical-align: middle;
                   }
               }
               .operation {
                   float: right;
                   .go-detail {
                       font-size: 13px;
                       background-color: #04D199;
                       color: #fff;
                       padding: 5px 10px;
                   }
               }
           }
        }
    }
`;