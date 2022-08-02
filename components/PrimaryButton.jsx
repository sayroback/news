import React from "react";
import { Icon } from "./icons/Icon";

export const PrimaryButton = ({ children, className }) => {
  return (
    <div className={`primary-button ${className}`}>
      <Icon>south_east</Icon>
      <span>{children}</span>
    </div>
  );
};
