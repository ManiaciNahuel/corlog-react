import React, { useState } from "react";
import logo from "../../assets/imgs/header/logo.png";
import logotipo from "../../assets/imgs/header/logotipo.png";

import whatsapp from "../../assets/imgs/header/wapp.png";
import facebook from "../../assets/imgs/header/facebook.png";
import gmail from "../../assets/imgs/header/gmail.png";
import isntagram from "../../assets/imgs/header/instagram.png";

import hamMenu from "../../assets/svg/ham-menu.svg";
import hamMenuClose from "../../assets/svg/ham-menu-close.svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="header__logo-img" />
          </a>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./#home" className="header__link">
                {" "}
                Inicio{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#" className="header__link">
                Seguir envio
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#" className="header__link">
                Cotizar envio
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#section" className="header__link">
                Destinos{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#" className="header__link">
                Ayuda
              </a>
            </li>
          </ul>
          {/* Hamburger menu */}
          <div className="header__main-ham-menu-cont">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? "btn-open" : ""}`}
            >
              <img
                src={isOpen ? hamMenuClose : hamMenu}
                alt="hamburger menu"
                className="header__main-ham-menu "
              />
            </button>
          </div>
        </div>
        <div className="header__socials">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/corlogargentina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={isntagram} alt="" />
              </a>
            </li>
            <li>
              <a
                class="wa1"
                href="https://web.whatsapp.com/send?phone=+5493517335050&text=Hola%20Corlog!%20Quiero%20hacer%20una%20consulta..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="logoWhatsapp" />
              </a>
              {/* <a class="wa2"
                        href="https://api.whatsapp.com/send?phone=+5493517335050&text=Hola%20Corlog!%20Quiero%20hacer%20una%20consulta..."
                        target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="logoWhatsapp" /></a> */}
            </li>
            <li>
              <a
                href="https://www.facebook.com/corlogargentina"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a
                href="mailto:corlogargentina@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmail} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <>
        <div className="header__sm-menu-overlay" onClick={() => setIsOpen(!isOpen)}></div>
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
          <img src={logotipo} alt="logo" className="header__sm-menu-logo"/>
            
            <ul>
              <li>
                <a href="../index.html" className="header__sm-menu-item">
                  Inicio
                </a>
              </li>
              <li>
                <a href="../pages/seguimiento.html" className="header__sm-menu-item">
                  Seguir envío
                </a>
              </li>
              <li>
                {" "}
                <a href="../pages/cotizacion.html" className="header__sm-menu-item">
                  Cotizar envío
                </a>
              </li>
              <li>
                <a href="../pages/destinos.html" className="header__sm-menu-item">
                  Destinos
                </a>
              </li>
              <li>
                <a href="../pages/destinos.html" className="header__sm-menu-item">
                  Nuestras sucursales
                </a>
              </li>
              <li>
                <a href="../pages/ayuda.html" className="header__sm-menu-item">
                  Ayuda
                </a>
              </li>
              <li>
                {" "}
                <a href="../pages/nosotros.html" className="header__sm-menu-item">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="../pages/nosotros.html" className="header__sm-menu-item">
                  Servicios
                </a>
              </li>
              <li>
                <a href="../pages/ayuda.html" className="header__sm-menu-item">
                  Redes
                </a>
              </li>
            </ul>
          </div>
        </div>
        </>
      )}
    </header>
  );
};
