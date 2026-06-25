import React, { useState } from "react";
import { NavBar, NavLinks, LogoWrapper, Hamburger, CloseIcon } from "./styles";

const Nav = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar>
      <LogoWrapper>
        <a href="/">
          <img
            src="/images/Gulf Texas Medical Logo.png"
            alt="Gulf Texas Medical Supply"
          />
        </a>
      </LogoWrapper>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <div />}
      </Hamburger>

      <NavLinks className={isOpen ? "open" : ""}>
        <li>
          <a href="/" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
      
        <li>
          <a href="/contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;