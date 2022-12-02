import { React, useState } from "react";
import logoImg from "../../assets/logo.png";
// import { Container } from './styles';

import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const showAlert = () => {
    alert("I'm an alert");
  };
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logoImg} alt="Jovem Programador" />
            </span>
            <span className="login-form-title"> Bem vindo </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
              {/* setEmail("teste") */}
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button onClick={showAlert} className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              {/* <span className="txt1">Não possui conta?</link></span> */}
              <a className="txt2" href="/register">
                Criar conta
              </a>
              <link to="/register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
