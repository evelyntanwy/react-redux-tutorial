import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

export default function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setColor(evt.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}
