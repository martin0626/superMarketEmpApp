import AboutSection from "./AboutSection";
import DecorationTypes from "./DecorationsType";
import HomeImageSlider from "./HomeImageSlider";
import GalleryHome from "./GalleryHome";
import ContactHome from "./ContactHome";
import AnimatedOnScroll from "../Global/AnimationOnScroll";

export default function Home() {
  let images = [
    'https://images-cdn.ubuy.co.in/639f58719fc91743d11b1d66-abxmas-balloons-arch-garland-kit-90-pcs.jpg', 
    'https://oneupballoons.ca/cdn/shop/files/newyeareve2025balloondecorationvancouveredmontontorontooneupparty.jpg?v=1735351860&width=1445'
  ];

  return (
    <section className="main-home-page show-left">
      <HomeImageSlider images={images} interval={7000}/>
      <AnimatedOnScroll animation="fade-up" delay={100}>
        <AboutSection />
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fade-up" delay={100}>
        <GalleryHome />
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fade-up" delay={100}>
        <DecorationTypes />
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fade-up" delay={100}>
        <ContactHome />
      </AnimatedOnScroll>
    </section>    
  )
}