import FlyBalloon from "../FlyBalloon";
import AnimatedOnScroll from "../Global/AnimationOnScroll";
import SocialIcons from "../Nav/Socials";


export default function ContactHome(){
  return (
     <section className="booking" id="contact-section">
      <FlyBalloon color={"#fff6f5"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#E4A894"} size={60} left={"50%"} />
      <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />

      <section className="contact contact-section">
        <AnimatedOnScroll delay={300} animation ="fade-right">
          <SocialIcons/>
        </AnimatedOnScroll>
        
        <div className="contact-left">
          <AnimatedOnScroll delay={200}>
            <h1 className="contact-title">Let’s Plan Your Perfect Party!</h1>
            <p className="contact-subtitle">
              We’d love to hear your ideas — fill out the form and we’ll get in touch
              to make your celebration unforgettable.
            </p>
          </AnimatedOnScroll>
        </div>

        <AnimatedOnScroll delay={200} animation ="fade-right">
          <form className="contact-form">
              <div className="contact-field">
                <label htmlFor="email">Имейл*</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Телефон (optional)</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="contact-field">
                <label htmlFor="description">Допълнителна информация (optional)</label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell us about your event..."
                  
                ></textarea>
              </div>

              <button type="submit" className="button-primary">
                Send Message
              </button>
          </form>
        </AnimatedOnScroll>

      </section>
    </section>
  );
};

