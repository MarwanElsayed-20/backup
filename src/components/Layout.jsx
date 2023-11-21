import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1200) {
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      {!isDesktop ? (
        <div className=" h-screen overflow-hidden mx-[150px] relative">
          <Outlet />
        </div>
      ) : (
        <div className=" h-screen overflow-hidden relative flex justify-center items-center bg-white">
          <h1>Its only working with desktop screens</h1>
        </div>
      )}
    </>
  );
}
