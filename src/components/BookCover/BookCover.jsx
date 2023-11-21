import React from "react";
import bg from "../../assets/BookCover/Background.png";
import child from "../../assets/BookCover/Child.png";
import bookName from "../../assets/BookCover/BookName.png";
import play from "../../assets/BookCover/button.png";

import { useNavigate } from "react-router-dom";
import FullScreenButton from "../Buttons/FullScreenButton/FullScreenButton";
import { Helmet } from "react-helmet";

export default function BookCover() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Cover</title>
      </Helmet>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container p-0">
          <FullScreenButton />
          <div className="row m-0 relative">
            <div className="col-md-8 p-0">
              <img
                src={child}
                className="w-100 h-screen"
                alt="bookCoverImage"
              />
            </div>
            <div className="col-md-4 p-0">
              <img
                src={bookName}
                className=" absolute w-[70%] h-[60%] right-0"
                alt="bookNameImage"
              />
              <button
                className=" absolute bottom-[15%] right-[10%] w-[10%]"
                onClick={() => {
                  navigate("/contents");
                }}
              >
                <img src={play} alt="StartBookImage" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
