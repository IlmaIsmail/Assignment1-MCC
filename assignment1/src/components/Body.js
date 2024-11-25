import { sculptureList } from "./data/data";
import { Card } from "react-bootstrap";
import { useState } from "react";

export default function Body() {
  const [index, setIndex] = useState(0);
  const [dark, setDark] = useState(false);
  const Sculpture = sculptureList[index];

  //Change Index
  const nextEle = () => {
    console.log(sculptureList[index].name);
    if (index > sculptureList.length - 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const preEle = () => {
    if (index < 1) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const first = () => {
    setIndex(0);
  };

  const last = () => {
    setIndex(sculptureList.length - 1);
  };

  //Change dark mode/light mode
  const changeMode = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <div>
      <Card
        className="mb-3"
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>{Sculpture.name}</h1>
          <div className="row">
            <div className="col-md-4">
              <Card.Img variant="top" src={Sculpture.url} alt={Sculpture.alt} />
            </div>
            <div className="col-md-8">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Card.Title>Artist Name: {Sculpture.artist}</Card.Title>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={dark}
                    onChange={changeMode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark Theme
                  </label>
                </div>
              </div>
              <Card.Text>{Sculpture.description}</Card.Text>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={preEle} type="button" className="btn btn-primary">
              Previous
            </button>
            <button onClick={first} type="button" className="btn btn-secondary">
              First
            </button>
            <button onClick={last} type="button" className="btn btn-secondary">
              Last
            </button>
            <button onClick={nextEle} type="button" className="btn btn-primary">
              Next
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
