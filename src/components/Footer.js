import React from 'react';
import FooterStyle from '../css/FooterStyle';

const Footer = () => {

    return (
        <FooterStyle className='dark'>
            <div className="copyright">
                Ⓒ 2019 Celia Leon Photography
            </div>
            <ul className='social'>
                <a href='https://www.instagram.com/sealbbb/'><li className="instagram"><i className="fab fa-instagram"></i></li></a>
                <a href='https://www.facebook.com/ooohxiu'><li className="facebook"><i className="fab fa-facebook"></i></li></a>
                <a href='https://www.sealbb.com'><li className="website"><i className="fas fa-blog"></i></li></a>
            </ul>
        </FooterStyle>
    )
}

export default Footer;