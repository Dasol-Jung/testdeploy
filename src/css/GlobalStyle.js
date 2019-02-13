import {
  createGlobalStyle
} from 'styled-components';


const GlobalStyle = createGlobalStyle `

    @import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Ubuntu|Playfair+Display');

    html, body{
      *{
        overflow-y : hidden;
      }
      overflow-x : hidden;
      margin : 0;
      font-family : "Ubuntu", sans-serif;
    }
    
    .bright{
        background-color : #ffe0f3;
    }

    .dark{
        background-color : #2d2b2b;
        color : white;
    } 
    
    .container{
      position : relative;
      filter : blur(${(props) => { return props.modal ? "50px" : '0' }});
    }

    @media only screen and (max-width : 768px){
      html{
        font-size : 14px;
      }
    }

    @media only screen and (max-width : 320px){
      html{
        font-size : 11px;
      }
    }
`

export default GlobalStyle;