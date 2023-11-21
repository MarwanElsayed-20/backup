import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../../../assets/home_btn.png";

export default function GoHomeButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={`absolute right-3 bottom-2 w-14 cursor-pointer z-50`}
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        <img src={home} alt="returnHomeImage" />
      </button>
    </>
  );
}
