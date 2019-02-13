import styled from 'styled-components';

const HeaderStyle = styled.header `
    
    padding : 0.8rem 2rem 1.3rem 2rem;
    position : sticky;
    top : 0;
    background-color : white;
    z-index : 2;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    align-items : center;

    .brand{
        cursor : pointer;
        font-family : 'Playfair Display';
        font-style : italic;
        margin : 0;
        font-size : 3.5rem;
        justify-self : flex-start;
        width : 100%;
        :hover{
            color : #200553;
        }
    }

    .menu{ 

        ul{
            float : right;
            list-style :none;
            display : flex;
            font-size : 1rem;
            padding : 0;

            li{
                margin : 0 1rem;
            }

            a{
                display :inline-block;
                cursor : pointer;
                :hover{
                    li{
                        text-shadow : 0.3px 0.3px 0px linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(105,9,121,1) 55%, rgba(89,0,255,1) 100%);
                        background : linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(105,9,121,1) 55%, rgba(89,0,255,1) 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                }
            }
        }
    }

    @media only screen and (max-width : 768px){
        .filler, .menu {
            display : none;
        }
        grid-template-columns : repeat(1, 1fr);
        .brand{
            text-align : center;
        }
    }
`;

export default HeaderStyle;