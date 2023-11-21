import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContentsButton({ navigation, src }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-4 d-flex justify-center items-center">
        <button
          className="w-[75%] cursor-pointer"
          onClick={() => {
            navigate(navigation);
          }}
        >
          <img src={src} alt="button" />
        </button>
      </div>
    </>
  );
}
