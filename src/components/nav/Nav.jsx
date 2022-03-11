import React, { useState, useEffect, useLayoutEffect } from "react";
import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#");

  useLayoutEffect(() => {
    console.log(window.scrollY);
    document.addEventListener("scroll", () => {
      if (window.scrollY < 900) {
        setActive("#");
      } else if (window.scrollY > 900 && window.scrollY < 1809) {
        setActive("#about");
      } else if (window.scrollY > 1810 && window.scrollY < 2709) {
        setActive("#experience");
      } else if (window.scrollY > 2710 && window.scrollY < 3609) {
        setActive("#services");
      } else if (window.scrollY > 6210 && window.scrollY < 7209) {
        setActive("#contactme");
      } else {
        setActive("");
      }
    });
  });
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActive("#experience");
        }}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActive("#services");
        }}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contactme"
        onClick={() => {
          setActive("#contactme");
        }}
        className={active === "#contactme" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
