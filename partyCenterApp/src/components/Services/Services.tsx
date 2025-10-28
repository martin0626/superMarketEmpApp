import { title } from "framer-motion/client";
import CardCarousel from "./CardCarousel";
import Pricing from "./Pricing";
import PricingCard from "./PricingCard";


export type priceCardT = {
  title: string,
  btnName: string,
  price: number,
  description: string,
  img: string
}


export default function Services() {

  let cards: priceCardT[] = [
    {
      title: "Малка Арка",
      btnName: "Малка",
      price: 100,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui doloremque architecto deserunt dolorem ut nam reprehenderit eligendi animi natus culpa magnam, id eaque, doloribus aperiam quam maiores sequi sint tenetur.",
      img: 'https://ae01.alicdn.com/kf/S1203565424ea4a788d22cc24ca1ae72bk.jpg_640x640q90.jpg'
    },
    {
      title: "Голяма Арка",
      btnName: "Голяма",
      price: 100,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui doloremque architecto deserunt dolorem ut nam reprehenderit eligendi animi natus culpa magnam, id eaque, doloribus aperiam quam maiores sequi sint tenetur.",
      img: 'https://images.ctfassets.net/77l22z9el0aa/58YaDaZF4Gc2nG6eIXLozF/50d932c299d97b533bd122c3d59446fa/inline_shutterstock.png'
    },
    {
      title: "Кръгла Арка",
      btnName: "Кръгла",
      price: 100,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui doloremque architecto deserunt dolorem ut nam reprehenderit eligendi animi natus culpa magnam, id eaque, doloribus aperiam quam maiores sequi sint tenetur.",
      img: 'https://www.elliesparty.com/cdn/shop/products/boho-safari-balloon-arch-sage-gold-balloon-garland-kit-387987.jpg?v=1687470121&width=1100'
    }
  ]

  return (
    <section className="show-top">
        {/* <Pricing/> */}
        {/* <PricingCard/> */}
        <CardCarousel cards={cards} title={"Нашите Арки"}/>
        <CardCarousel cards={cards} title={"Украса за повод"}/>
    </section>
  );
}