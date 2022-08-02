import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ArticleSummary } from "../components/ArticleSummary";
import { LogoNav } from "../components/LogoNav";
import { Nav } from "../components/Nav";
import { PopularArticles } from "../components/PopularArticles";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { User } from "../components/User";

export const Hero = () => {
  return (
    <div>
      <SecondaryButton className="summary__new">New Articles</SecondaryButton>
      <div className="summary">
        <User />
        <ArticleSummary />
      </div>
      <div className="summary__read">
        <PrimaryButton>Read More</PrimaryButton>
      </div>
    </div>
  );
};
