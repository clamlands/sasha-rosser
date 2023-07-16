import React from "react";

import insta from "../images/socials/instagram.webp";
import twitter from "../images/socials/twitter.webp";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials-footer">
        <a href="https://www.instagram.com/sasha.rosser/">
          <img
            src={insta}
            alt="Instagram"
            height="100"
            width="100"
            className="social"
          />
        </a>
        <a href="https://twitter.com/sasha_rosser">
          <img
            src={twitter}
            alt="Twitter"
            height="100"
            width="100"
            className="social"
          />
        </a>
      </div>
      <div>
        Website by{" "}
        <a
          href="https://www.instagram.com/noahmailloux/"
          className="inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Noah Mailloux
        </a>
      </div>
    </div>
  );
}
