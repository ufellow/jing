import styled from 'styled-components'

export const UserInfoBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .title {
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
    .info-list {
        margin-top: 30px;
        li {
            padding: .26rem;
            margin: .52rem 0;
            font-size: 14px;
            background: #fff;
            color: #333;
            i {
                font-size: 21px;
                vertical-align: middle;
                color: #0af;
            }
            .info-title {
                margin-left: .26rem;
                vertical-align: middle;
            }
            .info-content {
                display: inline-block;
                width: 70%;
                margin-left: .52rem;
                vertical-align: middle;
            }
        }
    }
`;