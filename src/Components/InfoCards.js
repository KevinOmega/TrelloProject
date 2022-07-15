import React from "react";
import { infoCards } from "../variables";

const InfoCards = () => {
  return (
    <section id="info-cards">
      <div className="info-center">
        {infoCards.map((item) => {
          const { id, name, info, image, btn } = item;

          return (
            <div className="card" key={id}>
              <div className="hero">
                <img src={image} alt="hero" />
              </div>
              <div className="center">
                <h4>{name}</h4>
                <p>{info}</p>
                <button>{btn}</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoCards;
