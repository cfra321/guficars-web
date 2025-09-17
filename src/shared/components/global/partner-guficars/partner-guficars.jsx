import React from "react";
import { partners } from "../../../../store/parnerData.constants";
import "./OurPartners.scss"; // Import file SCSS

const OurPartners = () => {
  return (
    <div className="our-partners">
      <h2 className="title">Our Partners</h2>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
