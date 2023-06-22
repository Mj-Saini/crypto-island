import React, { useState } from "react";

import crypto_logo from "../assets/img/svg/logo.svg";

function Header() {
  const [showNav, setShowNav] = useState("0");

  return (
    <>
      <section id="Header" className="">
        <div className="container">
          <div className="d-flex justify-content-xl-between align-items-center w-100 flex-column flex-xl-row py-sm-4 py-2">
            <div className="d-flex justify-content-between w_100">
              <ul className=" mb-0 ps-0">
                <li className="pt-1">
                  <img
                    id="nav_logo"
                    className="nav_logo"
                    src={crypto_logo}
                    alt="crypto_logo"
                  />
                </li>
              </ul>
              <ul
                style={{ zIndex: "2325" }}
                onClick={() => setShowNav(!showNav)}
                className="mb-0 ps-0 d-xl-none position-relative navMenu mt-2"
              >
                <div className="d-flex gap-1 flex-column">
                  <div className={showNav ? "line1" : "crossline1"}></div>
                  <div className={showNav ? "line3" : "crossline3"}></div>
                  <div className={showNav ? "line2" : "crossline2"}></div>
                </div>
              </ul>
            </div>

            <div className={showNav ? "hideNav" : " showNav"}>
              <div className="d-xl-flex justify-content-center align-items-center">
                <ul className="flex-grow-1 d-flex align-items-center align-items-xl-start gap-3 mb-0 ps-0 flex-column flex-xl-row h-100 justify-content-center justify-content-xl-end">
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#Statistics"
                    >
                      Statistics
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#"
                    >
                      Our Pumps
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#Feedbacks"
                    >
                      Feedbacks
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#Works"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#About"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="ff_montserrat fw-normal fs_sm me-1 text-white lh_20 navTabs_underlinear transition300 overflow-hidden position-relative"
                      onClick={() => setShowNav(!showNav)}
                      href="#FAQ"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
                <ul className="m-0 p-0 ps-xl-3 ms-1 d-flex justify-content-center mt-3 mt-xl-0">
                  <button className="crypto_main_btn">
                    Join Telegram For Free
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
