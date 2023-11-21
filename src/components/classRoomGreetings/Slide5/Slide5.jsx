import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";

import letterImg from "../../../assets/ClassRoomGreetings/slide5/letter.png";
import FeedBack from "../../FeedBack/FeedBack";

import goodjob from "../../../assets/Feedback/GoodJob.mp4";
import tryAgain from "../../../assets/Feedback/Tryagain.mp4";

export default function Slide5() {
  const [circle, setCircle] = useState([]);
  const [feedback, setFeedback] = useState(false);
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState("hidden");
  const [chosen, setChosen] = useState([]);

  function check() {
    setShow("visible");
    if (feedback) {
      setSrc(goodjob);
    } else {
      setSrc(tryAgain);
    }
  }

  function circleOn(e) {
    e.preventDefault();
    const { clientX, clientY } = e;
    console.log(clientX, clientY);

    if (
      // First circle
      e.clientY > 215 &&
      e.clientY < 251 &&
      e.clientX > 992 &&
      e.clientX < 1030
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Second circle
      e.clientY > 237 &&
      e.clientY < 269 &&
      e.clientX > 899 &&
      e.clientX < 939
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Third circle
      e.clientY > 313 &&
      e.clientY < 346 &&
      e.clientX > 795 &&
      e.clientX < 830
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Fourth circle
      e.clientY > 455 &&
      e.clientY < 490 &&
      e.clientX > 812 &&
      e.clientX < 848
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Fifth circle
      e.clientY > 420 &&
      e.clientY < 452 &&
      e.clientX > 688 &&
      e.clientX < 720
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Sixth circle
      e.clientY > 355 &&
      e.clientY < 390 &&
      e.clientX > 627 &&
      e.clientX < 656
    ) {
      setChosen([...chosen, true]);
    } else if (
      // Seventh circle
      e.clientY > 483 &&
      e.clientY < 515 &&
      e.clientX > 548 &&
      e.clientX < 594
    ) {
      setChosen([...chosen, true]);
    } else if (
      // eighth circle
      e.clientY > 305 &&
      e.clientY < 342 &&
      e.clientX > 490 &&
      e.clientX < 523
    ) {
      setChosen([...chosen, true]);
    }

    if (chosen.length === 7 && circle.length === 7) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }

    const key = new Date().getTime();
    setCircle([...circle, { key, x: clientX, y: clientY }]);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 5</title>
      </Helmet>
      <div className="container h-full bg-white ">
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Read the letter and circle the letter (f/F).
        </h2>
        <div
          className="w-[59%] m-auto relative"
          onClick={(e) => {
            circleOn(e);
          }}
        >
          <img src={letterImg} alt="" />
          {circle.map(({ key, x, y }) => (
            <div
              key={key}
              style={{
                position: "absolute",
                left: x - 450,
                top: y - 140,
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "5px solid #25408F",
              }}
            ></div>
          ))}
        </div>
        <div className="row absolute bottom-[64px] right-3 w-full">
          <NavigationButton
            backPath={"/classroomgreetings/slide4"}
            nextPath={"/classroomgreetings/slide6"}
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
