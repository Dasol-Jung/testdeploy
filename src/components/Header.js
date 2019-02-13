import React from 'react';
import HeaderStyle from '../css/HeaderStyle'

const Header = (props) => {
    const { refs } = props;
    const scrollHandler = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <HeaderStyle className='bright' ref={refs.homeRef}>
            <h1 className='brand'>Celia's Portolio</h1>
            <div className='menu'>
                <ul>
                    <a onClick={() => scrollHandler(refs.homeRef)}><li>Home</li></a>
                    <a onClick={() => scrollHandler(refs.aboutMeRef)}> <li>About me</li></a>
                    <a onClick={() => scrollHandler(refs.contactRef)}> <li>Contact</li></a>
                </ul>
            </div>
        </HeaderStyle>
    )
}

export default Header;