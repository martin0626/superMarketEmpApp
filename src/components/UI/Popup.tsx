import  { useEffect, useRef } from "react";
import Slider from "react-slick";

interface ImageSliderModalProps {
  selectedImage: string;
  images: string[];
  onClose: () => void;
}

export default function PopupImageSlider({
  selectedImage,
  images,
  onClose,
}: ImageSliderModalProps) {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const index = images.indexOf(selectedImage);
    if (index >= 0 && sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  }, [selectedImage, images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };


  return (
    <div className="slider slider-backdrop" onClick={onClose}>
      <div
        className="slider slider-container"
        onClick={(e) => e.stopPropagation()}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="slider slider-slide">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="slider slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <button className="slider slider-closeButton" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

