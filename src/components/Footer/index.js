import React from "react";

function Footer() {
  return (
    <footer className="footer bg-danger fixed-bottom">
      <a href="https://github.com/Friel2021">
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/gregory-friel-ba750646">
        <img
          src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a href="https://twitter.com/GJFriel">
        <img
          src="https://img.icons8.com/color/48/000000/twitter--v2.png"
          alt="Twitter"
          className="icon"
        />
      </a>
    </footer>
  );
}

export default Footer;
