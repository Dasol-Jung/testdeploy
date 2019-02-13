import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import GlobalStyle from './css/GlobalStyle'
import Modal from './components/helper/Modal'

const App = () => {

  const [modal, toggleModal] = useState(false);
  const [imgURLIndex, useImgURLIndex] = useState();
  const photoURLs = [];
  for (let i = 0; i < 9; i++) {
    photoURLs.push(`/images/${i}-min.jpg`);
  }
  const homeRef = React.createRef();
  const aboutMeRef = React.createRef();
  const contactRef = React.createRef();
  const refs = {
    homeRef: homeRef,
    aboutMeRef: aboutMeRef,
    contactRef: contactRef
  }

  return (
    <modalContext.Provider value={{ modal: modal, toggleModal: toggleModal }}>
      <imgContext.Provider value={{ imgURLIndex: imgURLIndex, useImgURLIndex: useImgURLIndex, photoURLs: photoURLs }}>
        <GlobalStyle modal={modal} />
        <div className='container'>
          <Header refs={refs} ></Header>
          <Main refs={refs}> </Main>
          <Footer></Footer>
        </div>
        {modal ? <Modal /> : null}
      </imgContext.Provider>
    </modalContext.Provider>);
}

export default App;
export const modalContext = React.createContext();
export const imgContext = React.createContext();