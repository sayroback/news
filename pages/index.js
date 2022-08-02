import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ArticleSummary } from "../components/ArticleSummary";
import { Nav } from "../components/Nav";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { User } from "../components/User";

const news1 = "https://i.ibb.co/H21GBGk/news2.jpg";

const Hero = styled.div`
  background-image: url(${news1});
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero className="hero--mobile">
          <main className={isOpen ? "main active" : "main"}>
            <SecondaryButton>New Articles</SecondaryButton>
            <User />
            <ArticleSummary />
            <PrimaryButton>Read More</PrimaryButton>
          </main>
        </Hero>
      </div>
    </>
  );
}
