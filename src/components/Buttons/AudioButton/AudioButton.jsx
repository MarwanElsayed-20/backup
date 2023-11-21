import React from "react";
import audioIcon from "../../../assets/ClassRoomGreetings/soundBtn-01.png";

export default function AudioButton({ top, left, audio, audioProp }) {
  return (
    <>
      <button
        className={`absolute ${top} ${left} w-[2%]`}
        onClick={() => {
          audio(audioProp);
        }}
      >
        <img src={audioIcon} alt="audioIcon" />
      </button>
    </>
  );
}
