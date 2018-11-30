import styled from 'styled-components';

export const SubmitOrderBox = styled.div`
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
    .addressBox {
    	padding:10px;
    	margin:10px;
    	display:flex;
    	flex-direction:row;
    	justify-content:space-between;
    	align-items:center;
    	background-color:#fff;
    	font-size:14px;
    	.addressdetail {    
    		.contact {
    			
    			font-size:12px;
    			color:grey
    		}	
    		div {
    			margin-top:10px;
    		}
    	}
    	.more{
    	}
    }
    .orderdetail {
    	padding:10px;
    	margin:10px;
    	background-color:#fff;
    	li {
    			display:flex;
	    		flex-direction:row;
	    		justify-content:space-between;
	    		padding:5px;
	    		margin:5px;
	    		.name{
    			font-size:14px;
    		}
	    		
    	}
    	.products {
    		width:100%;

    		li{
    			margin-left: 10px;
    			.add , .price , .count {

    				margin-left:5px;    	
    				 // font-style: italic;	
    			}
    			.add {
    				// color: red;
    			}
    		}
    	}

    	
    }
    .submitorder{
    	position:absolute;
    	height:45px;
    	width:100%;
    	display:flex;
    	flex-direction:row;
    	justify-content:flex-end;
    	bottom:0;
    	font-size:14px;
    	color:#fff;
    	background-color:grey;
    	text-align:center;    	
    	line-height:45px;
    	div {    		
    			height:100%;
				background-color:#418BCC;
				width:100px;	
    	}
    	span {
    		margin-right:10px;    		  
    	}
    }
     .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
         background-color: rgba(7,17,27,.5);
    }
`


export const Toast = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    z-index: 9999;
    width: 60%;
    height: 2.66rem;
    background: #fff;
    .title {
        width: 100%;
        height: 50%;
        font-size: 14px;
        text-align: center;
        line-height: 1.33rem;
    }
    .operation {
        width: 100%;
        height: 1.06rem;
        margin-top: .26rem;
        button {
            border: none;
            width: 50%;
            height: 100%;
            font-size: 14px;
        }
        .cancel {
            border-right: 1px solid #e0e0e0;
        }
        .sure {
            background: #4cd96f;
            color: #fff;
        }
    }
   
`;