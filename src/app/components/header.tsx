"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const pathname = usePathname();

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="header">
         <Link href="/" className="logo">
            <span>Ham</span>dan
         </Link>
         <nav className={`navbar ${isMenuOpen ? 'nav-active' : ''}`}>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
            <Link href="/skills" className={pathname === '/skills' ? 'active' : ''}>Skills</Link>
            <Link href="/contact" className={`nav-contact ${pathname === '/contact' ? 'active' : ''}`}>Contact Me</Link>
         </nav>
         <Link href="/contact" className="contact desktop-contact">Contact Me</Link>
         <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
         </div>
      </header>
   );
};

export default Header;
