import React, { useContext } from 'react';
import ModalStyle from '../../css/ModalStyle'
import { modalContext, imgContext } from '../../App.js'

const Modal = (props) => {

    const toggleModal = useContext(modalContext).toggleModal;
    const modal = useContext(modalContext).modal;
    const useImgURLIndex = useContext(imgContext).useImgURLIndex;
    const imgURLIndex = useContext(imgContext).imgURLIndex;
    const photoURLs = useContext(imgContext).photoURLs;
    const numberOfPhotos = photoURLs.length;
    const slider = photoURLs.map((_, index) => {
        return <i onClick={() => { useImgURLIndex(index) }} style={{ "color": index == imgURLIndex ? "white" : "grey" }} key={index} className='fas fa-egg'></i>
    })

    return (
        <ModalStyle modal={modal}>
            <div onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if (e.target == e.currentTarget) {
                    toggleModal();
                }
            }} className="background">

                <div className="carousel-slider">
                    <div className='carousel-breadcrumb'>
                        {slider}
                    </div>
                </div>

            </div>
            <button className='image-slide-button left' onClick={() => {
                console.log(imgURLIndex)
                imgURLIndex == 0
                    ? useImgURLIndex(photoURLs.length - 1)
                    : useImgURLIndex(imgURLIndex - 1)
            }}><i className='fas fa-chevron-circle-left'></i></button>

            <img id='modal-content' src={photoURLs[imgURLIndex]} />

            <button className='image-slide-button right' onClick={() => {
                console.log(imgURLIndex)
                imgURLIndex == numberOfPhotos - 1
                    ? useImgURLIndex(0)
                    : useImgURLIndex(imgURLIndex + 1)
            }}><i className='fas fa-chevron-circle-right'></i></button>

            <span className='close-modal' onClick={() => {
                toggleModal()
            }}><i className="fas fa-times-circle"></i></span>

        </ModalStyle>
    )
}

export default Modal;