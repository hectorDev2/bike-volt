import BgShape from "../../../public/images/hero/hero-bg.png";

import HeroBike from "../../../public/images/hero/main-bike.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <Image className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Muevete a tu ritmo</h4>
              <h1>
                lleva tu movilidad <span>Electrica</span> a otro nivel
              </h1>
              <p>
                Compra la moto electrica de acorde a tus nesecidades y al mejor
                precio
              </p>
              <div className="hero-content__text__btns">
                <Link className="hero-content__text__btns__book-ride" href="/">
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" href="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <Image
              src={HeroBike}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div className={`scroll-up`}>
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
