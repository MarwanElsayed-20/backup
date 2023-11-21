import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";

import teacher from "../../../assets/ClassRoomGreetings/slide6/01.png";
import students from "../../../assets/ClassRoomGreetings/slide6/02.png";
import FeedBack from "../../FeedBack/FeedBack";

import goodjob from "../../../assets/Feedback/GoodJob.mp4";
import tryAgain from "../../../assets/Feedback/Tryagain.mp4";

export default function Slide6() {
  const [feedback, setFeedback] = useState(false);
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState("hidden");

  const chosen1 = useRef(null);
  const chosen2 = useRef(null);

  function choose(e) {
    if (e.target.nextElementSibling === null) {
      e.target.classList.add("chosen");
      e.target.previousElementSibling.classList.remove("chosen");
      console.log(e.target.previousElementSibling);
    } else {
      console.log(e.target.nextElementSibling);
      e.target.classList.add("chosen");
      e.target.nextElementSibling.classList.remove("chosen");
    }
    if (e.target.id === "correct1") {
    }
    if (
      chosen1.current.classList.contains("chosen") &&
      chosen2.current.classList.contains("chosen")
    ) {
      setFeedback(true);
    }
  }

  function check() {
    setShow("visible");
    if (feedback) {
      setSrc(goodjob);
    } else {
      setSrc(tryAgain);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 5</title>
      </Helmet>
      <div className=" container bg-white h-full">
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Circle.
        </h2>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-3 flex justify-center  ">
            <img src={teacher} alt="" className="w-1/2" />
          </div>
          <div className="col-md-4 flex flex-column justify-evenly">
            <p
              className=" w-fit px-6 py-1 text-4xl cursor-pointer"
              onClick={(e) => {
                choose(e);
              }}
            >
              Children
            </p>
            <p
              ref={chosen1}
              id="correct1"
              className=" w-fit px-6 py-1 text-4xl cursor-pointer"
              onClick={(e) => {
                choose(e);
              }}
            >
              Teacher
            </p>
          </div>
          <div className="col-md-4 offset-md-3 flex justify-center  ">
            <img src={students} alt="" className="w-1/2" />
          </div>
          <div className="col-md-4 flex flex-column justify-evenly">
            <p
              ref={chosen2}
              id="correct2"
              className=" w-fit px-6 py-1 text-4xl cursor-pointer"
              onClick={(e) => {
                choose(e);
              }}
            >
              Children
            </p>
            <p
              className=" w-fit px-6 py-1 text-4xl cursor-pointer"
              onClick={(e) => {
                choose(e);
              }}
            >
              Teacher
            </p>
          </div>
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
      <div className="row absolute bottom-[64px] right-3 w-full">
        <NavigationButton
          backPath={"/classroomgreetings/slide5"}
          nextPath={"/classroomgreetings/slide6"}
          check={check}
        />
      </div>
      {/* <Canvas width={915} height={500} /> */}
    </>
  );
}
