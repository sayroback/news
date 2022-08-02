import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ArticleSummary } from "../components/ArticleSummary";
import { LogoNav } from "../components/LogoNav";
import { Nav } from "../components/Nav";
import { PopularArticles } from "../components/PopularArticles";
import { Button } from "./Button";
import { User } from "../components/User";

export const Hero = () => {
  return (
    <div className="prominent">
      <Button
        className="secondary-button summary__new"
        text="New Articles"
      ></Button>
      <div className="summary">
        <User />
        <ArticleSummary />
      </div>
      <div className="summary__read">
        <Button
          className="primary-button"
          icon="south_east"
          text="Read More"
        ></Button>
      </div>
    </div>
  );
};
