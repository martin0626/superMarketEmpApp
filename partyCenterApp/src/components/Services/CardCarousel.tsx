// import { useState } from "react";
import Slider from "react-slick";
import { type priceCardT } from "./Services";


type cardCarouselPropsT = {
  cards: priceCardT[],
  title: string
}

export default function CardCarousel({cards, title}: cardCarouselPropsT) {

  // const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    customPaging: function(i: any) {
      return (
        <a className={"button-primary-outlined-prices"}>
          {cards[i].btnName}
        </a>
      );
    },
    dots: true,
    // dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <section className="prices-slider-container">
      <h1>{title}</h1>
      <Slider {...settings}>
        {
          cards.map((card, index)=><div
                      key={index}
                      className="package-card-prices"
                    >
                      <div className="package-prices-image">
                        <img src={card.img} alt={card.title} />
                      </div>

                      <div className="package-prices-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <h4>Ценa:</h4>

                        <div className="package-prices-content-price">
                          <p>От <span>{card.price}</span> лв.</p>
                          <p>До <span>{card.price * 2}</span> лв.</p>
                        </div>
                        <button
                          className="button-primary"
                        >
                          Заяви сега
                        </button>
                      </div>
                    </div>
          )
        } 
      </Slider>
    </section>
  );
}
