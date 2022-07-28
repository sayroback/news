import React from "react";
import { Icon } from "./icons/Icon";
import { LogoNav } from "./LogoNav";

export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <nav className="nav">
        <header>
          <div
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="openMenu"
          >
            <Icon className={isOpen ? "menu active" : "menu"}>menu</Icon>
            <Icon className={isOpen ? "close active" : "close"}>close</Icon>
          </div>
          <div className="menu__logo">
            <LogoNav />
          </div>
          <Icon className="search">search</Icon>
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
      <main className={isOpen ? "main active" : "main"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          cumque adipisci tenetur omnis, labore consectetur repudiandae ipsum ad
          amet eligendi iste unde laudantium obcaecati, tempore laboriosam
          officiis fugit illum!
        </p>
      </main>
    </div>
  );
};
