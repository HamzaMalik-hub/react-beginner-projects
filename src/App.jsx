import { useState } from "react";


function App() {
  const [backgroundColor, setBackgroundColor] = useState("White");
  return (
    <div
      style={{
        BackgroundColor: backgroundColor,
        minHeight: "100px",
        padding: "20px",
      }}
    >

      <h1
        style={{ color: "black" }}>
        Color Change
      </h1>

      <p style={{ color: "black" }}>
        Current color: {backgroundColor}
      </p>
      <button onClick={() => setBackgroundColor("lightblue")}>
        Blue
      </button>

      <button onClick={() => setBackgroundColor("lightgreen")}>
        Green
      </button>

      <button onClick={() => setBackgroundColor("lightpink")}>
        pink
      </button>

      <button onClick={() => setBackgroundolor ("White")}>
        Reset
      </button>

    </div>

  );
}

export default App;