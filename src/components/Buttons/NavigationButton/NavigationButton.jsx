import React from "react";
import { useNavigate } from "react-router-dom";

import backIcon from "../../../assets/ClassRoomGreetings/back-01.png";
import nextIcon from "../../../assets/ClassRoomGreetings/next-01.png";
import checkIcon from "../../../assets/ClassRoomGreetings/Check-01.png";
import resetIcon from "../../../assets/ClassRoomGreetings/rest-01.png";

export default function NavigationButton({
  backPath,
  nextPath,
  check,
  visibility,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-4 offset-md-4 d-flex justify-center items-center">
        <button
          className="w-[14%] me-2"
          onClick={() => {
            navigate(backPath);
          }}
        >
          <img src={backIcon} alt="backIcon" />
        </button>
        <button
          className="w-[14%]"
          onClick={() => {
            navigate(nextPath);
          }}
        >
          <img src={nextIcon} alt="nextIcon" />
        </button>
      </div>
      <div className="col-md-4  d-flex justify-end items-center pe-0">
        <button
          className={`w-[14%] me-2 ${visibility ? visibility : ""}`}
          onClick={() => {
            if (check) {
              check();
            }
          }}
        >
          <img src={checkIcon} alt="checkIcon" />
        </button>
        <button
          className="w-[14%]"
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={resetIcon} alt="resetIcon" />
        </button>
      </div>
    </>
  );
}
