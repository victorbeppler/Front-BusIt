import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import baseBack from "../../config/http-base-url-back.js";

import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line

  const handleClick = async () => {
    console.log("Clicou no botão");
    useHistory.push("/");
    // await baseBack.post(`/user/create`, {
    //   name: name,
    //   email: email,
    //   birthdate: nascimento,
    //   password: password,
    // });
  };
  const showAlert = async () => {
    await baseBack.post(`/user/create`, {
      name: name,
      email: email,
      birthdate: nascimento,
      password: password,
    });
  };
  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form">
            <span className="register-form-title">
              <img src={logoImg} alt="Jovem Programador" />
            </span>
            <span className="register-form-title"> Crie uma conta </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>

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
                className={email !== "" ? "has-val input" : "input"}
                type="text"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Birth Date"
              ></span>
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

            <div className="container-register-form-btn">
              <button className="register-form-btn" onClick={showAlert}>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
