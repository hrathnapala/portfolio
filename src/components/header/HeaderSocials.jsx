import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/heshan-rathnapala-b88b03193/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/hrathnapala"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCkCrBi4FV1OLtZ1hrsOBNtw/videos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
