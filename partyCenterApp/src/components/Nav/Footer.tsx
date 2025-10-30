import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from '../../assets/LogoBalloons-NoBG.png'
import AnimatedOnScroll from "../Global/AnimationOnScroll";


export default function Footer(){
    const navigate = useNavigate();


    const scrollToSection = (id: string) => {
      navigate("/", { state: { scrollTo: id } });
    };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
            <img src={logoImg} alt="developer logo" />
        </div>

        <AnimatedOnScroll delay={50} animation ="fade-up">
          <ul className="footer-nav">
            <NavLink to='/'>Начало</NavLink>
            <NavLink to='/services'>Услуги</NavLink>
            <NavLink to='/gallery'>Галерия</NavLink>
            <a onClick={()=>scrollToSection('contact-section')}>Контакти</a>
          </ul>
        </AnimatedOnScroll>
      </div>

      <AnimatedOnScroll delay={200} animation ="fade-up">
        <div className="footer-socials">
          <a className="footer-icon" href="https://www.instagram.com/thehappyballoonss/" target="__blank"><FaInstagram /></a>
          <a className="footer-icon" href="https://www.facebook.com/" target="__blank"><FaFacebookF /></a>
          <a className="footer-icon" href="mailto:someone@example.com" target="__blank"><SiGmail /></a>
          <a className="footer-icon" target="__blank"><FaPhoneAlt /></a>
        </div>
      </AnimatedOnScroll>

      <div className="footer-bottom">
        <p>© 2025 Happy Balloons – агенция за украса и декорация с балони. Всички права запазени.</p>
        <p className="footer-dev">
          Уеб дизайн и разработка: <a href="https://martin-portfolio-pr.netlify.app/" target="__blank">M</a>
        </p>
      </div>
    </footer>
  );
};
