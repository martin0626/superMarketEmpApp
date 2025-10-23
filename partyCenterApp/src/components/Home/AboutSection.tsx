
export default function AboutSection(){


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-box">
          <img src="https://www.elliesparty.com/cdn/shop/products/pink-rainbow-balloon-arch-ombre-balloon-garland-kit-897306.jpg?v=1684344984" alt="Perfect Kids Party" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Perfect Kids</h2>
          <p className="about-intro">
            We've already done more than{" "}
            <span className="about-highlight">340 #perfectkidsparties</span>. Our main
            clients are kids and we know how to make them happy.
          </p>
          <p className="about-text">
            The company was founded by three moms of little boys and girls aimed to share
            their experience of throwing parties and make parents' lives easier. Alice,
            Robin, and Lucy, three founders of the company, had quite a journey planning
            parties for their children and faced all the possible complications and
            challenges.
          </p>
          <p className="about-text">
            It was not an easy task, so in the end, they had to figure out the easiest way
            for parents to relax while kids are having fun and developed their own methods
            of planning, organizing, and carrying out an original party.
          </p>
          <div className="about-buttons">
            <a onClick={()=> scrollToSection("contact-section")} className="button-primary">
              Contact Us
            </a>
            <a href="#" className="button-primary-outlined">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
