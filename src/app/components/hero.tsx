"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
   return (
      <section className="home">
         <div className="home-content">
            <h3>Hi,</h3>
            <h1>
               I'm{" "}
               <span>
                  Hamdan <br />
               </span>
               <Typewriter
                  words={["Web Developer", "Frontend Developer", "React Developer"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="|"
                  cursorColor="#15b392"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
               />
            </h1>
            <p>
               Lorem, ipsum dolor sit abet consectetur adipisicing emit. Perspiciatis optio quidem
               odit alias praesentium veldt id? Ilium incidunt perferendis sed iste quisquam
               nesciunt voluptatum veniam nebo ex, praesentium earum vel.
            </p>
            <div className="btn-box">
               <Link href={"/contact"}>
                  {" "}
                  <button className="btn-1">Hire Me</button>
               </Link>
            </div>
         </div>
         <div className="img-box">
            <Image src={"/image/hero-img.jpg"} alt="hero" width={400} height={400} />
         </div>
      </section>
   );
};

export default Hero;
