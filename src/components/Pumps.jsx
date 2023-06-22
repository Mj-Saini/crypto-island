import React, { useState } from "react";
import "../Card.css";

import slider_img from "../assets/img/webp/pumps-img1.webp";
import grid from "../assets/img/png/grid.png";
import rocket from "../assets/img/svg/rocket.svg";

function Pumps() {
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = [];
      (() => {
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i];
        }
      };

      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes);
    });
  };
  return (
    <>
      <section className="py-5 bg-black nagitive_margin overflow-hidden position-relative">
        <span className=" bg_shadow shadow_pos position-absolute"></span>
        <img className="position-absolute bottom-0 z-0" src={grid} alt="img" />
        <div className="container py-5 my-sm-5 mt-4 position-relative z-2">
          <h2 className=" ff_exo fw_extrabold fs_4x8l text-center text-white mb-0">
            Our Pumps
          </h2>
          <div className="mb-5 pb-4 d-flex flex-column flex-sm-row justify-content-center mt-md-5 mt-4">
            <div className="col-sm-9 position-relative mx-auto">
              {" "}
              <span className=" position-absolute rocket_pos z_index2 d-none d-lg-flex z-0">
                <img src={rocket} alt="rocket" />
              </span>
              <div className="d-flex justify-content-center position-relative z-2">
                <svg
                  className="position-absolute z_indexbtnslider top-50 start-0 SliderBtn d-none d-lg-block translate-middle-y"
                  width="74"
                  height="74"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="37"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <path
                    d="M39 28L30 37L39 46"
                    stroke="white"
                    stroke-width="3.46154"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className="position-absolute z_indexbtnslider top-50 end-0 translate-middle-y d-none d-lg-block"
                  width="74"
                  height="74"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="37"
                    transform="matrix(-1 0 0 1 74 0)"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <path
                    d="M35 28L44 37L35 46"
                    stroke="white"
                    stroke-width="3.46154"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="cards-box ">
                  <div class="card hide box_shaddo_slider">
                    <div class="content-placeholder  d-fex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img"
                      />
                    </div>
                  </div>
                  <div class="card box_shaddo_slider">
                    <div class="content-placeholder d-flex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img t"
                      />
                    </div>
                  </div>
                  <div class="card box_shaddo_slider">
                    <div class="content-placeholder d-flex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img"
                      />
                    </div>
                  </div>
                  <div class="card box_shaddo_slider">
                    <div class="content-placeholder d-flex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img"
                      />
                    </div>
                  </div>
                  <div class="card box_shaddo_slider">
                    <div class="content-placeholder d-flex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img"
                      />
                    </div>
                  </div>
                  <div class="card box_shaddo_slider">
                    <div class="content-placeholder d-flex justify-content-center">
                      <img
                        className="img_size box_shaddo_slider"
                        src={slider_img}
                        alt="slider_img"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script></script>
      </section>
    </>
  );
}

export default Pumps;
