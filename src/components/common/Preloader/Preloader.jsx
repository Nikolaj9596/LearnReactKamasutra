import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../assets/images/loader.svg";

const Preloader = (props) => {
  return (
    <div style={style.proloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
