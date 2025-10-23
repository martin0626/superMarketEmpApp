import { FaInstagram, FaFacebookSquare, FaPhoneSquareAlt  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialIcons from "../Nav/Socials";


export default function ContactHome(){

  return (
     <section className="booking" id="contact-section">
      <section className="contact contact-section">
        <SocialIcons/>
        <div className="contact-left">
          <h1 className="contact-title">Let’s Plan Your Perfect Party!</h1>
          <p className="contact-subtitle">
            We’d love to hear your ideas — fill out the form and we’ll get in touch
            to make your celebration unforgettable.
          </p>
        </div>

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
      </section>
    </section>
  );
};

