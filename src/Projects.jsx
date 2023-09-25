import { Card, Button } from "react-bootstrap";
import "./styles/Projects.css";
import * as Icon from "react-bootstrap-icons";

function Projects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="containerProjects">
      <h1 className="titleSection">Projects</h1>
      <div className="rowProjects">
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.Calculator className="icon" />
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
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.CloudSunFill className="icon" />
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
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.Film className="icon" />
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
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.ListTask className="icon" />
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
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.BagFill className="icon" />
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
        <div className="cardPersonalized">
          <div className="card-side front">
            <Icon.QuestionSquare className="icon" />
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
      </div>
    </div>
  );
}

export default Projects;
