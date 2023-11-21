import React from "react";
import GoHomeButton from "../Buttons/GoHomeButton/GoHomeButton";

import header from "../../assets/ClassRoomGreetings/header.png";

export default function Footer() {
  return (
    <>
      <div
        className=" h-16 absolute bottom-0 right-0 left-0 z-[9999]"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
        }}
      >
        <GoHomeButton />
      </div>
    </>
  );
}
