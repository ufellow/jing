import styled from 'styled-components'

export const UserBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    font-size: 0;
   a:hover, a:visited, a:link, a:active 
        {
           text-decoration:none; 
        }
    .title {
        padding: .26rem 0;
        background: #0af;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        border-bottom: 1px solid #fff;
    }
    .header {
        width: 100%;
        background: #0af;
        zoom: 1;
        padding: .4rem;
        margin-bottom: .8rem;
        &::after {
            content: '';
            display: block;
            visibility: hidden;
            height: 0;
            clear: both;
        }
        .avatar {
            float: left;
            font-size: 0;
            img {
                width: 1.33rem;
                height: 1.33rem;
                border-radius: 50%;
            }
        }
        .info {
            float: left;
            margin-left: .53rem;
            font-size: 13px;
            color: #fff;
            p:nth-child(1) {
               margin: .18rem 0;
            }
        }
    }
    .user-info {
        display: block;
        margin-bottom: .26rem;
        padding: .26rem;
        font-size: 14px;
        background: #fff;
        i {
            font-size: 20px;
            vertical-align: middle;
        }
        .icon {
            color: rgb(74, 165, 240);
        }
        .right {
            float: right;
            color: #bbb;
        }
        span {
            font-size: 14px;
            margin-left: .26rem;
            color: #333;
            vertical-align: middle;
        }
    }

`;