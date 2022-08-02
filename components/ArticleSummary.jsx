import React from "react";
import { Icon } from "./icons/Icon";

export const ArticleSummary = () => {
  return (
    <div className="summary__article">
      <h1>Titulo del articulo</h1>
      <div className="summary__article__category"></div>
      <small>Categoría</small>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
        doloremque? Ad neque quod optio, commodi totam consequuntur error modi
        enim iusto similique saepe veniam harum, consectetur dicta fugiat labore
        quasi?
      </p>
      <div className="summary__article__date">
        <Icon>calendar_month</Icon>
        <small>16 May 2022</small>
      </div>
    </div>
  );
};
