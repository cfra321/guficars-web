import React from "react";
import "./global-background.scss";
import bgImage from "../../../../assets/img/bacground-web-guficars.jpg";

const GlobalBackground = ({ children }) => {
  return (
    <div
      className="global-background"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default GlobalBackground;
