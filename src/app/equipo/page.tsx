"use client";
import Image from "next/image";
import React from "react";
import Person1 from "../../../public/images/team/1.png";
import Person2 from "../../../public/images/team/2.png";
import Person3 from "../../../public/images/team/3.png";
import Person4 from "../../../public/images/team/4.png";
import Person5 from "../../../public/images/team/5.png";
import Person6 from "../../../public/images/team/6.png";
import HeroPages from "../components/HeroPages";
import { PageWrapper } from "../components/PageWrapper";
import { motion } from "framer-motion";
import { images, variants } from "@/animations";
import Navbar from "../components/Navbar";

const Team = () => {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <PageWrapper>
        <section className="team-page">
          <HeroPages name="Our Team" />
          <div className="container">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="team-container"
            >
              {teamPpl.map((ppl, id) => (
                <motion.div
                  variants={images}
                  key={id}
                  className="team-container__box"
                >
                  <div className="team-container__box__img-div">
                    <Image src={ppl.img} alt="team_img" />
                  </div>
                  <div className="team-container__box__descr">
                    <h3>{ppl.name}</h3>
                    <p>{ppl.job}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
              <div className="text-content">
                <h2>Book a car by getting in touch with us</h2>
                <span>
                  <i className="fa-solid fa-phone"></i>
                  <h3>(123) 456-7869</h3>
                </span>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};
export default Team;
