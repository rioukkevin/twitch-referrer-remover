import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#1F1F23",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: 35 }}>Made with</span>
      <span style={{ color: "red", fontSize: 35, marginBottom: 15 }}>♥️</span>
      <span>
        by{" "}
        <a href="https://kevin.riou.pro" style={{ color: "#EEFF07" }}>
          RIOU Kévin
        </a>
      </span>
      <span>alias Keequer</span>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
