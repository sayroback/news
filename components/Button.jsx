import React from "react";
import { Icon } from "./icons/Icon";

export const Button = ({ className, icon, text }) => {
  return (
    <div className={`${className}`}>
      {icon ? <Icon icon={icon} /> : null}
      {text ? <span>{text}</span> : null}
    </div>
  );
};
