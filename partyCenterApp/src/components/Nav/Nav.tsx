// import StaggeredMenu from './StaggeredMenu';

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from '../../assets/LogoBalloons.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import SocialIcons from "./Socials";


type NavigationActive = {isActive: boolean};

export default function NavigationComp(){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = (): void => setIsOpen((prev) => !prev);

  const handleLinkClick = (): void => setIsOpen(false);

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
          <img src={logoImg} alt="Logo Image" />
        </div>

        {/* Desktop Links */}
        <div className="navbar__links">
          <NavLink   
            className={({isActive}: NavigationActive ) =>
                isActive ? "active-nav" : ""
            }  
            to="/" 
            onClick={handleLinkClick}>
              Начало
          </NavLink>
          <NavLink   
            className={({isActive}: NavigationActive ) =>
                isActive ? "active-nav" : ""
            }  
            to="/gallery" 
            onClick={handleLinkClick}>
              Галерия
          </NavLink>
          <a   
            onClick={()=> scrollToSection("contact-section")}>
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
            <img src={logoImg} alt="Logo Image" />
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
          <NavLink   
            className={({isActive}: NavigationActive ) =>
                isActive ? "active-nav" : ""
            }  
            to="/" 
            onClick={handleLinkClick}>
              Начало
          </NavLink>
          <NavLink   
            className={({isActive}: NavigationActive ) =>
                isActive ? "active-nav" : ""
            }  
            to="/gallery" 
            onClick={handleLinkClick}>
              Галерия
          </NavLink>
          <a  
            onClick={()=> scrollToSection("contact-section")}>
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
