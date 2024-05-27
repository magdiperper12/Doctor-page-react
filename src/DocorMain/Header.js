import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./image/logo.webp";
import "animate.css";
import { React, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export function Navbare() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <Navbar
      expand='lg'
      className=' navbar'
      style={{ backgroundColor: " #dff6ff" }}
      dir='rtl'
    >
      <Container fluid>
        <Link to='/home' className='logolink'>
          <img src={logo} alt='' className='logo' />
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px", marginLeft: "200px" }}
            navbarScroll
          >
            <NavLink className='NavLink' to='/home'>
              الرئيسيه
            </NavLink>
            <NavLink className='NavLink' to='/Container'>
              التخصصات
            </NavLink>
            <NavLink className='NavLink' to='/Raiting'>
              الاعلي تقييما
            </NavLink>
            <NavLink className='NavLink' to='/aboute'>
              مقالات طبيه
            </NavLink>
            <NavLink className='NavLink' to='/Call'>
              تواصل معنا
            </NavLink>
            <NavDropdown title='صفحات' id='navbarScrollingDropdown'>
              <NavLink className='NavLink tic' to='/Working'>
                اعمالنا
              </NavLink>
              <NavLink className='NavLink tic' to='/Adress'>
                العنوان
              </NavLink>
              <NavLink className='NavLink tic' to='/Searvice'>
                خدمات
              </NavLink>
              <NavLink className='NavLink tic' to='/City'>
                المدن
              </NavLink>
            </NavDropdown>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='اسم الدكتور'
              className='me-2'
              aria-label='Search'
              ref={inputRef}
              style={{
                padding: "8px 20px",
              }}
            />
            <Button
              variant='outline-primary'
              style={{ padding: "0px 20px", marginRight: "10px" }}
            >
              بحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Slide() {
  return (
    <div className='slide'>
      <h1>
        احجز مع أفضل <span style={{ color: "red" }}>دكتور</span> في مصر
      </h1>
      <h1>تقدر تختار دكتورك المناسب</h1>
    </div>
  );
}
