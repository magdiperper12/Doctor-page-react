import { useRef, useEffect, useState } from "react";
import mountain from "./image/back.jpg";
import hand from "./image/hand.png";
import hokna from "./image/hokna.png";
import mesh from "./image/mesh.png";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Firstslide() {
  const ref = useRef();
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const moveElement = (direction, speed) => {
      const moveAmount = direction === "left" ? -speed : speed;
      setCurrentX((prevX) => prevX + moveAmount);
    };

    const animationId = requestAnimationFrame(() => moveElement("left", 600));
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
          offset={-0.001}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={0.3}
          speed={0.1}
          style={{ textAlign: "center", top: "100px", position: "absolute" }}
        >
          <img src={hand} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          style={{
            transform: `scale(.8) translateX(${currentX}px) translateY(${-currentX}px)`,
            transition: "transform 100s linear",
            top: "300px",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <img src={hokna} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          style={{
            transform: `scale(.8) translateY(${currentX}px) translateX(${-currentX}px)`,
            transition: "transform 100s linear",
            top: "0px",
            position: "absolute",
            textAlign: "left",
          }}
        >
          <img src={hokna} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          style={{
            transform: `scale(.8) translateY(${-currentX}px) translateX(${-currentX}px`,
            transition: "transform 100s linear",
            textAlign: "right",
            top: "300px",
            position: "absolute",
          }}
        >
          <img src={hokna} alt='' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.15}
          style={{
            textAlign: "right",
            transform: `scale(.8) translateY(${currentX}px) translateX(${-currentX}px)`,
            transition: "transform 250s linear",
            position: "absolute",
            top: "250px",
          }}
        >
          <img src={mesh} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0.15}
          style={{
            textAlign: "left",
            transform: `scale(.8) translateY(${currentX}px) translateX(${currentX}px)`,
            transition: "transform 250s linear",
            position: "absolute",
            top: "90px",
          }}
        >
          <img src={mesh} alt='' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0.15}
          style={{
            textAlign: "center",
            transform: `scale(.8) translateY(${currentX}px) translateX(${-currentX}px)`,
            transition: "transform 250s linear",
            position: "absolute",
            top: "0px",
          }}
        >
          <img src={mesh} alt='' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.3}
          speed={1.2}
          onClick={() => ref.current.scrollTo(3)}
          style={{
            transform: `scale(.8) translateX(${currentX}px)`,
            transition: "transform 2s ease-in",
            textAlign: "right",
            right: "-150px",
            top: "150px",
            position: "absolute",
          }}
        >
          <h1>
            <span style={{ marginTop: "-30px" }}>| </span> Moon
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={1.2}
          onClick={() => ref.current.scrollTo(3)}
          style={{
            transform: `scale(.8) translateX(${-currentX}px)`,
            transition: "transform 2s ease-in",
            textAlign: "left",
            top: "300px",
            position: "absolute",
          }}
        >
          <p>| sun</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
          style={{
            backgroundColor: "#000",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <h2>Keep Going!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Firstslide;
