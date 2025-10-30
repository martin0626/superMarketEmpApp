import { Link } from "react-router-dom";
import FlyBalloon from "../FlyBalloon";
import AnimatedOnScroll from "../Global/AnimationOnScroll";



type DecaorationDescriptionT = {
    title: string,
    description:string,
    img: string,
    color: string,
    reverse?: boolean
}

export default function DecorationTypes(){
  const packages: DecaorationDescriptionT[] = [
    {
      title: "Back to Classics",
      description:
        "Classics are proven with time and generations and never get old, no matter how much smartphones and social media conquer kids’ minds. Amazing music, designed themes, and active games have been the main ingredients of a fun party for many centuries and generations.",
      img: "https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445",
      color: "#ff6b6b",
    },
    {
      title: "Deluxe Party",
      description:
        "Deluxe Party is a great option for those who do not settle for less. If you want to go all the way in for your kid’s holiday, that’s exactly the option for you. Your kid’s favorite heroes, rare themes, and multi-level quests and games – and it’s not even a full list yet.",
      img: "https://i.etsystatic.com/23753139/r/il/477d06/3672054672/il_570xN.3672054672_e540.jpg",
      color: "#9CAD6F",
      reverse: true,
    },
    {
      title: "Ultimate Party",
      description:
        "The Ultimate Party is the pinnacle of celebration! Perfect for larger groups and unforgettable experiences with top-tier activities, performances, and full customization for every detail.",
      img: "https://i.pinimg.com/736x/44/4c/b6/444cb60fb413c4c9aa8d983eacf494f9.jpg",
      color: "#f9b233",
    },
  ];

  return (
    <section className="packages">
      <FlyBalloon color={"#fff6f5"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#E4A894"} size={60} left={"50%"} />
      <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />
      <div className="packages-container">
        <div className="packages-header">
          <h2 className="packages-title heading-primary">Нашите предложения</h2>
          <div className="packages-divider" />
          <p className="packages-subtitle">
            Here’s a short description of the available packages.
          </p>
        </div>

        <div className="packages-list">
          {packages.map((item, index) => (
             <AnimatedOnScroll animation={item.reverse ? "fade-left" : "fade-right"} delay={100}>
              <div
                key={index}
                className={`package-card ${item.reverse ? "reverse" : ""}`}
              >
                <div className="package-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="package-content">
                  <h3  style={{ color: item.color }}>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link 
                    to='/services'
                    className="package-btn"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedOnScroll>

          ))}
        </div>
      </div>
    </section>
  );
};