import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer">
      <div className="center">
        <span className="logo">T</span>
        <span className="title">Trello</span>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <span>
              <BsFacebook />
            </span>
          </li>
          <li>
            <span>
              <BsTwitter />
            </span>
          </li>
          <li>
            <span>
              <BsInstagram />
            </span>
          </li>
          <li>
            <span>
              <BsLinkedin />
            </span>
          </li>
          <li>
            <span>
              <BsYoutube />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
