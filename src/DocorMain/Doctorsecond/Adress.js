import React from "react";
import { NavLink } from "react-router-dom";
import { Footer2 } from "../Fooetr";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Address() {
  return (
    <div style={{ paddingTop: "90px", minHeight: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1> Address</h1>

            <span>Address</span>
            <NavLink className='NavLink' to='/home'>
              {` >   الرئيسيه`}
            </NavLink>
          </div>
        </footer>
      </div>
      <div
        className='row email'
        style={{ marginTop: "80px", marginBottom: "80px" }}
      >
        <div
          className='col-lg-6 col-md-6 col-sm-12 bg-primary text-white p-4'
          style={{ overflow: "hidden", height: "55vh" }}
        >
          Location
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
          {" "}
          <Row className='mb-3'>
            <Form.Group sm as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group sm as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group sm as={Col} controlId='formGridAddress1'>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder='1234 Main St' />
            </Form.Group>
            <Form.Group sm as={Col} controlId='formGridAddress2'>
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder='Phone' />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Location</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Form.Group className='mb-3' id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
        <div className='row col-lg-12 text-white'>
          <div className=' col-lg-4 col-md-6 col-sm-12'>
            <div
              className='box m-5 bg-primary  '
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                fontSize: "40px",
              }}
            >
              <span>
                <FontAwesomeIcon icon={faPhone} className=' fa-beat  ' Spin />
              </span>
              <span>
                <div
                  style={{ fontSize: "18px", fontWeight: "900" }}
                  className='mb-2'
                >
                  +(000) 1234 56789
                </div>
                <div style={{ fontSize: "14px" }}>info@company.com</div>
              </span>
            </div>
          </div>
          <div className=' col-lg-4 col-md-6 col-sm-12'>
            <div
              className='box m-5 bg-primary  '
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                fontSize: "40px",
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className=' fa-beat  '
                  Spin
                />
              </span>
              <span>
                <div
                  style={{ fontSize: "18px", fontWeight: "900" }}
                  className='mb-2'
                >
                  2 Fir e Brigade Road
                </div>
                <div style={{ fontSize: "14px" }}>Chittagonj, Lakshmipur</div>
              </span>
            </div>
          </div>
          <div className=' col-lg-4 col-md-6 col-sm-12'>
            <div
              className='box m-5 bg-primary  '
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                fontSize: "40px",
              }}
            >
              <span>
                <FontAwesomeIcon icon={faClock} className='  fa-beat  ' Spin />
              </span>
              <span>
                <div
                  style={{ fontSize: "18px", fontWeight: "900" }}
                  className='mb-2'
                >
                  Mon - Sat: 8am - 5pm
                </div>
                <div style={{ fontSize: "14px" }}>Sunday Closed</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

export default Address;
