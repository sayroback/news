import Image from "next/image";
import React from "react";
import FotoUsuario from "../public/user.jpeg";

export const User = () => {
  return (
    <div className="user">
      <figure className="user__img-container">
        <Image src={FotoUsuario} alt="usuario" />
      </figure>
      <div>
        <p className="user__name">Luis Alfonso</p>
        <small className="user__role">Autor</small>
      </div>
    </div>
  );
};
