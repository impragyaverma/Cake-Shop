import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>The Cake Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <em>We give attention to genuine feedback</em>
        <br />
        <br />
        <strong>All rights reserved @thecakeshop</strong>
      </div>

      <aside>
        <h4>Follow us</h4>
        <div>
          <a href="https://www.linkedin.com/in/pragya-verma-a367631b3/">
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/impragyaverma">
            <AiFillGithub />
          </a>

          <a href="https://www.instagram.com/123/">
            <AiFillInstagram />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
