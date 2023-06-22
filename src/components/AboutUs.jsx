import React from "react";
import aboutImg from "../assets/img/svg/crypto-island.svg";

function AboutUs() {
  return (
    <>
      <section
        id="About"
        className="bg_img_linear z-3 position-relative d-flex nagitive_margin py-5"
      >
        <div className="container d-flex align-items-center justify-content-center py-5">
          <div className="row flex-column-reverse flex-md-row justify-content-center">
            <div className="col-md-6 mt-4 mt-sm-5 mt-md-0">
              <h2 className="ff_mukta fw_extraBold text-white fs_4x8l">
                About Us
              </h2>
              <p className="ff_poppins fw-normal fs_sm text-white">
                We are a team that has been working with cryptocurrencies for
                over
                <span className="d-xl-block">
                  8 years. We decided to create this community with the aim of
                </span>
                <span className="d-xl-block">
                  bringing together as many investors as possible, so that
                  everyone
                </span>
                <span className="d-xl-block">
                  can profit from it. The group is completely free because the
                  greater
                </span>
                the number of investors, the greater the ability to influence
                the value
                <span className=""> of the corresponding coins.</span>
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img className="w-100" src={aboutImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
