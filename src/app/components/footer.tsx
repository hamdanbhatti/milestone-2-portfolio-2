import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
   return (
      <section className="footer">
         <div className="social">
            <a href="#">
               <FaFacebook />
            </a>
            <a href="#">
               <FaLinkedin />{" "}
            </a>
            <a href="#">
               <FaGithub />
            </a>
            <a href="#"></a>
         </div>
         <p className="copyright">
            Copyright © 2024 by <span>Hamdan Bhatti</span> | All Rights Reserved.
         </p>
      </section>
   );
};

export default Footer;
