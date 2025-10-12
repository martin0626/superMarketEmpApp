import { useState } from "react";





export default function GalleryHome(){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445",
    "https://i.etsystatic.com/23753139/r/il/477d06/3672054672/il_570xN.3672054672_e540.jpg",
    "https://images.squarespace-cdn.com/content/v1/55668890e4b0a63819e5bd65/1723665680396-1ETW91EGY5I1XVG4TAKH/surprise+birthday+balloon+outdoor+organic+arch.jpeg?format=1000w",
    "https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445",
    "https://i.etsystatic.com/23753139/r/il/477d06/3672054672/il_570xN.3672054672_e540.jpg",
    "https://images.squarespace-cdn.com/content/v1/55668890e4b0a63819e5bd65/1723665680396-1ETW91EGY5I1XVG4TAKH/surprise+birthday+balloon+outdoor+organic+arch.jpeg?format=1000w",
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

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Fullscreen view" className="lightbox-image" />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};