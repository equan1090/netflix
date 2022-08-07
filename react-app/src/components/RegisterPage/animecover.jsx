import React from "react";
import "./animecover.css";
import { useState } from "react";

export default function AnimeCover({ img, title }) {
  const [selected, setSelected] = useState(false);

  const toggleSelect = () => setSelected(!selected);
  let styles = {
    border: `3px solid ${selected ? "red" : "transparent"}`,
    borderRadius: "2px",
  };

  return (
    <div onClick={toggleSelect} className="signup-animecover">
      <img style={styles} className="signup-animecover--img" src={img} />
      <span>{title}</span>
    </div>
  );
}
