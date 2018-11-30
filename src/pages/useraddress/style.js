import styled from 'styled-components';

export const UserAddressBox = styled.div `
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
    .address-list {
        width: 100%;
        padding: .26rem;
        .address-item {
            padding: .26rem;
            border-radius: 10px;
            background: #fff;
            font-size: 14px;
            margin-bottom: .52rem;
            .address-title {
                zoom: 1;
                &::after {
                    content: '';
                    height: 0;
                    clear: both;
                    display: block;
                    visibility: hidden;
                }
                .address-name {
                    float: left;
                }
                .address-phone {
                    float: right;
                }
            }
            .address-text {
                padding-bottom: .26rem;
                margin-top: .26rem;
                border-bottom: 1px solid #e0e0e0;
            }
            .address-shopname{
                margin-top: .26rem;
            }
            .address-operation {
                margin-top: .26rem;
               
                .address-default {
                    position: relative;
                    zoom: 1;
                    &::after {
                        content: '';
                        height: 0;
                        clear: both;
                        visibility: hidden;
                        display: block;
                    }
                    .address-radio {
                        float: left;
                        input[name='address'] {
                            visibility: hidden;
                        }
                        label {
                            position: absolute;
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            border: 1px solid #e0e0e0;
                            background: #fff;
                            &::after {
                                content: '';
                                position: absolute;
                                left: 6px;
                                top: 2px;
                                width: 5px;
                                height: 9px;
                                border: 1px solid red;
                                border-top: none;
                                border-left: none;
                                transform: rotate(45deg);
                                opacity: 0;
                            }
                        }
                        input[name='address']:checked + label  {
                            background: orange;
                        }
                        input[name='address']:checked + label::after {
                            opacity: 1;
                            border-color: #fff;
                        }
                        .default-text {
                            display: inline-block;
                            width: 100px;
                            position: absolute;
                            left: 40px;
                            top: 2px;
                        }
                    }
                    .address-edit {
                        float: right;
                        margin-right: .26rem;
                        i {
                            font-size: 20px;
                            color: #bfbfbf;
                        }
                    }
                    .address-delete {
                        float: right;
                        margin-right: .26rem;
                        i {
                            font-size: 22px;
                            color: #bfbfbf;
                        }
                    }
                }
            }
        }
    }
    .add {
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


export const Toast = styled.div`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        z-index: 9999;
        width: 60%;
        height: 2rem;
        color:#fff;
        background-color: rgba(7,17,27,.7);
        font-size: 14px;
        display:flex;
        justify-content: center;
        align-items:center;
        border-radius:0.2rem
`;
