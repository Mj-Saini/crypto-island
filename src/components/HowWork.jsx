import React from "react";
import mobile from "../assets/img/webp/mobile.webp";

function HowWork() {
  return (
    <>
      <section id="Works" className="bg-black nagitive_margin py-5">
        <div className="container py-sm-5">
          <h2 className="ff_exo fw-bold fs_4x8l text-white text-center pt-5 mb-4 mt-4 mt-md-0">
            How it <span className="text_gradient">Works?</span>
          </h2>
          <div className="row pb-xl-5 pt-sm-4 justify-content-lg-between justify-content-center align-items-center mb-5">
            <div className="col-lg-4 col-sm-6">
              <div className="row">
                <div className="col-12">
                  <div className="works_card d-flex flex-column  position-relative py-4 px-sm-3 px-2">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Create an Exhange{" "}
                      <span className="d-sm-block"> Account</span>
                    </p>
                  </div>
                  <div className="works_card d-flex flex-column  position-relative py-4 px-sm-3 px-2 my-lg-5">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Transfer bnb to trustwallet or metamask
                    </p>
                  </div>
                  <div className="works_card d-flex flex-column position-relative py-4 px-sm-3 px-2">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Connect wallet to
                      <span className="d-sm-block">
                        Pancakeswap, Poocoin,
                      </span>{" "}
                      Dextools or Boggedfinance
                    </p>
                  </div>
                </div>
                <div className="col-12 d-none d-sm-block d-lg-none">
                  <div className="works_card d-flex flex-column position-relative py-4 px-3">
                    <p className="ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Buy as soon as possible after
                      <span className="d-block"> the signal</span>
                    </p>
                  </div>
                  <div className="works_card d-flex flex-column position-relative py-4 px-3 my-lg-5">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Transfer bnb to trustwallet or metamask
                    </p>
                  </div>
                  <div className="works_card d-flex flex-column position-relative py-4 px-3">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Connect wallet to
                      <span className="d-block">
                        Pancakeswap, Poocoin,
                      </span>{" "}
                      Dextools or Boggedfinance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 my-4 my-sm-0">
              <img className="w-100" src={mobile} alt="img" />
            </div>{" "}
            <div className="col-lg-4 col-sm-6 d-sm-none d-lg-flex">
              <div className="row">
                <div className="col-12">
                  <div className="works_card d-flex flex-column position-relative py-4 px-sm-3 px-2">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Buy as soon as possible after
                      <span className="d-sm-block"> the signal</span>
                    </p>
                  </div>{" "}
                  <div className="works_card d-flex flex-column position-relative py-4 px-sm-3 px-2 my-lg-5">
                    <p className="ff_poppins fw-medium fs_sm clr_gray mb-0">
                      We hold the pump for at least 5 minutes and the coin will
                      attract investors from outside our group
                    </p>
                  </div>
                  <div className="works_card d-flex flex-column position-relative py-4 px-sm-3 px-2 px-2">
                    <p className=" ff_poppins fw-medium fs_sm clr_gray mb-0">
                      Sell after the signal and take
                      <span className="d-sm-block">the profits</span> Dextools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowWork;
