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
      title: "Арки за всякакви събития",
      description:
        "Нашите балонени арки са идеалното допълнение за всяко събитие – от сватби и юбилеи до детски партита и корпоративни мероприятия. Те създават красив фон и придават уникално излъчване на всяко място. Съчетаваме различни цветове, форми и стилове, за да създадем перфектната арка, която отразява вашите желания и визия за събитието.",
      img: "https://tinsleytreasures.com/cdn/shop/files/IMG_2513_jpg.jpg?v=1731428931&width=1445",
      color: "#ff6b6b",
    },
    {
      title: "Допълнителна украса с хелий",
      description:
        "Добавете ефирност и стил към вашето събитие с балони, пълни с хелий. Те не само че изглеждат невероятно, но също така могат да летят в пространството, създавайки магическа атмосфера. Балоните с хелий са перфектни за сватби, партита, годишнини и всякакви специални събития.",
      img: "https://www.balloonbutlers.com.au/cdn/shop/products/GoldGreen.webp?v=1667821839",
      color: "#9CAD6F",
      reverse: true,
    },
    {
      title: "Допълнителна декорация",
      description:
        "Независимо дали става дума за сватба, корпоративно събитие или детски рожден ден, ние предлагаме пълна гама от декорации, които ще създадат перфектната атмосфера. Декорациите могат да включват не само балони, но и други елементи, които да придадат изисканост и оригиналност на вашето събитие.",
      img: "https://miamipartydecor.com/wp-content/uploads/balloon-decorating-ideas_0007_balloon-decoration-ideas-for-tables-853x1024.jpg.webp",
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
            Кратко описание на нашите най-търсени предложения.
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
                    Виж още...
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