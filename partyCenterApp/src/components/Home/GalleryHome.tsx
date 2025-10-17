import { useState } from "react";


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
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Gallery</h2>
          <div className="gallery-divider" />
          <p className="gallery-subtitle">
            Our parties are always bright and fun.
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

        {selectedImage && (
          <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Fullscreen view" className="lightbox-image" />
            {/* <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button> */}
          </div>
        )}
      </div>
    </section>
  );
};