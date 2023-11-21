import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { AnchorLocations, newInstance } from "@jsplumb/browser-ui";

import carImg from "../../../assets/ClassRoomGreetings/slide2/car.png";
import treeImg from "../../../assets/ClassRoomGreetings/slide2/tree.png";
import camelImg from "../../../assets/ClassRoomGreetings/slide2/camel.png";
import ballImg from "../../../assets/ClassRoomGreetings/slide2/ball.png";
import stadiumImg from "../../../assets/ClassRoomGreetings/slide2/stadium.png";
import streetImg from "../../../assets/ClassRoomGreetings/slide2/street.png";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";

import goodjob from "../../../assets/Feedback/GoodJob.mp4";
import tryAgain from "../../../assets/Feedback/Tryagain.mp4";
import FeedBack from "../../FeedBack/FeedBack";

export default function Slide2() {
  const [feedback, setFeedback] = useState(false);
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState("hidden");
  const containerElement = useRef(null);

  function check() {
    setShow("visible");
    if (feedback) {
      setSrc(goodjob);
    } else {
      setSrc(tryAgain);
    }
  }
  const sourceElements = ["car", "camel", "ball"];
  const targetElements = ["tree", "stadium", "street"];

  useEffect(() => {
    const container = containerElement.current;
    if (container) {
      console.log(container);
      const instance = newInstance({
        container,
      });

      sourceElements.map((element) =>
        instance.addEndpoint(
          document.getElementById(element),
          {
            source: true,
            endpoint: "Dot",
            anchor: AnchorLocations.Center,
            connectionsDetachable: false,
            dragAllowedWhenFull: false,
            connectionType: "blue-connection",
            paintStyle: {
              fill: "#25408F",
              strokeWidth: 10,
            },
          },
          instance.setDraggable(document.getElementById(element), false)
        )
      );

      targetElements.map((element) =>
        instance.addEndpoint(
          document.getElementById(element),
          {
            target: true,
            endpoint: "Rectangle",
            anchor: AnchorLocations.Center,
            dragAllowedWhenFull: false,
            connectionType: "blue-connection",
            paintStyle: {
              fill: "#25408F",
              strokeWidth: 10,
            },
          },
          instance.setDraggable(document.getElementById(element), false)
        )
      );

      let connections = [];

      instance.bind("connection", function (info, ev) {
        var con = info.connection; //this is the new connection

        const condition =
          (con.source.id === "car" && con.target.id === "street") ||
          (con.source.id === "camel" && con.target.id === "tree") ||
          (con.source.id === "ball" && con.target.id === "stadium");

        connections.push(condition);

        const allTrue = connections.every((connection) => connection);

        if (allTrue) {
          console.log("All connections are true");
          setFeedback(true);
        } else {
          console.log("Not all connections are true");
          setFeedback(false);
        }
      });

      // Clean up jsPlumb resources on component unmount
      return () => {
        instance.reset();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerElement]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 2</title>
      </Helmet>
      <div
        ref={containerElement}
        className=" container h-full bg-white relative"
      >
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Match.
        </h2>
        <div className="row h-[65%]">
          <div className="col-md-5 flex justify-center items-center ">
            <img src={carImg} alt="" className=" w-1/4" />
            <button
              id="car"
              className={`rounded-full border bg-[#25408F] `}
            ></button>
          </div>
          <div className="col-md-5 offset-md-2 flex justify-center items-center">
            <button
              id="tree"
              className="rounded-full border bg-[#25408F]"
            ></button>
            <img src={treeImg} alt="" className=" w-1/4" />
          </div>
          <div className="col-md-5  flex justify-center items-center">
            <img src={camelImg} alt="" className=" w-1/4" />
            <button
              id="camel"
              className="rounded-full border bg-[#25408F]"
            ></button>
          </div>
          <div className="col-md-5 offset-md-2 flex justify-center items-center">
            <button
              id="stadium"
              className="rounded-full border bg-[#25408F]"
            ></button>
            <img src={stadiumImg} alt="" className=" w-1/4" />
          </div>
          <div className="col-md-5  flex justify-center items-center">
            <img src={ballImg} alt="" className=" w-1/4" />
            <button
              id="ball"
              className="rounded-full border bg-[#25408F]"
            ></button>
          </div>
          <div className="col-md-5 offset-md-2 flex justify-center items-center">
            <button
              id="street"
              className="rounded-full border bg-[#25408F]"
            ></button>
            <img src={streetImg} alt="" className=" w-1/4" />
          </div>
        </div>
      </div>
      <div className="row absolute bottom-[64px] right-3 w-full">
        <NavigationButton
          backPath={"/classroomgreetings/slide1"}
          nextPath={"/classroomgreetings/slide3"}
          check={check}
        />
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
