import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {
  faMagnifyingGlass,
  faLocationDot,
  faStethoscope,
  faUser,
  faTableCells,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "./box.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Contain() {
  const [raitHeight, setRaitHeight] = useState("197vh");
  const [over, setover] = useState("hidden");

  const handleButtonClick = () => {
    setRaitHeight("100%");
    setover("auto");
  };

  const [search, setsearch] = useState("");

  const boxing =
    Box &&
    Box.filter((cont) => {
      return (
        search.toLowerCase() === "" ||
        cont.first_name.toLowerCase().includes(search.toLowerCase())
      );
    }).map((cont, index) => {
      const icon =
        cont.icon === "faStethoscope"
          ? faStethoscope
          : cont.icon === "faLocationDot"
          ? faLocationDot
          : null;

      return (
        <div className=' col-lg-3 col-md-3 col-sm-12 ' key={index}>
          <div className='box ' style={{ width: "90%", margin: "30px auto" }}>
            <NavLink
              className='NavLink'
              style={{
                padding: "0px 0px 0px ",
                width: "100%",
                height: "30px",
                overflow: "hidden",
                color: " #003b80",
              }}
              to='/Raiting'
            >
              {cont.first_name} {cont.last_name}
            </NavLink>
            <p>{cont.city}</p>
            <div className='signal'>
              <FontAwesomeIcon
                icon={icon}
                className='boxicon text-primary fa-beat'
                Spin
              />
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className='filter '
          style={{
            backgroundColor: "rgb(15 117 189)",
            borderRadius: "30px",
            boxShadow: "5px 5px 10px rgba(0, 0, 171, 0.258)",
            position: "absolute",
            top: "0px",
            width: "80%",
            padding: "20px",
          }}
        >
          <div style={{ margin: "5px 0px" }}>
            <Row className='g-2 pt-5 pb-5 px-1'>
              <div
                md
                style={{
                  overflow: "hidden",
                  margin: "10px 0 0 17px",
                  textAlign: "center",
                }}
                className='order-lg-first order-md-last order-sm-last col-lg-2 col-md-6 col-sm-12'
              >
                <Button className='serbtn' variant='outline-light'>
                  بحث
                </Button>
              </div>

              <Col
                md
                style={{ overflow: "hidden" }}
                className='mt-2 mb-2 ml-0 mr-5'
              >
                <Form.Control
                  type='text'
                  onChange={(e) => setsearch(e.target.value)}
                  placeholder='اسم الطبيب'
                  style={commonStyle}
                />
              </Col>

              <Col
                md
                style={{ overflow: "hidden" }}
                className='mt-2 mb-2 ml-0 mr-2'
              >
                <Form.Control
                  type='text'
                  placeholder='المدينه'
                  style={commonStyle}
                />
              </Col>

              <Col
                md
                style={{ overflow: "hidden" }}
                className='mt-2 mb-2 ml-0 mr-2'
              >
                <Form.Select
                  aria-label='Floating label select example'
                  style={commonStyle}
                  onChange={(e) => setsearch(e.target.value)}
                >
                  <option style={{ position: "relative", width: "100%" }}>
                    <span style={{ marginRight: "40px" }}>المحافظه</span>
                  </option>
                  {Box.map((cont, index) => (
                    <option value={index} key={index}>
                      {cont.city}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col
                md
                style={{ overflow: "hidden" }}
                className='mt-2 mb-2 ml-0 mr-2 '
              >
                <Form.Select
                  aria-label='Floating label select example'
                  style={commonStyle}
                >
                  <option>التخصص</option>
                  {Box.map((cont, index) => (
                    <option value={index} key={index}>
                      {cont.contry}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <div
          className='Specialties row'
          style={{ maxHeight: raitHeight, overflow: over }}
        >
          {boxing}
        </div>
        <div className='alltec'>
          <button style={{ margin: "auto" }} onClick={handleButtonClick}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='icon'
              style={{ margin: "5px 10px 0px 0px " }}
            />
            كل الخصصات في القاهرة
          </button>
        </div>
      </div>
    </div>
  );
}

export function Minmumslide() {
  return (
    <div>
      <section
        className='call-action overlay'
        data-stellar-background-ratio='0.5'
        style={{ backgroundPosition: "-25px 780.138p" }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: " #0000a375",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div className='row minimumslide' style={{ margin: "auto" }}>
            <div className='col-lg-2 col-md-6 col-12'>
              <FontAwesomeIcon
                icon={faBriefcaseMedical}
                border
                className='foicon fa-spin'
              />
              <h1>3762</h1>
              <p>مستشفي</p>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <FontAwesomeIcon icon={faUser} className='foicon fa-spin' />
              <h1>262</h1>
              <p>دكتور متخصص</p>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <FontAwesomeIcon
                icon={faFaceSmile}
                border
                className='foicon fa-spin'
              />
              <h1>5342</h1>
              <p>مريض </p>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <FontAwesomeIcon
                icon={faTableCells}
                border
                className='foicon fa-spin'
              />
              <h1>12</h1>
              <p>سنوات الخبره</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const commonStyle = {
  color: "#000",
  backgroundColor: "#fff",
  border: "none",
  padding: "17px",
  textAlign: "right",
};

/*import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const SearchComponent = ({ setsearch, Box }) => {
  const commonStyle = {
    color: "#000",
    backgroundColor: "#fff",
    border: "none",
    padding: "17px",
    textAlign: "right",
  };

  return (
    <Row className="g-2 pt-5 pb-5 px-1">
      <Col
        md
        style={{ overflow: "hidden", margin: "10px 0 0 17px" }}
        className="order-lg-first order-md-last order-sm-last"
      >
        <Button className="serbtn" variant="outline-light">
          بحث
        </Button>
      </Col>

      <Col md style={{ overflow: "hidden" }} className="m-2 ">
        <Form.Control
          type="text"
          onChange={(e) => setsearch(e.target.value)}
          placeholder="اسم الطبيب"
          style={commonStyle}
        />
      </Col>

      <Col md style={{ overflow: "hidden" }} className="m-2">
        <Form.Select
          aria-label="Floating label select example"
          style={commonStyle}
          onChange={(e) => setsearch(e.target.value)}
        >
          <option style={{ position: "relative", width: "100%" }}>
            <span style={{ marginRight: "40px" }}>المحافظه</span>
          </option>
          {Box.map((cont, index) => (
            <option value={index} key={index}>
              {cont.city}
            </option>
          ))}
        </Form.Select>
      </Col>

      <Col md style={{ overflow: "hidden" }} className="m-2">
        <Form.Control
          type="text"
          placeholder="المدينه"
          style={commonStyle}
        />
      </Col>

      <Col md style={{ overflow: "hidden" }} className="m-2">
        <Form.Select
          aria-label="Floating label select example"
          style={commonStyle}
        >
          <option>التخصص</option>
          {Box.map((cont, index) => (
            <option value={index} key={index}>
              {cont.contry}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default SearchComponent;
*/
