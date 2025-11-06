// import StaggeredMenu from './StaggeredMenu';

import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from '../../assets/LogoBalloons.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import SocialIcons from "./Socials";

type NavLinksT = {
  path: string, 
  label: string
};
type NavigationActive = {isActive: boolean};

export default function NavigationComp(){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggleMenu = (): void => setIsOpen((prev) => !prev);
  const handleLinkClick = (): void => setIsOpen(false);

  const navLinks: NavLinksT[] = [
    {path: '/', label: 'Начало'},
    {path: '/services', label: 'Услуги'},
    {path: '/gallery', label: 'Галерия'},
    {path: '/products', label: 'Продукти'},
  ];



  const scrollToSection = (id: string) => {
      navigate("/", { state: { scrollTo: id } });
      setIsOpen(false);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar-logo logo-image">
          <Link to="/."><img src={logoImg} alt="Logo Image" /></Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar__links">
          {
            navLinks.map(linkEl => <NavLink   
              className={({isActive}: NavigationActive ) =>
                  isActive ? "active-nav" : ""
              }  
              to={linkEl.path} 
              onClick={handleLinkClick}>
                {linkEl.label}
            </NavLink>)
          }
          <a   
            onClick={()=> scrollToSection("contact-section")}
            >
              Контакти
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <aside className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__header">
          {/* Logo */}
          <div className="navbar-logo logo-image">
            <Link onClick={handleLinkClick} to="/."><img src={logoImg} alt="Logo Image" /></Link>
          </div>
          <button
            className="mobile-menu__close"
            onClick={toggleMenu}
            aria-label="Close menu"
            >
              <FaXmark />
          </button>
        </div>

        <div className="mobile-menu__links">

          {
            navLinks.map(linkEl => <NavLink   
              className={({isActive}: NavigationActive ) =>
                  isActive ? "active-nav" : ""
              }  
              to={linkEl.path} 
              onClick={handleLinkClick}>
                {linkEl.label}
            </NavLink>)
          }
          <a  
            onClick={()=> scrollToSection("contact-section")}
            
          >
              Контакти
          </a>
        </div>
        
          <SocialIcons/>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>

    <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          >
        <FaBars />
    </button>
    </>
  );
}
