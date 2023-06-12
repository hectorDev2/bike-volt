import Image from "next/image";
import SelectCar from "../../../public/images/plan/motorcycle.gif";

import Contact from "../../../public/images/plan/talk.gif";
import Drive from "../../../public/images/plan/speed.gif";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Regala movilidad sustentable</h3>
              <h2>Facil y barato de adquirir</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <Image
                  style={{ margin: "0 auto" }}
                  width={60}
                  height={60}
                  src={SelectCar}
                  alt="icon_img"
                />
                <h3>Selecciona tu modelo</h3>
                <p>Ofrecemos una gama de modelos para todos los estilos</p>
              </div>

              <div className="plan-container__boxes__box">
                <Image
                  style={{ margin: "0 auto" }}
                  src={Contact}
                  alt="icon_img"
                />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <Image
                  style={{ margin: "0 auto" }}
                  src={Drive}
                  alt="icon_img"
                />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
