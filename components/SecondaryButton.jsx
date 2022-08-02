import React from "react";

export const SecondaryButton = ({ children, className }) => {
  return (
    <div className={`secondary-button ${className}`}>
      <span>{children}</span>
    </div>
  );
};
