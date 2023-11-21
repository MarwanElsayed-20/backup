import React, { useEffect, useState } from "react";

export default function FeedBack({ src, show }) {
  const [display, setDisplay] = useState(show);
  useEffect(() => {
    setDisplay(show);
  }, [show]);
  return (
    <div
      className={`flex flex-col justify-center items-center bg-white rounded-lg w-2/4 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${display} z-[9999]`}
    >
      <video src={src} autoPlay></video>
    </div>
  );
}
