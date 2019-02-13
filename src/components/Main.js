import React, { useContext, useEffect, useState } from 'react';
import MainStyle from '../css/MainStyle'
import { modalContext, imgContext } from '../App.js'
import { CSSTransition } from 'react-transition-group';

const Main = (props) => {

    const [scrollAboutMe, useScrollAboutMe] = useState(false)
    const { refs } = props;
    const toggleModal = useContext(modalContext).toggleModal;
    const modal = useContext(modalContext).modal;
    const useImgURLIndex = useContext(imgContext).useImgURLIndex;
    const photoURLs = useContext(imgContext).photoURLs;
    const [imgSide, useImgSide] = useState();
    const imgRef = React.createRef()

    const Images = photoURLs.map((URL, index) => {
        return <img key={index} style={{ height: imgSide + 'px' }} ref={imgRef} src={URL} onClick={() => {
            toggleModal(!modal);
            useImgURLIndex(index);
        }} />
    })

    useEffect(() => {

        const saveRef = imgRef.current;

        let pull = function () {
            let current = refs.aboutMeRef.current;
            if (current) {
                let { y, height } = current.getBoundingClientRect();

                if ((height - y) / height > 0.5) {
                    useScrollAboutMe(true);
                    document.removeEventListener('scroll', pull);
                }
            }
        }

        function checkWindowSize() {
            return window.innerWidth;
        }

        document.addEventListener('scroll', (e) => pull());

        window.addEventListener('load', () => {
            useImgSide(imgRef.current ? imgRef.current.offsetWidth : null);
        })

        window.addEventListener('resize', () => {

            useImgSide(saveRef.offsetWidth);
        })

        document.addEventListener('mouseleave', () => {

            let currentSize = checkWindowSize();
            let checkSizeChange = setInterval(() => {
                if (currentSize != checkWindowSize()) {
                    useImgSide(saveRef.offsetWidth);
                }
            }, 100);
            document.addEventListener('mouseenter', () => {
                clearInterval(checkSizeChange);
            })
        })
    })

    return (
        <MainStyle>
            <section side={imgSide} className="bright gallery">
                {Images}
            </section>

            <section className="about-me dark" ref={refs.aboutMeRef}>
                <div className="avatar">
                    <h1>Celia Leon</h1>
                </div>
                <CSSTransition
                    in={scrollAboutMe}
                    exit
                    timeout={{ enter: 500, exit: 200 }}
                    classNames='scroll'
                >
                    <div className="description">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex a quod et atque beatae veniam expedita
                        . Quia voluptas reiciendis nulla harum est fugit porro officiis, rem aspernatur quos ab! Quia.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nesciunt, facere vitae doloremque voluptatibus saepe tempore.Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Cum, provident illum eveniet quia tenetur animi?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex a quod et atque beatae veniam expedita
                        . Quia voluptas reiciendis nulla harum est fugit porro officiis, rem aspernatur quos ab! Quia.Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nesciunt, facere vitae doloremque voluptatibus saepe tempore.Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Cum, provident illum eveniet quia tenetur animi?</p>
                    </div>
                </CSSTransition>
            </section>

            <section className='bright contact' ref={refs.contactRef}>
                <div className="contact-info">
                    <div className="email">
                        <a><i className='far fa-envelope'></i>sarang.celia@gmail</a>
                    </div>
                    <div className="rates">
                        <ul>
                            <li>Studio Photo : 20/hr</li>
                            <li>Outdoor : 25/hr</li>
                            <li>IDK : 25/hr</li>
                        </ul>
                    </div>
                </div>
            </section>
        </MainStyle >
    )
}

export default Main;