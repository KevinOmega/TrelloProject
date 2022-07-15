import React, { useState } from "react";

const FeatureCard = ({ id, name, title, description, image, more }) => {
  const [showMore, setShowmore] = useState(false);

  const handleMoreBtn = () => {
    setShowmore(!showMore);
  };
  return (
    <div className="feature-card">
      <div className="hero">
        <img src={image} alt="hero" />
      </div>
      <div className="feature-center">
        <h4>{name}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          className={`btn ${showMore && "active"}`}
          onClick={handleMoreBtn}
        >
          Learn More
        </button>
        {showMore && (
          <div className="more">
            <p>{more.info}</p>
            <ul>
              {more.characteristics.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
