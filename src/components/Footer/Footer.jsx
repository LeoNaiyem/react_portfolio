import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import React from "react";
import Wave from "../../img/wave.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mdnaiyem.islam.10@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/leonaiyem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.facebook.com/MuhammadNaiyemHossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/leonaiyem"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
