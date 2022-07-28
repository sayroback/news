import Head from "next/head";
import { useState } from "react";
import { ArticleSummary } from "../components/ArticleSummary";
import { Nav } from "../components/Nav";
import { PrimaryButton } from "../components/PrimaryButton";
import { User } from "../components/User";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className={isOpen ? "main active" : "main"}>
          <PrimaryButton>New Articles</PrimaryButton>
          <User />
          <ArticleSummary />
        </main>
      </div>
    </>
  );
}
