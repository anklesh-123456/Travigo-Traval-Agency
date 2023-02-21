import React from 'react';
import {Navbar, Hero, Footer, Memory, Explore, Advertise, Banner, Newsletter} from './components';
import Pricings from './components/Pricings';
import { hero, memory, navlinks, placesAPI,brands, pricingapi, bannerAPI, footerAPI} from './data/travigodata';


const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Advertise brands={brands}/>
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <Newsletter/>
      <Footer footerAPI={footerAPI}/>
    </>
  );
};

export default App;
