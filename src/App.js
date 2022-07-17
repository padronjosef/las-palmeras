import React, { useEffect } from 'react'
import { Whatsapp, Map } from './components/atoms';
import { Modal, Main, About, Footer, GridImages } from './components/objects';
import { ContextProvider } from './context';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Theme } from './components/style';

function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <ContextProvider>
      <Theme id='theme'>
        <Main />
        <About />
        <GridImages />
        <Map />
        <Footer />
        <Whatsapp />
        <Modal />
      </Theme>
    </ContextProvider>
  );
}

export default App;
