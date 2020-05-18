import React from "react";

import ImageHero from "assets/images/img-hero.jpg";

import Path1 from "assets/images/icons/path-1.svg";
import Path2 from "assets/images/icons/path-2.svg";

const Hero = (props) => {
  return (
    <section
      className="align-items-center"
      style={{ height: 2000, position: "relative" }}
    >
      <div
        className="align-items-center"
        style={{ position: "relative", height: 579 }}
      >
        <img
          src={ImageHero}
          alt=""
          style={{ height: 579, width: "100%", zIndex: 1 }}
          className="img-fluid position-absolute"
        />
        <img
          src={Path1}
          alt=""
          //   width="32"
          height="579"
          className="path-1"
          style={{ zIndex: 2, position: "absolute" }}
        />
        <img
          src={Path2}
          alt=""
          className="path-2"
          style={{ zIndex: 3, position: "absolute", left: "25%", top: "-30%" }}
        />
        <div
          className="col-auto pr-5 d-flex justify-content-center"
          style={{ width: 500 }}
        >
          <p
            className="mb-4 ml-5 font-weight-light text-gray-100 w-75"
            style={{
              lineHeight: "170%",
              position: "absolute",
              zIndex: 4,
              marginTop: "75%",
              fontSize: 18,
            }}
          >
            Portfolio keren Infinity Software {"&"} <br></br>klien-klien luar
            biasa yang <br></br> mempercayai kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
