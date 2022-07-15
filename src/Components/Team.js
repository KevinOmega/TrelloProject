import React from "react";
import { teams } from "../variables";

const Team = () => {
  return (
    <section id="team-section">
      <div className="header">
        <h4>It's more than work. It's a way of working together.</h4>
        <p>
          Start with a Trello board, lists, and cards. Customize and expand with
          more features as your teamwork grows. Manage projects, organize tasks,
          and build team spirit—all in one place.
        </p>
        <button>Start doing</button>
      </div>
      <div className="hero">
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=576&fm=webp"
          alt="hero"
        />
        <p>
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
      </div>
      <div className="teams">
        {teams.map((team) => {
          const { id, image } = team;
          return (
            <div className="item" key={id}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
