import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestiCard = ({ id, name, area, info, industry, logo }) => {
  return (
    <div className="testiCard" key={id}>
      <div className="card-center">
        <span>
          <ImQuotesLeft />
        </span>
        <p>{info}</p>
      </div>
      <div className="card-footer">
        <div className="customer-info">
          <h4>
            {name} - <span>{area}</span>
          </h4>
        </div>
        <div className="industry">
          <p>
            Industry : <span>{industry}</span>
          </p>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
