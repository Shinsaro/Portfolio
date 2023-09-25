import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactLogo from "./pictures/logo192.png";
import "./styles/Skills.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="1"
    role="presentation"
  >
    <img
      className="imageElement"
      src={ReactLogo}
      style={{ height: 100, width: 100 }}
      alt="logoReact"
    />
    <p className="textElement">React</p>
    <p className="levelSkill">Principiante</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="2"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg"
      style={{ height: 100, width: 150 }}
      alt="logoReact"
    />
    <p className="textElement">NojeJS</p>
    <p className="levelSkill">Principiante</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="3"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp-1920x1080.png"
      style={{ height: 100, width: 175 }}
      alt="logoReact"
    />
    <p className="textElement">C#</p>
    <p className="levelSkill">Avanzado</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="4"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://i.pinimg.com/originals/44/59/32/4459321c4e61adc58c584aa00788d148.png"
      style={{ height: 100, width: 125 }}
      alt="logoReact"
    />
    <p className="textElement">HTML</p>
    <p className="levelSkill">Intermedio</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="5"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png"
      style={{ height: 100, width: 185 }}
      alt="logoReact"
    />
    <p className="textElement">CSS</p>
    <p className="levelSkill">Principiante</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="6"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://www.drupal.org/files/project-images/bootstrap-stack.png"
      style={{ height: 100, width: 150 }}
      alt="logoReact"
    />
    <p className="textElement">Bootstrap</p>
    <p className="levelSkill">Intermedio</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="7"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://sourcemarketstorage.blob.core.windows.net/postscontent/ayala/2570.png"
      style={{ height: 100, width: 150 }}
      alt="logoReact"
    />
    <p className="textElement">Karma</p>
    <p className="levelSkill">Principiante</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="7"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png"
      style={{ height: 100, width: 150 }}
      alt="logoReact"
    />
    <p className="textElement">MongoDB</p>
    <p className="levelSkill">Principiante</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="7"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://th.bing.com/th/id/R.8d073ac5b1e5c5e25317f26ce2c7bcba?rik=Ib2CaqU1FI0Llg&pid=ImgRaw&r=0"
      style={{ height: 100, width: 150 }}
      alt="logoReact"
    />
    <p className="textElement">Github</p>
    <p className="levelSkill">Intermedio</p>
  </div>,
  <div
    onDragStart={handleDragStart}
    className="elementOfCarousel"
    data-value="7"
    role="presentation"
  >
    <img
      className="imageElement"
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ"
      style={{ height: 100, width: 110 }}
      alt="logoReact"
    />
    <p className="textElement">VS Code</p>
    <p className="levelSkill">Intermedio</p>
  </div>,
];

const responsive = {
  0: {
    items: 1,
  },
  400: {
    items: 2,
  },
  800: {
    items: 5,
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
