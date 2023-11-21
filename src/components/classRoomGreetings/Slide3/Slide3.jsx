import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";

import ballImg from "../../../assets/ClassRoomGreetings/slide3/01.png";
import catImg from "../../../assets/ClassRoomGreetings/slide3/02.png";
import bookImg from "../../../assets/ClassRoomGreetings/slide3/03.png";
import penImg from "../../../assets/ClassRoomGreetings/slide3/04.png";
import FeedBack from "../../FeedBack/FeedBack";

import goodjob from "../../../assets/Feedback/GoodJob.mp4";
import tryAgain from "../../../assets/Feedback/Tryagain.mp4";

export default function Slide3() {
  const [letters, setLetters] = useState("");
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState("hidden");

  function check() {
    setShow("visible");

    if (letters === "aaaa") {
      setSrc(goodjob);
    } else {
      setSrc(tryAgain);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 3</title>
      </Helmet>
      <div className=" container h-full bg-white">
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Type the letters.
        </h2>
        <div className="row h-[65%] gy-4 ">
          <div className="col-md-3 offset-3 flex items-center justify-center relative">
            <div className="relative w-3/5">
              <img src={ballImg} alt="" />
              <input
                type="text"
                className=" absolute bottom-[15px] h-[35px] left-[60px] w-[22%] bg-transparent rounded-lg outline-0 px-[5px] text-4xl"
                onBlur={(e) => {
                  setLetters(`${letters}${e.target.value}`);
                }}
                maxLength={1}
              />
            </div>
          </div>
          <div className="col-md-3 flex items-center justify-center relative">
            <div className="relative w-3/5">
              <img src={catImg} alt="" />
              <input
                type="text"
                className=" absolute bottom-[15px] h-[35px] left-[67px] w-[22%] bg-transparent rounded-lg outline-0 px-[5px] text-4xl"
                onBlur={(e) => {
                  setLetters(`${letters}${e.target.value}`);
                }}
                maxLength={1}
              />
            </div>
          </div>
          <div className="col-md-3 offset-3 flex items-center justify-center relative">
            <div className="relative w-3/5">
              <img src={bookImg} alt="" />
              <input
                type="text"
                className="  absolute bottom-[15px] h-[35px] left-[30px] w-[22%] bg-transparent rounded-lg outline-0 px-[5px] text-4xl"
                onBlur={(e) => {
                  setLetters(`${letters}${e.target.value}`);
                }}
                maxLength={1}
              />
            </div>
          </div>
          <div className="col-md-3 flex items-center justify-center relative">
            <div className="relative w-3/5">
              <img src={penImg} alt="" />
              <input
                type="text"
                className=" absolute bottom-[15px] h-[35px] left-[35px] w-[22%] bg-transparent rounded-lg outline-0 px-[5px] text-4xl"
                onBlur={(e) => {
                  setLetters(`${letters}${e.target.value}`);
                }}
                maxLength={1}
              />
            </div>
          </div>
        </div>

        <div className="row absolute bottom-[64px] right-3 w-full">
          <NavigationButton
            backPath={"/classroomgreetings/slide2"}
            nextPath={"/classroomgreetings/slide4"}
            check={check}
          />
        </div>
      </div>
      <div
        className={`bg-black/30 top-0 left-0 right-0 bottom-0 absolute ${show}  z-[999]`}
        onClick={() => {
          setShow("hidden");
          setSrc(null);
          window.location.reload();
        }}
      >
        <FeedBack src={src} show={show} />
      </div>
    </>
  );
}
