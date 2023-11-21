import React from "react";
import { Helmet } from "react-helmet";
import bg from "../../assets/Contents/Background.png";
import FullScreenButton from "../Buttons/FullScreenButton/FullScreenButton";
import cat1 from "../../assets/Contents/U1.png";
import cat2 from "../../assets/Contents/U2.png";
import cat3 from "../../assets/Contents/U3.png";
import cat4 from "../../assets/Contents/U4.png";
import cat5 from "../../assets/Contents/U5-01.png";
import cat6 from "../../assets/Contents/U6.png";
import cat7 from "../../assets/Contents/U7.png";
import cat8 from "../../assets/Contents/U8.png";
import ContentsButton from "../Buttons/ContentsButton/ContentsButton";
import GoHomeButton from "../Buttons/GoHomeButton/GoHomeButton";

export default function Contents() {
  const imgSrc = [
    { src: cat1, navigate: "/classroomgreetings/slide1" },
    { src: cat2, navigate: "" },
    { src: cat3, navigate: "" },
    { src: cat4, navigate: "" },
    { src: cat5, navigate: "" },
    { src: cat6, navigate: "" },
    { src: cat7, navigate: "" },
    { src: cat8, navigate: "" },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Contents</title>
      </Helmet>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <FullScreenButton />
          <h1 className="font-black text-[4rem] text-white text-center py-12 uppercase text-shadow-outline">
            contents
          </h1>
          <div className="row gy-4 mx-[200px]">
            {imgSrc.map((img, index) => (
              <ContentsButton
                navigation={img.navigate}
                src={img.src}
                key={index}
              />
            ))}
          </div>
          <GoHomeButton />
        </div>
      </div>
    </>
  );
}
