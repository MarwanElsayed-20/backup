import React from "react";
import { useOnDraw } from "./Hooks";

export default function Canvas({ width, height }) {
  const setCanvasRef = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#25408F", 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <>
      <canvas
        width={width}
        height={height}
        ref={setCanvasRef}
        className=" absolute left-[300px] top-[85px] z-[9999]"
      />
    </>
  );
}
