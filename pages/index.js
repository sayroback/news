import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ArticleSummary } from "../components/ArticleSummary";
import { Nav } from "../components/Nav";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { User } from "../components/User";
import news1 from "../public/news1.jpg";

const Hero = styled.div`
  border: 1px solid #000;
  background-image: url(${news1});
  width: 2000px;
  height: 2000px;
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
        <Hero news1={news1} className="hero--mobile">
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
