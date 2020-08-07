import React from 'react';
import Menu from './components/Menu';
import inicialData from './components/Data/inicialData.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={inicialData.categorias[0].videos[0].title}
        url={inicialData.categorias[0].videos[0].url}
        videoDescription={"O que eh front-end"}
      />

      <Carousel 
      ignoreFirstVideo
      category={inicialData.categorias[0]}
      />

      <Carousel 
      ignoreFirstVideo
      category={inicialData.categorias[1]}
      />

      <Carousel 
      ignoreFirstVideo
      category={inicialData.categorias[2]}
      />

      <Carousel 
      ignoreFirstVideo
      category={inicialData.categorias[3]}
      />

      <Footer />

    </div>
  );
}

export default App;
