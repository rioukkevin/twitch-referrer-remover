import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Options = () => (
  <>
    <div>
      En gros, quand on arrive avec un raid on ne compte pas dans les stats,
      ducoup il faut enlever l'indicateur de raid dans l'url, ?referer=raid,
      cette extension permet de le faire en 1 click
    </div>
    <a href="https://ibb.co/5L7c88Z">
      <img
        src="https://i.ibb.co/cQmTFFq/Screenshot-2022-06-09-at-18-34-48.png"
        alt="Screenshot-2022-06-09-at-18-34-48"
      ></img>
    </a>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
