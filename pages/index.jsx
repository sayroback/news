import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Hero } from "../components/Hero";
import { LogoNav } from "../components/LogoNav";
import { Nav } from "../components/Nav";
import { PopularArticles } from "../components/PopularArticles";

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
      <Main className="main--mobile">
        <div className={isOpen ? "main active" : "main"}>
          <Hero />
          <PopularArticles />
        </div>
      </Main>
    </>
  );
}
