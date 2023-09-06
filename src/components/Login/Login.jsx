import React from "react";
import style from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={style.selectorName}>
      <h1>Login</h1>
      <form>
        <div>
          <input placeholder={"Login"}/>
        </div>
        <div>
          <input placeholder={"Password"}/>
        </div>
        <div>
          <input type={"checkbox"}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>

      
    </div>
  );
};

export default Login;
