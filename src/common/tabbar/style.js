import styled from 'styled-components';

export const TabbarBox = styled.div `
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    .tab-item {
        flex: 1;
        line-height: 20px;
        text-align: center;
        font-size: 15px;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            &.active {
                i {
                    color: #008de1;
                }
                p {
                    color: #008de1;
                }
            }
            i { 
                display: inline-block;
                margin-top: 5px;
                color: #e0e0e0;
                font-size: 25px;
            }
            p {
                font-size: 14px;
                color: #e0e0e0;
            }
        }
    }
`;