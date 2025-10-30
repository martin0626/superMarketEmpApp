import { useState } from "react";
import { NavLink } from "react-router-dom";
import PortalComponent from "../Portal/Portal";
import FlyBalloon from "../FlyBalloon";


type GalleryImagesT = [string, string][];

export default function GalleryHome(){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: GalleryImagesT = [
    [ 
      "https://images.squarespace-cdn.com/content/v1/55668890e4b0a63819e5bd65/1723665680396-1ETW91EGY5I1XVG4TAKH/surprise+birthday+balloon+outdoor+organic+arch.jpeg?format=1000w",
      "https://i.etsystatic.com/23753139/r/il/477d06/3672054672/il_570xN.3672054672_e540.jpg"
    ],
    [
      "https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445",
      "https://cdn.shopify.com/s/files/1/0508/6576/6572/files/Outdoor_Themed_party_decor_balloons.jpg?v=1677618733"
    ],
    [
      "https://www.jellybeanparty.sg/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-13-at-3.23.01-PM-scaled.jpeg", 
      "https://forbetterforworse.co.uk/wp-content/uploads/2022/07/1.-Romantic-Sign.png"
    ],
  ];

  

  return (
    <section className="gallery">
      <FlyBalloon color={"#fff6f5"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#E4A894"} size={60} left={"50%"} />
      <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />
      <div className="gallery-container">
        <div className="gallery-header ">
          <h2 className="gallery-title heading-primary">Галерия</h2>
          <div className="gallery-divider" />
          <p className="gallery-subtitle">
            Нашите събития винаги са шарени и красиви.
          </p>
        </div>

        <article className="gallery-images">

            {images.map((src, index) => (
              <div className={`gallery-two-items-group-${index}`}>
                <div
                  key={index}
                  className="gallery-item-1"
                  onClick={() => setSelectedImage(src[0])}
                >
                  <img src={src[0]} alt={`Gallery ${index + 1}`} />
                </div>
                <div
                  key={index}
                  className="gallery-item-2"
                  onClick={() => setSelectedImage(src[1])}
                >
                  <img src={src[1]} alt={`Gallery ${index + 1}`} />
                </div>
              </div>
            ))}
             
        </article>
        <NavLink to="/gallery" style={{marginTop: "4rem"}} className="button-white">
          Виж още...
        </NavLink>
        {selectedImage && (
          <PortalComponent>
            <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Fullscreen view" className="lightbox-image" />
            </div>
          </PortalComponent>
        )}
      </div>
    </section>
  );
};