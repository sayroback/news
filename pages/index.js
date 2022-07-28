import Head from "next/head";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Nav />
    </>
  );
}
