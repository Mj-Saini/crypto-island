import React, { useState, useEffect } from "react";
import topimg from "../assets/img/png/backtotop.png";

const BackTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="me-2">
      <span
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-3 me-2 bg_primary p-0 px-1 rounded-5 w_30"
            : "d-none"
        }
      >
        <div className="move_btn btop_btn bg_secondary p-2">
          <img className="gotop p-2" src={topimg} alt="topimg" />
        </div>
      </span>
    </div>
  );
};

export default BackTop;
