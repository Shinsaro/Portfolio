import { Card, Button, Row } from "react-bootstrap";
import foto from "./pictures/Daco_4319404.png";
import calculatorProject from "./pictures/CalculatorProject.png";
import "./styles/Projects.css";
import * as Icon from "react-bootstrap-icons";

function Projects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <h1 className="titleSection">Projects</h1>
      <Row className="containerProjects">
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.Calculator style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>Calculator App</Card.Title>
              <Card.Text>Calculator made in React.</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.CloudSunFill style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>Weather App</Card.Title>
              <Card.Text>A weather app made in React.</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.Film style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>Catalog Movies App</Card.Title>
              <Card.Text>A movie catalog made in React.</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.ListTask style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>To-do App</Card.Title>
              <Card.Text>A to-do app made in React.</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.BagFill style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>Shopping App</Card.Title>
              <Card.Text>
                A simulation of a shopping app made in React.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "25rem",
            padding: 0,
            borderStyle: "none",
          }}
        >
          <div className="card-side front">
            <Icon.QuestionSquare style={{ fontSize: "20rem" }} />
          </div>
          <div className="card-side back">
            <Card.Body className="bodyCard">
              <Card.Title>Calculator App</Card.Title>
              <Card.Text>
                A simple calculator made in React. You will be able to make all
                simple operations.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  openInNewTab("https://shinsaro.github.io/Calculator/")
                }
              >
                Open
              </Button>
            </Card.Body>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Projects;
