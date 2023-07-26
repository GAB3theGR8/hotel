import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import DestinationHome from "../HomeSection/Destination/DestinationHome"
import MostPopular from "../HomeSection/Popular/MostPopular"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/work/Works"
import Footer from "../../common/footer/Footer"
import Gallery from "../HomeSection/gallery/Gallery"

const Home = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <HomeAbout />
      <DestinationHome />
      <Download/>
      <Works />
      <Gallery />
    </>
  )
}

export default Home
