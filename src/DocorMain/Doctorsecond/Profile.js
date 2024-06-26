import React, { useState } from "react";
import image from "../image/im.jpg";
import {
  faLocationDot,
  faStar,
  faUser,
  faStethoscope,
  faCircleXmark,
  faRotateLeft,
  faMagnifyingGlass,
  faExpand,
  faArrowsUpDown,
  faRotateRight,
  faArrowsLeftRight,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import images from "../image/slider.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export const imagesdoc = [
  { image: images },
  { image: image },
  { image: images },
  { image: image },
  { image: images },
  { image: image },
  { image: images },
  { image: image },
];

function Profile() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % imagesdoc.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + imagesdoc.length) % imagesdoc.length
    );
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const imageElements = imagesdoc.map((img, index) => (
    <img
      src={img.image}
      alt=''
      key={index}
      onClick={() => handleImageClick(index)}
      style={{
        cursor: "pointer", // Adding a pointer cursor to indicate clickability
      }}
    />
  ));

  function RotateLeft() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotate(90deg)";
    lage.style.transition = "0.5s";
  }

  function RotateRight() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotate(-90deg)";
    lage.style.transition = "0.5s";
  }
  function rotx() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotatex(180deg)";
    lage.style.transition = "0.5s";
  }
  function roty() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotatey(180deg)";
    lage.style.transition = ".5s";
  }

  return (
    <div style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <div
        className='row container'
        dir='rtl'
        style={{
          margin: "20px auto",
          backgroundColor: "#fff",
          boxShadow: "3px 3px 9px #ccc",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div className='col-lg-8 col-md-12 col-sm-12 '>
          <div className='row'>
            <img
              className='col-lg-4 col-md-6 col-sm-12'
              src={image}
              alt=''
              style={{
                maxWidth: "250px",
                margin: "20px",
                borderRadius: "30px",
              }}
            />
            <div className='col-lg-7 col-md-6 col-sm-12 p-4'>
              <h3 style={{ fontWeight: "600", color: "#1a5e80" }}>
                Dr . عماد الدين عزت عبدالرازق{" "}
              </h3>
              <p>
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#40839a", marginLeft: "10px" }}
                    Spin
                  />
                </span>
                استشاري وكبير اطباء
              </p>
              <p>
                التقييم :
                <span style={{ marginRight: "20px", color: " #a6bf00" }}>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                </span>
              </p>

              <div className=' carousel '>
                {imageElements}
                {selectedIndex !== null && (
                  <div className='overlayStyle'>
                    <div className='carouselStyle'>
                      <button onClick={handlePrev} style={navButtonStyle}>
                        ‹
                      </button>
                      <img
                        src={imagesdoc[selectedIndex].image}
                        alt=''
                        id='lage'
                        style={carouselImageStyle}
                      />
                      <button onClick={handleNext} style={navButtonStyle}>
                        ›
                      </button>
                    </div>
                    <div className='headericon'>
                      <FontAwesomeIcon
                        onClick={handleClose}
                        className='btnClose'
                        icon={faCircleXmark}
                      />
                      <FontAwesomeIcon
                        className='btnClose'
                        icon={faRotateRight}
                        onClick={RotateRight}
                      />
                      <FontAwesomeIcon
                        className='btnClose'
                        icon={faRotateLeft}
                        onClick={RotateLeft}
                      />
                      <FontAwesomeIcon className='btnClose' icon={faExpand} />
                      <FontAwesomeIcon
                        className='btnClose'
                        icon={faArrowsUpDown}
                        onClick={rotx}
                      />
                      <FontAwesomeIcon
                        className='btnClose'
                        icon={faArrowsLeftRight}
                        onClick={roty}
                      />
                      <FontAwesomeIcon className='btnClose' icon={faShare} />
                      <div
                        className='btnClose'
                        style={{
                          left: "30px",
                          position: "absolute",
                          fontSize: "20px",
                          padding: "2px",
                        }}
                      >
                        {8}/{selectedIndex + 1}
                      </div>
                    </div>
                    <div className='galleryWrap'>
                      {imagesdoc.map((img, index) => (
                        <img
                          src={img.image}
                          alt=''
                          key={index}
                          className='single'
                          onClick={() => handleImageClick(index)}
                          style={{
                            cursor: "pointer", // Adding a pointer cursor to indicate clickability
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginLeft: "10px", color: "#40839a" }}
                Spin
              />
            </span>
            شارع البحر المحله الكبري[...] عنوان العيادة بالكامل وارقام الهاتف
            يتم اظهارهم بعد الحجز
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#ecfaff",
              cursor: "pointer",
              padding: "10px 20px",
              margin: "20px 0px",
              position: "relative",
            }}
          >
            سعر الكشف 200 جنيه ${" "}
            <button
              className='bttn'
              style={{
                width: "auto",
                padding: "2px 20px",
                position: "absolute",
                left: "7%",
                bottom: "15%",
                backgroundColor: "#0f75bd",
              }}
            >
              احجز الان
            </button>
          </div>
        </div>

        <div className='col-lg-4 col-md-12 col-sm-12 '>
          <ListGroup
            dir='rtl'
            style={{ width: "80%", margin: "50px auto", color: "#40039a" }}
          >
            <ListGroup.Item style={{ color: "#40839a" }}>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginLeft: "10px" }}
                  Spin
                />{" "}
              </span>
              القاهره
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#40839a" }}>
              <span>
                <FontAwesomeIcon
                  icon={faStethoscope}
                  style={{ marginLeft: "5px" }}
                  Spin
                />{" "}
              </span>
              انف واذن وحنجرة
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#40839a" }}>
              <Form.Group as={Col} controlId='formGridEmail'>
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginLeft: "10px" }}
                    Spin
                  />
                </span>
                <Form.Label style={{ marginRight: "5px" }}>Doc name</Form.Label>
                <h6 style={{ color: "#90839a", paddingRight: "60px" }}>
                  {`عماد الدين عزت عبدالرازق `}
                </h6>
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#40839a" }}>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ marginLeft: "5px" }}
                  Spin
                />{" "}
              </span>
              التقييم
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#40839a" }}>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginLeft: "10px" }}
                  Spin
                />{" "}
              </span>{" "}
              نقوم بعرض بيانات الأطباء الخاصة بالعيادات ولا نقوم بنشر بيانات
              الأطباء الشخصية
            </ListGroup.Item>
            <button
              className=' text-light p-2'
              style={{
                backgroundColor: "#0f75bd",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              البحث عن دكتور اخر
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ marginRight: "10px", color: "#fff" }}
                  Spin
                />
              </span>
            </button>
          </ListGroup>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 row'>
          <div className='row' style={{ textAlign: "center" }}>
            <div className='col-lg-3 col-md-3 col-sm-6'>الملخص</div>
            <div className='col-lg-3 col-md-3 col-sm-6'>المواقع</div>
            <div className='col-lg-3 col-md-3 col-sm-6'>المراجعات</div>
            <div className='col-lg-3 col-md-3 col-sm-6'>ساعات العمل</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const carouselImageStyle = {
  transform: "scale(8)",
  margin: "0 500px",
};

const navButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "4rem",
  padding: "0px 25px 5px 25px",
  borderRadius: "50%",
  cursor: "pointer",
};
