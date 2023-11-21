import React from "react";

export default function Loading() {
  return (
    <>
      <div className="position-absolute z-[99999999] start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center bg-white overflow-hidden">
        <div
          className="spinner-border border-cyan-700 border-r-transparent"
          role="status"
        ></div>
      </div>
    </>
  );
}
