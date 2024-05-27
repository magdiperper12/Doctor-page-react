import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Box from "./drug.json";

function Aboute() {
  const [raitHeight, setRaitHeight] = useState("150px");
  const [over, setover] = useState("hidden");

  const handleButtonClick = () => {
    setRaitHeight("auto");
    setover("auto");
  };
  const boxing =
    Box &&
    Box.map((cont, index) => {
      return (
        <Card key={index} className='box col-lg-3 col-md-6 col-sm-12 m-5'>
          <Card.Img variant='top' src={cont.image} />
          <Card.Body>
            <Card.Title>
              <h4 style={{ display: "inline" }}>Drug : </h4>
              {cont.drug}
            </Card.Title>
            <Card.Text style={{ height: raitHeight, overflow: over }}>
              {cont.paragraph}
            </Card.Text>
            <Button
              style={{ backgroundColor: "rgb(15 117 189)" }}
              onClick={handleButtonClick}
            >
              المقال كامل
            </Button>
          </Card.Body>
        </Card>
      );
    });
  return (
    <div style={{ paddingTop: "90px", height: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1>Medical blog</h1>

            <span>Medical blog</span>
            <NavLink className='NavLink' to='/home'>
              {` >   الرئيسيه`}
            </NavLink>
          </div>
        </footer>
      </div>
      <div className='row cantizm ' id='rait'>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "600",
            padding: "0px 0px 20px 0px",
            color: "#144c9a",
          }}
          className='head'
        >
          Medical blog
        </h3>{" "}
        {boxing}
      </div>
    </div>
  );
}

export default Aboute;
