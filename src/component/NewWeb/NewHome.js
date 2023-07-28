
import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar';
import DarkCarousel from './DarkCarousel';
import CardBox from './CardBox';
import Parallaxcard from './Prallaxcard';
import ExploreHalwa from './ExploreHalwa';
import Gallery from './Gallery';
import Footer from '../../page/Footer';

function NewHome() {
  return (
    <div>
      <ResponsiveAppBar/>
      <DarkCarousel/>
      <CardBox/>
      <ExploreHalwa/>
      <Parallaxcard/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default NewHome
