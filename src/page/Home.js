import React from 'react'
import Navigation from '../component/Navbar'
import Frontpagecard from './card/Frontpagecard'
import Aboutcard from './card/Aboutcard'
import Explorecard from './card/Explorecard'
import Reviewcard from './card/Reviewcard'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navigation/>
      <Frontpagecard/>
      <Aboutcard/>
      <Explorecard/>
      <Reviewcard/>
      <Footer/>
    </div>
  )
}

export default Home
