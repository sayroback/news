import React from "react";
import { CarouselBullets } from "./CarouselBullets";
import { PopularCard } from "./PopularCard";

export const PopularArticles = () => {
  const numberOfCards = 2;
  return (
    <div className="popular-articles">
      <CarouselBullets />
      <h3>Popular Articles</h3>
      <div className="popular-articles__cards">
        {[...Array(numberOfCards)].map((e, i) => (
          <PopularCard key={i} />
        ))}
      </div>
    </div>
  );
};
