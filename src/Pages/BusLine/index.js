import React, { useState } from "react";
import baseBack from "../../config/http-base-url-back";

import "./styles.css";

export default function BusLine() {
  const [enterprise, setEnterprise] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [trajectory, setTrajectory] = useState("");
  const [trajectoryDuration, setTrajectoryDuration] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [price, setPrice] = useState("");

  const showAlert = async (event) => {
    event.preventDefault();
    try {
      await baseBack.post(`/bus/create`, {
        enterprise: enterprise,
        country: country,
        state: state,
        city: city,
        trajectory: trajectory,
        trajectory_duration: trajectoryDuration,
        departure_time: DepartureTime,
        price: price,
      });
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-register">
          <div className="wrap-register">
            <form className="register-form" onSubmit={showAlert}>
              <span className="register-form-title"></span>
              <span className="register-form-title"> Crie uma linha nova </span>

              <div className="wrap-input">
                <input
                  type="text"
                  value={enterprise}
                  onChange={(e) => setEnterprise(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Enterprise"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Country"></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <span className="focus-input" data-placeholder="State"></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <span className="focus-input" data-placeholder="City"></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={trajectory}
                  onChange={(e) => setTrajectory(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Trajectory"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={trajectoryDuration}
                  onChange={(e) => setTrajectoryDuration(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Trajectory Duration"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={DepartureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Departure Time"
                ></span>
              </div>

              <div className="wrap-input">
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Price"></span>
              </div>

              <div className="container-register-form-btn">
                <button className="register-form-btn" type="submit">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
