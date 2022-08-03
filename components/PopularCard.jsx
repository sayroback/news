import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ArticleSummary } from "./ArticleSummary";
import { Button } from "./Button";

const Figure = styled.div`
  background-image: url(${(props) => props.img});
`;

export const PopularCard = () => {
  const news1 = "https://i.ibb.co/H21GBGk/news2.jpg";
  return (
    <div className="popular-card">
      <Figure img={news1} className="popular-card__image">
        <Button icon="arrow_forward" className="read--popular" />
      </Figure>
      <div>
        <ArticleSummary className="popular-card__resume" />
      </div>
    </div>
  );
};
