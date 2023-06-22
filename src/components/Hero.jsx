import React from "react";
import Header from "./Header";
import text from "../assets/img/svg/text-img.svg";

function Hero() {
  return (
    <>
      <section className="hero_bg_gif min_vh_100 position-relative d-flex flex-column pb-5">
        <div className="hero_bg_linear position-absolute w-100 h-100 top-0 start-0"></div>
        <div style={{ zIndex: "999" }} className="position-relative">
          <Header />
        </div>
        <div className="container flex-grow-1 d-flex justify-content-center align-items-center z-3">
          <div className="py-5 py-xl-0 mb-5">
            <h1 className="ff_exo fs_7xl fw_extrabold text-center">
              Earn More in Less Time
            </h1>
            <p className="ff_montserrat fw-medium fs_sm text-white lh_155 text-center mb-0 pb-2">
              If you don't join this group you could be missing out on one of
              the biggest{" "}
              <span className="d-lg-block">
                opportunities of your life, more than 25000 people have already
                joined!
              </span>
            </p>{" "}
            <p className="ff_montserrat fw-medium fs_sm text-white lh_155 text-center mb-5 pb-4">
              Will you miss this opportunity?
            </p>
            <div className="d-flex justify-content-center position-relative mb-md-5">
              <button className="crypto_main_btn z-2 position-relative">
                Join Telegram For Free
              </button>
              <img
                className="position-absolute top-50 start-50 translate-middle z-0"
                src={text}
                alt="text-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
