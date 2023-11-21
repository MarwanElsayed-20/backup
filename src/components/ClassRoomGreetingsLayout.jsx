import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "./classRoomGreetings/Title";
import Footer from "./classRoomGreetings/Footer";

export default function ClassRoomGreetingsLayout() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (!isDesktop) return;

    if (window.innerWidth > 1200) {
      setIsDesktop(false);
    }
  }, [isDesktop]);
  return (
    <>
      {!isDesktop ? (
        <div className="h-screen relative overflow-hidden mx-[150px]">
          <Title />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div className=" h-screen overflow-hidden relative flex justify-center items-center bg-white">
          <h1>Its only working with desktop screens</h1>
        </div>
      )}
    </>
  );
}
