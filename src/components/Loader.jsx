import React, { useEffect, useState } from "react";
function Loader() {
  const [loader, setloader] = useState(0);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }, []);
  {
    if (loader === 0) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <>
      {loader ? (
        <section className=" position-fixed w-100 min-vh-100 Loader d-flex flex-column justify-content-center align-items-center position-relative ">
          <div className=" Overlay_loader position-absolute w-100 h-100 z_index0 "></div>
          <div className="d-flex flex-row align-items-center fontsize_loader gap-2  gap-sm-3 z_index1">
            <span>
              <span className="text-white fw-bold fs_4x8l">Crypto</span>
              <span className="LoaderAnimation1 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation2 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation3 Dot_loader d-inline-block "></span>
              <span className="LoaderAnimation4 Dot_loader d-inline-block "></span>
            </span>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
