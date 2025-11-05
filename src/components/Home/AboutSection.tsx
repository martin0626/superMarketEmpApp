import FlyBalloon from "../FlyBalloon";

export default function AboutSection(){


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="about anim-fade-up">

      <FlyBalloon color={"#C288FF"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#ff6b6b"} size={60} left={"50%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />
      <div className="about-container">
        <div className="about-image-box">
          <img src="https://www.elliesparty.com/cdn/shop/products/pink-rainbow-balloon-arch-ombre-balloon-garland-kit-897306.jpg?v=1684344984" alt="Perfect Kids Party" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Ние сме Щастливите Балони</h2>
          <p className="about-intro">
            Ние сме семеен бизнес, специализиран в създаването на уникални и стилни балонни декорации за всякакви събития като рождени дни, 
            детски партита, фирмени тържества и други специални поводи. Работим в <span className="about-highlight">района на София и околните области</span>, като предлагаме разнообразие от балонни арки, гирлянди, 
            букви и индивидуални декорации, които могат да бъдат персонализирани според вашите желания и темата на събитието.
            . Нашите украси от балони придават специално настроение на всеки повод!
          </p>

          <p className="about-intro">
            Всяка поръчка получава специално внимание и креативен подход, за да осигурим бързо, качествено и надеждно обслужване. 
            Ние не просто украсяваме – ние създаваме спомени и неповторима атмосфера, които ще бъдат запомнени дълго след като събитието е приключило.
          </p>
          
          <div className="about-buttons">
            <a onClick={()=> scrollToSection("contact-section")} className="button-primary">
              Свържете се с нас
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};
