import React, { useEffect, useState } from "react";
import fullScreen from "../../../assets/fullscreen.png";
import exitFullScreen from "../../../assets/exitfullscreen.png";

export default function FullScreenButton() {
  const [isFullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerHeight === window.screen.height) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
    });
  }, [isFullScreen]);

  const openFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return (
    <>
      <button
        className={`${
          !isFullScreen ? "visible" : "hidden"
        } absolute right-3 top-2 w-14 cursor-pointer z-50`}
        onClick={() => {
          openFullscreen();
        }}
      >
        <img src={fullScreen} alt="openFullScreenMoodImage" />
      </button>
      <button
        className={`${
          isFullScreen ? "visible" : "hidden"
        } absolute right-3 top-2 w-14 cursor-pointer z-50`}
        onClick={() => {
          closeFullscreen();
        }}
        onKeyDown={() => {
          closeFullscreen();
        }}
      >
        <img src={exitFullScreen} alt="exitFullScreenMoodImage" />
      </button>
    </>
  );
}
