import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import baseBack from "../../config/http-base-url-back.js";

// import { Container } from './styles';

import "./styles.css";

export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  // history.push("/home");
  const loginButton = async (event) => {
    event.preventDefault();
    try {
      const userCreate = await baseBack.post(`/user/login`, {
        email: email,
        password: password,
      });
      const result = userCreate.data;
      if (result === "User logged") {
        history.push("/home");
      }
    } catch (err) {
      alert(err.response.data);
    }
  };
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={loginButton}>
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
              <button type="submit" className="login-form-btn">
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
