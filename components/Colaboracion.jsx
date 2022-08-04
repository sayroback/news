import Image from "next/image";
import React from "react";
import sitiowebconstruccion from "../public/sitio-web-construccion.jpg";

export const Colaboracion = () => {
  return (
    <div>
      <Image
        src={sitiowebconstruccion}
        width={200}
        height={200}
        alt="En construcción"
      />
      <p>
        Hola, estoy iniciando un nuevo proyecto en el que buscó fortalecer mis
        conocimientos en la accesibilidad para usuarios WEB desde el Frontend.
        El proyecto estará abierto a cualquiera que desee participar.
      </p>
      <p>
        Es una Revista digital. #frontend El objetivo principal es crear una
        plataforma opensource en la que se experimente con diferentes formas de
        volver accesible o innovador el consumo de texto por internet.
      </p>
      <p>
        La prioridad es la accesibilidad y opte por un diseño típico. Pero si lo
        quieres manda tus propuestas y trabajemos juntos. Se está desarrollando
        en NextJS.
      </p>
      <a href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993/">
        <h1>Contáctame en LinkedIn </h1>
      </a>
      <a href="https://www.figma.com/file/yBuLsGbTqXNAX4cd4kqWRV/Blog?node-id=0%3A1">
        <p>El diseño esta en figma</p>
      </a>
      <a href="https://github.com/sayroback/news">
        <p>El repositorio esta publico en GitHub</p>
      </a>
    </div>
  );
};
