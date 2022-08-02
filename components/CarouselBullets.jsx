import React from "react";
import { Button } from "./Button";

export const CarouselBullets = () => {
  const numberArticles = 5;
  const article = 1;
  return (
    <>
      <div className="carousel">
        <div className="bullets">
          {[...Array(numberArticles)].map((e, i) => (
            <button key={i}>
              <span className={i === article ? "active" : ""}></span>
            </button>
          ))}
        </div>
        <div className="arrows">
          <Button icon="chevron_left" className="arrow preview" />
          <Button icon="navigate_next" className="arrow next" />
        </div>
      </div>
    </>
  );
};
