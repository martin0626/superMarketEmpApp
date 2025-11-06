import CardCarousel from "./CardCarousel";


export type priceCardT = {
  title: string,
  btnName: string,
  price: number,
  description: string,
  priceForPeace?: true, 
  img: string
}


export default function Services() {

  let arcs: priceCardT[] = [
    {
      title: "Малка Арка",
      btnName: "Малка",
      price: 100,
      description: "Малката арка е идеалният избор за събития като детски рожден ден, погача или малка годишнина. Тя предлага елегантна и дискретна украса, която добавя стил, без да заема много пространство.",
      img: 'https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445'
    },
    {
      title: "Голяма Арка",
      btnName: "Голяма",
      price: 150,
      description: "Голямата арка е перфектна за сватби, юбилеи или големи корпоративни събития, където искате да създадете забележителен визуален ефект. Със своите по-големи размери и впечатляваща форма тя ще бъде основен акцент в декорацията на събитието.",
      img: 'https://images.ctfassets.net/77l22z9el0aa/58YaDaZF4Gc2nG6eIXLozF/50d932c299d97b533bd122c3d59446fa/inline_shutterstock.png'
    },
    {
      title: "Кръгла Арка",
      btnName: "Кръгла",
      price: 150,
      description: "Кръглата арка придава елегантност и стил на всяко събитие. Често използвана на сватби, годишнини или специални тържества, тя символизира безкрайността и съвършенството. Отличава се със своето изчистено и модерно излъчване, което я прави чудесен фон за снимки и моменти на празника.",
      img: 'https://www.elliesparty.com/cdn/shop/products/boho-safari-balloon-arch-sage-gold-balloon-garland-kit-387987.jpg?v=1687470121&width=1100'
    }
  ]


  let deocorations: priceCardT[] = [
    
    {
      title: "Балони с хелий",
      btnName: "Хелий",
      price: 5,
      priceForPeace: true,
      description: "Балоните с хелий са чудесен начин да добавите динамика и лекота към всяко събитие. Те могат да бъдат разположени в пространството, да летят високо във въздуха или да създадат специален акцент за вашето тържество. Перфектни са за всякакъв тип събития.",
      img: 'https://www.prettymyparty.com/wp-content/uploads/2017/06/DIY-balloon-tassel-garlands.jpeg'
    },
    {
      title: "Декорации за събития",
      btnName: "Декорация",
      price: 2,
      priceForPeace: true,
      description: "Независимо дали става дума за сватба, корпоративно събитие или детски рожден ден, ние предлагаме пълна гама от декорации, които ще създадат перфектната атмосфера. Декорациите могат да включват не само балони, но и други елементи, които да придадат изисканост и оригиналност на вашето събитие.",
      img: 'https://www.balloonsgalore.net.au/wp-content/uploads/2025/04/1000000100-scaled.jpg'
    }
  ]

  return (
    <section className="show-top">
        {/* <Pricing/> */}
        {/* <PricingCard/> */}
        <CardCarousel cards={arcs} title={"Нашите Арки"}/>
        <CardCarousel cards={deocorations} title={"Украси"}/>
    </section>
  );
}