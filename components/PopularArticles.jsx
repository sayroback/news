import React from "react";
import { CarouselBullets } from "./CarouselBullets";
import { PopularCard } from "./PopularCard";

export const PopularArticles = () => {
  return (
    <div className="popular-articles">
      <CarouselBullets />
      <h3>Popular Articles</h3>
      <PopularCard />
    </div>
  );
};
