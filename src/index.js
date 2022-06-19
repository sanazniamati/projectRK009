import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Line
          x={20}
          y={5}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"red"}
          strokeWidth={15}
          lineCap={"round"}
          lineJoin={"round"}
          tension={1}
        />
        {/*dashed line*/}
        <Line
          x={20}
          y={55}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"green"}
          strokeWidth={2}
          lineJoin={"round"}
          lineCap={"round"}
          /* line segments with a length of 33px with a gap of 10px */
          dash={[33, 10]}
          tension={0.5}
        />
        {/*complex dashed and dotted line*/}
        <Line
          x={20}
          y={105}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"blue"}
          strokeWidth={10}
          lineJoin={"round"}
          lineCap={"round"}
          /* line segments with a length of 29px with a gap
           * of 20px followed by a line segment of 0.001px (a dot)
           * followed by a gap of 20px
           */
          dash={[29, 20, 0.001, 20]}
          tension={0.7}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
