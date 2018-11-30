import styled from 'styled-components';

export const RegistBox = styled.div `
    width: 100%;
    .title {
        width: 70%;
        height: 60px;
        background: red;
        margin: 50px auto;
    }
    .name ,.phone , .address , .shop-name{
        width: 80%;
        height: 48px;
        margin: 0 auto 15px;
        input[name='name'] {
            width: 100%;
            height: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #333;
            margin: 0 auto;
            font-size: 14px;
        }
    }
    .btn {
        width: 70%;
        margin: 30px auto;
        .apply {
            width: 100%;
            background: #4cd96f;
            padding: 10px 0;
            border: none;
            font-size: 14px;
            color: #fff;
            border-radius: 3px;
        }
    }
    .contact {
        float: right;
        margin-top: 10px;
        margin-right: 15px;
        font-size: 13px;
        color: #2395ff;
    }
    .toast {
        position: fixed;
        bottom: 80px;
        color: #fff;
        background: #666;
        padding: 10px;
        border-radius: 5px;
        left: 50%;
        transform: translateX(-50%);
    }

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: all .8s ease;
    }
    .fade-enter-done {
        opacity: 1;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: all .8s ease;
    }
    .fade-exit-done {
        opacity: 0;
    }    
    
`;