import styled from 'styled-components'

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