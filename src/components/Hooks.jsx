import { useEffect, useRef } from "react";

export function useOnDraw(onDraw) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const mouseMoveListenerRef = useRef(null);
  const mouseDownListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);
  const prevPointRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };
  }, []);
  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      if (isDrawingRef.current) {
        const point = computePointInCanvas(e.clientX - 1, e.clientY - 1);
        const ctx = canvasRef.current.getContext("2d");
        if (onDraw) onDraw(ctx, point, prevPointRef.current);
        prevPointRef.current = point;
        console.log(point);
      }
    };
    mouseMoveListenerRef.current = mouseMoveListener;
    window.addEventListener("mousemove", mouseMoveListener);
  }

  function initMouseDownListener() {
    if (!canvasRef.current) return;
    const listener = () => {
      isDrawingRef.current = true;
    };
    mouseDownListenerRef.current = listener;
    canvasRef.current.addEventListener("mousedown", listener);
  }

  function initMouseUpListener() {
    if (!canvasRef.current) return;
    const listener = () => {
      isDrawingRef.current = false;
      prevPointRef.current = null;
    };
    mouseUpListenerRef.current = listener;
    window.addEventListener("mouseup", listener);
  }

  function computePointInCanvas(clientX, clientY) {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      };
    } else {
      return null;
    }
  }
  function setCanvasRef(ref) {
    if (!ref) return;
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(
        "mousedown",
        mouseDownListenerRef.current
      );
    }
    canvasRef.current = ref;
    initMouseMoveListener();
    initMouseDownListener();
    initMouseUpListener();
  }

  return setCanvasRef;
}
