import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isColor, setIsColor] = useState("black");
  const [oneTime, setOneTime] = useState(false);
  const [isRange, setIsRange] = useState(3);
  const [curMode, setCurMode] = useState("PAINT");

  useEffect(() => {
    if (oneTime === false) {
      setOneTime(true);
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const context = canvas.getContext("2d");
      context.scale(2, 2);
      context.lineCap = "round";
    }
    // const canvas = canvasRef.current;
    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;

    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;

    // const context = canvas.getContext("2d");
    // context.scale(2, 2);
    // context.lineCap = "round";
    setCurMode("PAINT");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // 색상
    const curColor = isColor;
    context.strokeStyle = curColor;
    // 굵기
    context.lineWidth = isRange;

    contextRef.current = context;
  }, [isColor, isRange, oneTime]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    setOneTime(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const fillCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = isColor;
    setCurMode("FILL");
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const changeRange = (e) => {
    setIsRange(e.target.value);
  }


  return (
    <div>
      <div className="canvas-wrap">
        <canvas
          id="jsCanvas"
          className="canvas"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        ></canvas>
        <div class="status__box">
          {/* 현재 색 상태 표시 */}
          <div id="color__status" className="color__preview" style={{backgroundColor: isColor}}>
            {curMode}
          </div>
          <canvas id="line__canvas" className="line__status"></canvas>
        </div>
      </div>
      <div className="controls">
        <div className="controls__range">
          <input
            type="range"
            id="jsRange"
            min="1"
            max="10"
            step="0.1"
            onChange={changeRange}
          />
        </div>
        <div className="controls__btns">
          <button id="jsMode" onClick={fillCanvas}>
            Paint
          </button>
          <button id="jsSave">Save</button>
          <button id="jsReset" onClick={clearCanvas}>
            Reset
          </button>
        </div>
        <div className="controls__colors" id="jsColors">
          <div
            className="controls__color jsColor"
            style={{ background: "#2C2C2C" }}
            onClick={() => {
              setIsColor("#2C2C2C");
            }}
            data-color="#2C2C2C"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "white" }}
            onClick={() => {
              setIsColor("white");
            }}
            data-color="white"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#FF3b00" }}
            onClick={() => {
              setIsColor("#FF3b00");
            }}
            data-color="#FF3b00"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#FF9500" }}
            onClick={() => {
              setIsColor("#FF9500");
            }}
            data-color="#FF9500"
          ></div>
          <div
            class="controls__color jsColor"
            style={{ background: "#FFCC00" }}
            onClick={() => {
              setIsColor("#FFCC00");
            }}
            data-color="#FFCC00"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#4CD963" }}
            onClick={() => {
              setIsColor("#4CD963");
            }}
            data-color="#4CD963"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#5AC8FA" }}
            onClick={() => {
              setIsColor("#5AC8FA");
            }}
            data-color="#5AC8FA"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#0579FF" }}
            onClick={() => {
              setIsColor("#0579FF");
            }}
            data-color="#0579FF"
          ></div>
          <div
            className="controls__color jsColor"
            style={{ background: "#5856D6" }}
            onClick={() => {
              setIsColor("#5856D6");
            }}
            data-color="#5856D6"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
