import React, { useState } from "react";
import { Icon } from "./icons/Icon";
import { LogoNav } from "./LogoNav";

export const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className="nav">
        <header>
          <div
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="openMenu"
          >
            <Icon className={isOpen ? "menu active" : "menu"} icon="menu" />
            <Icon
              className={isOpen ? "menu close active" : "menu close"}
              icon="close"
            />
          </div>
          <div className="menu__logo">
            <LogoNav />
          </div>
          <Icon className="search" icon="search" />
        </header>

        <div className={isOpen ? "nav__menu active" : "nav__menu"}>
          <ul>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">LinkedIn</a>
            </li>
            <li>
              <a href="./">About Me</a>
            </li>
            <li>
              <a href="./">Source Code</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
