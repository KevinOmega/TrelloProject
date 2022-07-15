import React from "react";
import { features } from "../variables";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features">
      <div className="header">
        <h2>Features to help your team succeed</h2>
        <p>
          Powering a productive team means using a powerful tool (and plenty of
          snacks). From meetings and projects to events and goal setting,
          Trello's intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
      </div>
      <div className="center">
        {features.map((item) => (
          <FeatureCard {...item} key={item.id}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Features;
