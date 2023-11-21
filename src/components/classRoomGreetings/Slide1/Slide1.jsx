import React from "react";
import { Helmet } from "react-helmet";

import listeningIcon from "../../../assets/ClassRoomGreetings/slide1/listen.png";

import goodMorningManAudio from "../../../assets/ClassRoomGreetings/slide1/audio/Good morning children 2.mp3";
import goodMorningWomanAudio from "../../../assets/ClassRoomGreetings/slide1/audio/Good morning children.mp3";
import goodMorningBlalAudio from "../../../assets/ClassRoomGreetings/slide1/audio/Good morning Mr Bilal.mp3";
import missBatolAudio from "../../../assets/ClassRoomGreetings/slide1/audio/I am Miss Batool.mp3";
import AudioButton from "../../Buttons/AudioButton/AudioButton";
import NavigationButton from "../../Buttons/NavigationButton/NavigationButton";

export default function Slide1() {
  const play = (audio) => {
    new Audio(audio).play();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BackUp - Book 1 | Classroom Greetings - Slide 1</title>
      </Helmet>
      <div className=" container h-full relative  bg-white">
        <h2 className=" text-2xl font-medium text-[#25408F] flex items-center pt-3 ms-3 before:content[''] before:w-6 before:h-6 before:rounded-full before:bg-yellow-400 before:inline-block before:me-1 ">
          Listen and follow.
        </h2>
        <div className="flex justify-center items-center h-[450px] bg-white relative">
          <img src={listeningIcon} alt="" className=" w-10/12 h-full" />
          <AudioButton
            top={"top-[35px]"}
            left={"left-[350px]"}
            audio={play}
            audioProp={goodMorningWomanAudio}
          />
          <AudioButton
            top={"top-[65px]"}
            left={"left-[375px]"}
            audio={play}
            audioProp={missBatolAudio}
          />
          <AudioButton
            top={"top-[235px]"}
            left={"right-[490px]"}
            audio={play}
            audioProp={goodMorningManAudio}
          />
          <AudioButton
            top={"top-[270px]"}
            left={"right-[435px]"}
            audio={play}
            audioProp={goodMorningBlalAudio}
          />
        </div>

        <div className="row absolute bottom-[121px] w-full">
          <NavigationButton
            backPath={"/contents"}
            nextPath={"/classroomgreetings/slide2"}
            visibility={"hidden"}
          />
        </div>
      </div>
    </>
  );
}
