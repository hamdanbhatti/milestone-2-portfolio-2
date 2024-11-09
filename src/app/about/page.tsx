import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
   return (
      <section className="about">
         <div className="about-img">
            <Image src={"/image/hero-img.jpg"} alt="about" width={1400} height={1400} />
         </div>
         <div className="about-content">
            <h2 className="heading">
               About <span>Me</span>
            </h2>
            <h3>
               Fontend <span>Developer</span>
            </h3>
            <p>
               As a passionate Frontend Developer, I specialize in creating responsive and
               user-friendly web applications using modern technologies like React, Next.js, and
               Tailwind CSS. With a keen eye for design and strong problem-solving skills, I
               transform creative concepts into seamless digital experiences. I stay current with
               the latest web development trends and best practices to deliver high-quality,
               performant solutions that exceed client expectations. My expertise includes building
               scalable applications, optimizing user interfaces, and implementing responsive
               designs that work flawlessly across all devices.
            </p>
            <Link href="#" className="btn-2">Experience</Link>
         </div>
      </section>
   );
};

export default About;
