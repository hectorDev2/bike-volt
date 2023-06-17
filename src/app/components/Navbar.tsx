"use client";
import Logo from "../../../public/images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/equipo",
    title: "Nuestro equipo",
  },
  {
    href: "/models",
    title: "Modelos",
  },
  {
    href: "/testimonials",
    title: "Testimonios",
  },
  {
    href: "/contact",
    title: "Contacto",
  },
  {
    href: "/about",
    title: "Sobre nosotros",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  console.log(pathname, "pathss");

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FaRegWindowClose />
          </div>
          <ul className="mobile-navbar__links">
            {routes.map(({ href, title }) => (
              <motion.li
                className={`${
                  href === pathname ? "text-[#E0120A]" : "text-white"
                } hover:text-[#ff0336] cursor-pointer `}
                key={title}
              >
                <Link onClick={openNav} href={href}>
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* desktop */}

        <div
          style={{
            background: "#ff4d30",
            position: "fixed",
            zIndex: "9",
          }}
          className="navbar"
        >
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="flex gap-2 justify-evenly navbar__links">
            {routes.map(({ title, href }) => (
              <li
                className={` ${
                  href === pathname ? "text-[#E0120A]" : "text-white"
                } hover:text-[#ff0336] cursor-pointer `}
              >
                <Link
                  className={`${href == pathname && "text-[white]"}`}
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
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
