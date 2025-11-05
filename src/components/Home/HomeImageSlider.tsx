import { useEffect, useState } from "react";
import FlyBalloon from "../FlyBalloon";

type SlideshowProps=  {
  images: string[];
  interval?: number; // ms between slides
}

export default function HomeImageSlider({ images, interval = 5000 }: SlideshowProps){
const [current, setCurrent] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // Auto change slides
    useEffect(() => {

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
        
    }, [images.length, interval]);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Text motion 
    const textOffset = Math.min(scrollY * 0.3, 150); // move up to 150px

    return (
    <section className="slideshow">
        <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
        <FlyBalloon color={"#E4A894"} size={60} left={"50%"} />
        <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
        {images.map((img, index) => (
        <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
        />
        ))}

        <div className="slideshow-overlay">
        <div
            className="slideshow-text"
            style={{
            transform: `translateY(-${textOffset}px)`,
            }}
        >
            <h1 className="slideshow-title">Щастливите Балони</h1>
            <p className="slideshow-subtitle">
                Магия от балони за всеки повод!
            </p>
        </div>
        </div>
    </section>
    );
};
