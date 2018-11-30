import styled from 'styled-components';

export const AddressEditBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .header {
        position: relative;
        width: 100%;
        padding: .26rem;
        text-align: center;
        background: #0af;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        i {
            position: absolute;
            left: .26rem;
        }
    }
    .name {
        padding: .26rem;
        font-size: 14px;
        background: #fff;
        color: #e0e0e0;
        border-bottom: 1px solid #e0e0e0;

        i {
            font-size: 23px;
            vertical-align: middle;
        }
        span {
            margin-left: .26rem;
            vertical-align: middle;
            color: #333;
        }
        input[name='name'] {
            float: right;
            width: 6rem;
            border: none;
            border: 1px solid #e0e0e0;
            padding: .13rem;
            margin-right: .39rem;   
            vertical-align: middle;
        }
    }
    .save {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: .26rem;
        border: none;
        font-size: 14px;
        letter-spacing: 2px;
        background: #0af;
        color: #fff;
    }
`;