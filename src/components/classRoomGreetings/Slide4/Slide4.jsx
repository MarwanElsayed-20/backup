import React, { useEffect, useState } from "react";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";
import { Helmet } from "react-helmet";

import ballImg from "../../../assets/ClassRoomGreetings/slide4/01.png";
import catImg from "../../../assets/ClassRoomGreetings/slide4/02.png";
import bookImg from "../../../assets/ClassRoomGreetings/slide4/03.png";
import penImg from "../../../assets/ClassRoomGreetings/slide4/04.png";
import FeedBack from "../../FeedBack/FeedBack";

import goodjob from "../../../assets/Feedback/GoodJob.mp4";
import tryAgain from "../../../assets/Feedback/Tryagain.mp4";

export default function Slide4() {
  const [items, setItems] = useState(["ball", "cat", "book", "pen"]);
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState("hidden");

  function check() {
    const ball = document.querySelector(".ball");
    const cat = document.querySelector(".cat");
    const book = document.querySelector(".book");
    const pen = document.querySelector(".pen");
    setShow("visible");
    if (
      ball.innerHTML === "ball" &&
      cat.innerHTML === "cat" &&
      book.innerHTML === "book" &&
      pen.innerHTML === "pen"
    ) {
      setSrc(goodjob);
    } else {
      setSrc(tryAgain);
    }
  }

  function handleOnDrag(e, itemValue) {
    e.dataTransfer.setData("itemValue", itemValue);
  }
  function handleOnDrop(e) {
    const itemValue = e.dataTransfer.getData("itemValue");
    const newItems = items.filter((ele) => ele !== itemValue);
    if (!e.target.nextElementSibling.innerHTML) {
      setItems(newItems);
      e.target.nextElementSibling.innerHTML = itemValue;
    }
  }

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 4</title>
      </Helmet>
      <div className=" container h-full bg-white">
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Drag the word to correct picture.
        </h2>
        <div className="flex justify-between items-center w-3/12 border-2 border-[#25408F] border-solid m-auto mt-5 rounded-2xl py-1 px-4 mb-3">
          {items.map((item, index) => (
            <div
              key={index}
              className=" text-3xl draggable cursor-pointer"
              draggable="true"
              onDragStart={(e) => {
                handleOnDrag(e, item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="row gy-4 ">
          <div
            className="col-md-3 offset-3 flex flex-column items-center justify-center relative"
            onDragOver={(e) => {
              handleOnDragOver(e);
            }}
            onDrop={(e) => {
              handleOnDrop(e);
            }}
          >
            <img src={ballImg} alt="" className=" w-2/5" />
            <div className=" text-2xl ball"></div>
          </div>
          <div
            className="col-md-3 flex flex-column items-center justify-center relative"
            onDragOver={(e) => {
              handleOnDragOver(e);
            }}
            onDrop={(e) => {
              handleOnDrop(e);
            }}
          >
            <img src={catImg} alt="" className="w-2/5" />
            <div className=" text-2xl cat"></div>
          </div>
          <div
            className="col-md-3 offset-3 flex flex-column items-center justify-center relative"
            onDragOver={(e) => {
              handleOnDragOver(e);
            }}
            onDrop={(e) => {
              handleOnDrop(e);
            }}
          >
            <img src={bookImg} alt="" className="w-2/5" />
            <div className=" text-2xl book"></div>
          </div>
          <div
            className="col-md-3 flex flex-column items-center justify-center relative"
            onDragOver={(e) => {
              handleOnDragOver(e);
            }}
            onDrop={(e) => {
              handleOnDrop(e);
            }}
          >
            <img src={penImg} alt="" className="w-2/5" />
            <div className=" text-2xl pen"></div>
          </div>
        </div>
        <div className="row absolute bottom-[64px] right-3 w-full">
          <NavigationButton
            backPath={"/classroomgreetings/slide3"}
            nextPath={"/classroomgreetings/slide5"}
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
