import React, { useEffect, useState } from "react";
import "./styles.css";
import { Row, Col, Table, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import baseBack from "../../config/http-base-url-back.js";
import plus from "../../assets/plus.png";

function MyVerticallyCenteredModal(props) {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      style={{ opacity: 1 }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ textAlign: "center", alignContent: "center" }}
        >
          Create a new bus line
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="form" onSubmit={showAlert}>
            <div className="form-title">
              <h4>Bus Line</h4>
            </div>
            <div>
              <input
                type="text"
                value={enterprise}
                onChange={(e) => setEnterprise(e.target.value)}
                placeholder="Enterprise"
                style={{
                  width: "50%",
                  textAlign: "center",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                style={{
                  width: "50%",
                  textAlign: "center",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                style={{
                  width: "50%",
                  textAlign: "center",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginTop: "15px",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={trajectory}
                onChange={(e) => setTrajectory(e.target.value)}
                placeholder="Trajectory"
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginTop: "15px",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={trajectoryDuration}
                onChange={(e) => setTrajectoryDuration(e.target.value)}
                placeholder="Trajectory Duration"
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginTop: "15px",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={DepartureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                placeholder="Departure Time"
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginTop: "15px",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                style={{
                  width: "50%",
                  textAlign: "center",
                  marginTop: "15px",
                  position: "relative",
                  left: "25%",
                  top: "10px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} textAlign="center">
          Close
        </Button>
        <Button type="submit">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  // eslint-disable-next-line
  const history = useHistory();
  const [busLine, setBusLine] = useState([]);
  useEffect(() => {
    baseBack.get("/bus/all").then(({ data }) => {
      setBusLine(data);
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <div className="header"></div>
      <div className="Container">
        <div className="ContainerShow">
          <div className="form">
            <div style={{ height: "100%" }} className="Clients"></div>
            <Row>
              <Button
                style={{
                  align: "Right",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "right",
                }}
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                <img src={plus} alt="plus" size="13" />
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Col className="table">
                <Table responsive striped hover>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Trajectory</th>
                      <th>Trajectory Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {busLine.map((busLine) => (
                      <tr style={{ cursor: "pointer" }} key={busLine._id}>
                        <td>{busLine.Enterprise}</td>
                        <td>{busLine.City}</td>
                        <td>{busLine.State}</td>
                        <td>{busLine.Trajectory}</td>
                        <td>{busLine.Trajectory_duration}</td>
                        <td>{busLine.Price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
