import styled from 'styled-components';

const ModalStyle = styled.div `

    .background{
        position : fixed;
        height : 100%;
        width : 100% !important;
        top : 0;
        left : 0;
        background-color : rgba${(props) => { return props.modal ? "(0,0,0,0.7)" : '(0,0,0,0)' }}
    }

    .carousel-slider{
        display : flex;
        align-items : center;
        justify-content : space-between;
        flex-direction : column;
        position : fixed;
        left : 50%;
        bottom : 2.5%;
        transform : translate(-50%, 50%);
        text-align : center;

        .carousel-breadcrumb{
            display : flex;
            justify-content : space-between;
            width : 100%;
            i{
                padding : 0 0.2rem;
                margin : 0 1rem;
                font-size : 0.8rem;
                cursor : pointer;
            }
        }
    }

    .image-slide-button {
        all : unset;
        position : fixed;
        top : 50%;
        transform : translate(-50%,0);
        z-index : 10;
        cursor : pointer;
        :hover{
            color : white;
        }
        i{
            padding : 2px;
        }
    }

    .image-slide-button.right{
        right : 2%;
    }

    .image-slide-button.left{
        left : 2%;
        transform : translateX(50%);

    }

    #modal-content{
        position : fixed;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
        display : block;
        max-width : 90%;
        max-height: 90%;
    }

    .close-modal{
        position : fixed;
        color : black;
        top : 2%;
        right : 2%;
        i{
            cursor : pointer;
        }
    }

    @media only screen and (max-width : 768px){
        #modal-content{
            position : fixed;
            top : 50%;
            left : 50%;
            transform : translate(-50%, -50%);
            display : block;
            max-width : 95%;
        }

    }

`;

export default ModalStyle;