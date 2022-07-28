import React from "react";
import { Icon } from "./icons/Icon";

export const PrimaryButton = ({ children }) => {
  return (
    <div className="primary-button">
      <Icon>south_east</Icon>
      <span>{children}</span>
    </div>
  );
};
