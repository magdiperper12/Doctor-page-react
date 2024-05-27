import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../image/im.jpg";
import { Card, Button } from "react-bootstrap";
import Box from "../box.json";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Raiting() {
  const [raitHeight, setRaitHeight] = useState("244vh");
  const [over, setover] = useState("hidden");

  const handleButtonClick = () => {
    setRaitHeight("100%");
    setover("auto");
  };

  const boxing =
    Box &&
    Box.map((cont, index) => {
      return (
        <Card
          style={{ width: "20rem", padding: "20px" }}
          key={index}
          className='box col-lg-3 col-md-4 col-sm-6 m-3'
        >
          <Card.Img variant='top' src={images} style={{ height: "180px" }} />
          <Card.Body>
            <Card.Title>
              <h4 style={{ display: "inline" }}>Dr. </h4>
              {cont.first_name}
            </Card.Title>
            <Card.Text style={{ padding: "0px 50px 0px 0px" }}>
              <FontAwesomeIcon
                icon={faStar}
                className=' p-2'
                Spin
                style={{ color: " rgb(213, 210, 37)" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                className=' p-2 '
                Spin
                style={{ color: " rgb(213, 210, 37)" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                className=' p-2'
                Spin
                style={{ color: " rgb(213, 210, 37)" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                className=' p-2'
                Spin
                style={{ color: " rgb(213, 210, 37)" }}
              />
            </Card.Text>

            <div style={{ width: "100%", textAlign: "center" }}>
              <Button style={{ backgroundColor: "rgb(15 117 189)" }}>
                <NavLink
                  className='NavLink '
                  style={{
                    padding: "0px 10px",
                    color: "#fff",
                    fontSize: "15px ",
                  }}
                  to='/Profile'
                >
                  الصفحه الشخصيه
                </NavLink>
              </Button>
            </div>
          </Card.Body>
        </Card>
      );
    });
  return (
    <div style={{ paddingTop: "90px", height: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1>Raiting</h1>
            <NavLink className='NavLink' to='/home'>
              الرئيسيه {" < "}
            </NavLink>
            <span>Raiting</span>
          </div>
        </footer>
      </div>
      <div
        className='row cantizm '
        id='rait'
        style={{ height: raitHeight, overflow: over }}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: "600",
            padding: "0px 0px 20px 0px",
            color: "#144c9a",
          }}
          className='head'
        >
          the most populer
        </h3>{" "}
        {boxing}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          margin: "30px",
        }}
      >
        <button
          onClick={handleButtonClick}
          id='btn'
          style={{
            padding: "10px 30px",
            backgroundColor: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Raiting;
