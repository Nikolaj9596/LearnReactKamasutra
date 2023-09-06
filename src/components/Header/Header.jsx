import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.loge}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
          alt=""
        />
      </div>
      <div className={style.login}>
        {props.isAuth ? <div>{props.login}</div> : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header
