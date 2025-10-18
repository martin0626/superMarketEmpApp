import { FaInstagram, FaFacebookSquare  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function ContactHome(){

  return (
     <section className="booking">

      <article className="contacts-container">
        
        <h2>Нашите Контакти</h2>
        <div className="contacts-container-wraper">
          <div className="logo-cont">
            <FaInstagram className="logo-cont-logo"/>
            <p className="logo-cont-text">@TheHappyBalloonss</p>
          </div>

          <div className="logo-cont">
            <FaFacebookSquare className="logo-cont-logo" />
            <p className="logo-cont-text">TheHappyBalloonss</p>
          </div>

          <div className="logo-cont">
            <SiGmail className="logo-cont-logo" />
            <p className="logo-cont-text">TheHappyBalloonss</p>
          </div>
        </div>

      </article>

      {/* <div className="booking-left">
        <h2 className="booking-title">Book Online</h2>
        <p className="booking-description">
          To find out more information, speak to a party expert.
          <br />
          To make a booking, contact us by phone or inquire online.
        </p>

        <div className="booking-info">
          <div className="booking-item">
            <div className="booking-icon">📍</div>
            <div className="booking-details">
              <div className="booking-label">Address</div>
              <div>150 Madison St, Brooklyn, NY 11216, USA</div>
            </div>
          </div>

          <div className="booking-item">
            <div className="booking-icon">📞</div>
            <div className="booking-details">
              <div className="booking-label">Phone</div>
              <div>+1 (234) 567 89 00</div>
              <div>+1 (234) 567 89 01</div>
            </div>
          </div>

          <div className="booking-item">
            <div className="booking-icon">✉️</div>
            <div className="booking-details">
              <div className="booking-label">Email</div>
              <div>supportkids@email.com</div>
              <div>perfectkids@email.com</div>
            </div>
          </div>
        </div>
      </div>

      <form className="booking-form">
        <input type="text" className="booking-input" placeholder="Enter your full name" />
        <input type="tel" className="booking-input" placeholder="Enter your phone number" />
        <input type="email" className="booking-input" placeholder="Enter your e-mail" />
        <input type="number" className="booking-input" placeholder="Amount of children" />
        <input type="date" className="booking-input" />
        <button type="submit" className="booking-button">Send</button>
      </form> */}
    </section>
  );
};

