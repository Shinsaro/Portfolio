import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactLogo from "./pictures/logo192.png";
import Badge from "react-bootstrap/Badge";
import { View } from "react-native-web";
import "./styles/Skills.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="1"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src={ReactLogo}
      style={{ height: 100, width: 100, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>React</p>
    <Badge bg="success">Principiante</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="2"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg"
      style={{ height: 100, width: 150, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>NojeJS</p>
    <Badge bg="success">Principiante</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="3"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp-1920x1080.png"
      style={{ height: 100, width: 175, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>C#</p>
    <Badge bg="success">Avanzado</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="4"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://i.pinimg.com/originals/44/59/32/4459321c4e61adc58c584aa00788d148.png"
      style={{ height: 100, width: 125, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>HTML</p>
    <Badge bg="success">Intermedio</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="5"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png"
      style={{ height: 100, width: 185, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>CSS</p>
    <Badge bg="success">Principiante</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="6"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://www.drupal.org/files/project-images/bootstrap-stack.png"
      style={{ height: 100, width: 150, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>Bootstrap</p>
    <Badge bg="success">Intermedio</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="7"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://sourcemarketstorage.blob.core.windows.net/postscontent/ayala/2570.png"
      style={{ height: 100, width: 150, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>Karma</p>
    <Badge bg="success">Principiante</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="7"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png"
      style={{ height: 100, width: 150, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>MongoDB</p>
    <Badge bg="success">Principiante</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="7"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://th.bing.com/th/id/R.8d073ac5b1e5c5e25317f26ce2c7bcba?rik=Ib2CaqU1FI0Llg&pid=ImgRaw&r=0"
      style={{ height: 100, width: 150, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>Github</p>
    <Badge bg="success">Intermedio</Badge>
  </View>,
  <View
    onDragStart={handleDragStart}
    className="item"
    data-value="7"
    role="presentation"
    style={{ marginRight: 50 }}
  >
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ"
      style={{ height: 100, width: 110, alignSelf: "center" }}
      alt="logoReact"
    />
    <p style={{ fontSize: 30, textAlign: "center" }}>VS Code</p>
    <Badge bg="success">Intermedio</Badge>
  </View>,
];

const responsive = {
  0: {
    items: 1,
  },
  400: {
    items: 3,
  },
  800: {
    items: 7,
  },
  2000: {
    items: 10,
  },
};

const Skills = () => {
  return (
    <div>
      <h1 className="titleSection">Skills</h1>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlayStrategy="none"
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        disableDotsControls
        disableButtonsControls
      />
    </div>
  );
};

export default Skills;
