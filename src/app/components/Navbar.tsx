"use client";
import Logo from "../../../public/images/logo/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" href="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" href="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" href="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" href="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" href="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" href="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <CgMenuRightAlt />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
