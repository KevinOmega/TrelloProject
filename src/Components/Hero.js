import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-img">
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp"
          alt="hero"
        />
      </div>
      <div className="hero-center">
        <h4>Trello helps teams move work forward.</h4>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div className="hero-center-footer">
          <input type="email" placeholder="Email" />
          <button>Sign up - it's free</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
