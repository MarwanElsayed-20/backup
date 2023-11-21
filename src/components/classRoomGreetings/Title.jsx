import React from "react";
import FullScreenButton from "../Buttons/FullScreenButton/FullScreenButton";

import header from "../../assets/ClassRoomGreetings/header.png";
import unitIcon from "../../assets/ClassRoomGreetings/UnitIcon.png";
import audioIcon from "../../assets/ClassRoomGreetings/soundBtn-01.png";

import classroomAudio from "../../assets/ClassRoomGreetings/audio/Classroom Greetings.mp3";

export default function Title() {
  const play = () => {
    new Audio(classroomAudio).play();
  };

  return (
    <>
      <div
        className="py-2 relative z-[9999]"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <FullScreenButton />
          <div className="row">
            <div className="col-md-1">
              <img src={unitIcon} alt="unitIcon" className="w-[50%]" />
            </div>
            <div className="col-md-10 text-center d-flex items-center justify-center">
              <button
                className="w-[4%] me-3"
                onClick={() => {
                  play();
                }}
              >
                <img src={audioIcon} alt="Audio" className="w-[100%]" />
              </button>
              <h1 className=" font-black text-[2rem] text-pink-500 text-center capitalize text-shadow-classRoom">
                Classroom Greetings
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
