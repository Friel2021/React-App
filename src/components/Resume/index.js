import React from "react";

function Resume() {
  return (
    <section class="container">
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Gregory Friel</h2>
          <ul>
            <li>Full-Stack Web Development</li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/gregory-friel-ba750646/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/Friel2021/React-App/blob/main/Documents/Gregory%20Friel%20Resume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
              Languages: HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node JS,
              MySQL, Express, Handlebars, React
              <br />
              Applications: Word processing, spreadsheets, databases, desktop
              publishing, Internet based applications, command line
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
