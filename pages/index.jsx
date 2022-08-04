import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Hero } from "../components/Hero";
import { LogoNav } from "../components/LogoNav";
import { Nav } from "../components/Nav";
import { PopularArticles } from "../components/PopularArticles";
import sitiowebconstruccion from "../public/sitio-web-construccion.jpg";

const news1 = "https://i.ibb.co/H21GBGk/news2.jpg";

const Main = styled.div`
  background-image: url(${news1});
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="hero__logo">
        <LogoNav />
      </div>
      <div className={isOpen ? "main--mobile active" : "main--mobile"}>
        <Main className="main">
          <Hero />
        </Main>
        <PopularArticles />
      </div>
      <Image src={sitiowebconstruccion} alt="En construcción" />
    </>
  );
}
