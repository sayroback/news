import Image from "next/image";
import React from "react";

export const PopularCard = () => {
  const news1 = "https://i.ibb.co/H21GBGk/news2.jpg";
  return (
    <div className="popular-card">
      <figure>
        <img src={news1} alt="news"></img>
      </figure>
    </div>
  );
};
