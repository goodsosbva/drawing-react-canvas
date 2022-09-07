import React from "react";
import 'style.css';

function freeView() {
  return (
    <div>
      <div className="canvas-wrap">
        <canvas id="jsCanvas" className="canvas"></canvas>
        <div class="status__box">
          <div id="color__status" className="color__preview">
            PAINT
          </div>
          <canvas id="line__canvas" className="line__status"></canvas>
        </div>
      </div>
      <div className="controls">
        <div className="controls__range">
          <input
            type="range"
            id="jsRange"
            min="0.5"
            max="6.5"
            value="3.5"
            step="0.1"
          />
        </div>
        <div className="controls__btns">
          <button id="jsMode">Paint</button>
          <button id="jsSave">Save</button>
          <button id="jsReset">Reset</button>
        </div>
        <div className="controls__colors" id="jsColors">
          <div
            className="controls__color jsColor"
            style="background-color: #2C2C2C;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: white;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #FF3b00;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #FF9500;"
          ></div>
          <div
            class="controls__color jsColor"
            style="background-color: #FFCC00;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #4CD963;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #5AC8FA;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #0579FF;"
          ></div>
          <div
            className="controls__color jsColor"
            style="background-color: #5856D6;"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default freeView;
