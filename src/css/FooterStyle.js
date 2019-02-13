import styled from 'styled-components';

const FooterStyle = styled.footer `

    text-align : center;
    .copyright {
        margin: 0.5rem 0;
        font-size : 0.5rem;
    }

    .social{
        display : flex;
        justify-content : center;
        align-items : center;
        list-style : none;
        height : 2rem;
        margin : 0;
        padding : 0;

        a{
            margin : 1rem;
            font-size: 1.3rem;

            :visited{
                color : white;
            }
            :hover{
                color : #db8ecd;
            }
        }
    }

`;

export default FooterStyle;