import styled from 'styled-components';

const MainStyle = styled.div `

    .gallery{

        display : grid;
        grid-template-columns : repeat(4,auto);

        img{
            cursor : pointer;
            width : 100%;
            margin : 0;
            padding : 0;
            display : block;
            object-fit : cover;
            :hover{
                box-shadow : 0 2px 5px 2px rgba(0,0,0,0.4);
                opacity : 0.8;
            }
        }

    }  

    .about-me{

        height : 100vh;
        display : grid;
        grid-template-columns : 1fr 1fr;

        .avatar{
            display : flex;
            justify-content : center;
            align-items : center;
        }

        .description{
            opacity : 0;
            transform : translate3d(100%, 0, 0);
            padding : 1rem 3rem;
            display : flex;
            flex-direction : column;
            justify-content : center;
        }

        .scroll-enter-active{
            opacity : 1;
            transform : translate3d(0, 0, 0);
            transition : all 500ms ease-out;
        }
    
        .scroll-enter-done{
            opacity : 1;
            transform : translate3d(0, 0, 0);
        }

        .scroll-exit{
            transform : translate3d(0, 0, 0);
        }
    
        .scroll-exit-active{
            transform : translate3d(0, 0, 0);
        }

        .scroll-exit-done{
            transition : all 300ms ease-out;
            transform : translate3d(100%, 0, 0);
        }

    }

    .contact{
        height : 100vh;
        display : grid;
        align-items : center;
        .contact-info{
            font-size : 2rem;
            margin : auto;
            display :grid;
            grid-template-columns : repeat(2, minmax(300px, 1fr));
            align-items : center;
            li{
                list-style : none;
            }
        }
    }

    @media only screen and (max-width : 768px){
        padding : 0;
        .gallery{
            grid-template-columns : repeat(auto-fit,100%);
        }
    }
`;

export default MainStyle;