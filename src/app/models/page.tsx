"use client";
import Image from "next/image";
import React from "react";
import data from "../../store/CarData";

import Link from "next/link";
import HeroPages from "../components/HeroPages";
import { PageWrapper } from "../components/PageWrapper";
import { motion } from "framer-motion";
import { images, variants } from "@/animations";

export default function Models() {
  return (
    <>
      <HeroPages name="Vehicle Models" />
      <PageWrapper>
        <section className="models-section">
          <div className="container">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="models-div"
            >
              {data.map((item, index) => (
                <motion.div
                  variants={images}
                  className="models-div__box"
                  key={index}
                >
                  <div className="models-div__box__img">
                    <Image src={item.img} alt="car_img" />
                    <div className="models-div__box__descr">
                      <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                          <p>{item.mark}</p>
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                          <h4>{item.price}</h4>
                          <p>per day</p>
                        </div>
                      </div>
                      <div className="models-div__box__descr__name-price__details">
                        <span>
                          <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                          {item.model}
                        </span>
                        <span style={{ textAlign: "right" }}>
                          {item.doors} &nbsp;{" "}
                          <i className="fa-solid fa-car-side"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                          {item.transmission}
                        </span>
                        <span style={{ textAlign: "right" }}>
                          {item.fuel} &nbsp;{" "}
                          <i className="fa-solid fa-car-side"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__btn">
                        <Link href="/">Book Ride</Link>
                      </div>
                    </div>
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
}
