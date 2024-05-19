import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const email = "nikita.karpovs2004@inbox.lv";

  return (
    <footer className="text-dark text-center p-2 fixed-bottom">
      <div className="container">
        <div>
          <a
            href="https://github.com/ImWeffi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/nikitakarpovs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={`mailto:${email}`} className="text-dark ms-3">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
