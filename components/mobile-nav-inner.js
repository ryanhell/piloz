import React from "react";
import closeIcon from "@images/shapes/close-1-1.png";
import NavLinksInner from "@components/header/nav-links-inner";

const MobileNavInner = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={closeIcon} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinksInner />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
            Call or email.{" "}
          </p>
          <p>
            <a href="mailto:ryanbrooklyn2020@gmail.com">email</a> <br />{" "}
            <a href="tel:267-777-2344">call</a>
          </p>
          <div className="side-menu__social">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavInner;
