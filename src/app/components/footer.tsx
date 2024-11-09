import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
   return (
      <section className="footer">
         <div className="social">
            <a
               href="https://www.facebook.com/hamdanbhatti.hamdanbhatti.9"
               target="_blank"
               rel="noreferrer"
            >
               <FaFacebook />
            </a>
            <a
               href="https://www.linkedin.com/in/hamdan-b-340215270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
               target="_blank"
               rel="noreferrer"
            >
               <FaLinkedin />{" "}
            </a>
            <a href="https://github.com/hamdanbhatti" target="_blank" rel="noreferrer">
               <FaGithub />
            </a>
         </div>
         <p className="copyright">
            Copyright © 2024 by <span>Hamdan Bhatti</span> | All Rights Reserved.
         </p>
      </section>
   );
};

export default Footer;
