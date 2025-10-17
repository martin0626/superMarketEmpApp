import AboutSection from "./AboutSection";
import DecorationTypes from "./DecorationsType";
import HomeImageSlider from "./HomeImageSlider";
import Pricing from "./Pricing";
import GalleryHome from "./GalleryHome";
import ContactHome from "./ContactHome";

export default function Home() {
  let images = [
    'https://images-cdn.ubuy.co.in/639f58719fc91743d11b1d66-abxmas-balloons-arch-garland-kit-90-pcs.jpg', 
    'https://oneupballoons.ca/cdn/shop/files/newyeareve2025balloondecorationvancouveredmontontorontooneupparty.jpg?v=1735351860&width=1445'
  ];

  return (
    <section className="main-home-page">
      <HomeImageSlider images={images} interval={7000}/>
      <AboutSection/>
      <GalleryHome/>
      {/* Currentttly No Needed */}
      {/* <Pricing/> */}
      <DecorationTypes/>
      <ContactHome/>
    </section>    
  )
}