import { FaInstagram, FaFacebookSquare, FaPhoneSquareAlt  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SocialIcons(){
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/thehappyballoonss/"
        className="social-icons__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://www.facebook.com/" 
        className="social-icons__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="mailto:someone@example.com" 
        className="social-icons__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail />
      </a>
      <a
        href="https://t.me/username"
        className="social-icons__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneSquareAlt />
      </a>
    </div>
  );
};