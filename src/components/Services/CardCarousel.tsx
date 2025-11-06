// import { useState } from "react";
import Slider from "react-slick";
import { type priceCardT } from "./Services";
import FlyBalloon from "../FlyBalloon";
import PortalComponent from "../Portal/Portal";
import { useState } from "react";


type cardCarouselPropsT = {
  cards: priceCardT[],
  title: string
}

export default function CardCarousel({cards, title}: cardCarouselPropsT) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <FlyBalloon color={"#fff6f5"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />
      <div className="heading-pricing">
        <h1 className="heading-primary">{title}</h1>
        <p>Посочените цени може да варират в зависимост от конкретните изисквания на клиента.</p>
      </div>
      <Slider {...settings}>
        {
          cards.map((card, index)=><div
                      key={index}
                      className="package-card-prices"
                    >
                      <div className="package-prices-image" onClick={() => setSelectedImage(card.img)}>
                        <img src={card.img} alt={card.title} />
                      </div>

                      <div className="package-prices-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <h4>Ценa:</h4>

                        <div className="package-prices-content-price">
                          <p>От <span>{card.price}</span> {card.priceForPeace ? "лв./бр." : "лв."}</p>
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

      {selectedImage && (
        <PortalComponent>
          <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Fullscreen view" className="lightbox-image" />
          </div>
        </PortalComponent>
      )}
    </section>
  );
}
