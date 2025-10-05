import HomeImageSlider from "./HomeImageSlider";

export default function Home() {
  let images = [
    'https://images-cdn.ubuy.co.in/639f58719fc91743d11b1d66-abxmas-balloons-arch-garland-kit-90-pcs.jpg', 
    'https://oneupballoons.ca/cdn/shop/files/newyeareve2025balloondecorationvancouveredmontontorontooneupparty.jpg?v=1735351860&width=1445'
  ];

  return (
    <HomeImageSlider images={images} interval={7000}/>
  )
}