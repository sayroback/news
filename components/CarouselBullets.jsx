import React from "react";
import { SecondaryButton } from "./SecondaryButton";

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
          <SecondaryButton className="arrow preview">{"<"}</SecondaryButton>
          <SecondaryButton className="arrow next">{">"}</SecondaryButton>
        </div>
      </div>
    </>
  );
};
