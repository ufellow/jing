import styled from 'styled-components';

export const ToastBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 2rem;
    height: 2rem;
    background: #333;
    border-radius: 10px;
    .image {
        width: 1rem;
        height: 1rem;
        margin: 10px auto 5px;
    }
    .text {
        text-align: center;
        color: #fff;
    }
`;