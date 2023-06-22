import React from "react";
import logo from "../assets/img/svg/logo.svg";

function Footer() {
  return (
    <>
      <section className="bg-black position-relative pt-lg-5 pb-4">
        <div className="footer_top_line"></div>

        <span className="bg_shadow position-absolute bottom-0 end-0"></span>

        <div className="container mt-4 py-3">
          <div className="d-flex flex-column align-items-center gap-4">
            <a href="#Header">
              {" "}
              <img src={logo} alt="logo" />
            </a>
            <button className="crypto_main_btn mt-1">
              <svg
                className="me-2"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1993 4.84732L16.5587 17.3004C16.3593 18.1792 15.84 18.3979 15.1018 17.9842L11.0781 15.0192L9.13684 16.8867C8.92184 17.1017 8.74247 17.2811 8.32809 17.2811L8.61747 13.1836L16.0743 6.44545C16.3987 6.1567 16.0037 5.99607 15.5706 6.28544L6.35184 12.0904L2.38309 10.8479C1.51997 10.5786 1.50434 9.98482 2.56309 9.57045L18.0862 3.58982C18.805 3.32044 19.4337 3.74982 19.1993 4.84794V4.84732Z"
                  fill="white"
                />
              </svg>
              Telegram
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
