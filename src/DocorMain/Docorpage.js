import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Row, Col } from "react-bootstrap";
import {
  faShieldHalved,
  faUser,
  faHeart,
  faBell,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import doct from "./image/im.jpg";

export default function Doctorpage() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "86px",
          width: "100%",
          backgroundColor: "#fff",
          zIndex: "999",
        }}
      >
        <Row className='heading'>
          <Col style={{ display: "flex", gap: "15px " }} lg='4' sm='12'>
            <div className='signal'>
              <span>7</span>
              <FontAwesomeIcon
                icon={faHeart}
                className='m-2 fs-5 text-secondary'
              />
            </div>
            <div className='signal'>
              <span>21</span>
              <FontAwesomeIcon
                icon={faBell}
                className='m-2 fs-5 text-primary'
              />
            </div>
            <div className='signal'>
              <span>58</span>
              <FontAwesomeIcon
                icon={faMessage}
                className='m-2 fs-5 text-secondary'
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className='m-2 fs-5 text-secondary'
              />
            </div>
          </Col>
          <Col lg='4' sm='12'>
            <input type='text' placeholder='search' />
          </Col>
          <Col lg='4' sm='12' className='icon'>
            <img src='' alt='' />
            <FontAwesomeIcon icon={faShieldHalved} />
          </Col>
        </Row>
      </div>

      <div>
        <Row className='bodycontain'>
          <Col lg='6' sm='12' className='textcont'>
            <h1>لقد تم ارسال رساله الي بريدك الالكتروني</h1>
            <div>
              <FontAwesomeIcon icon={faStar} className='icon' />
              <FontAwesomeIcon icon={faStar} className='icon' />
              <FontAwesomeIcon icon={faStar} className='icon' />
              <FontAwesomeIcon icon={faStar} className='icon' />
            </div>
            <button>التالي</button>
            <p>
              احجز مجانا وادفع في العياده{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>اضغط هنا</span>
            </p>
          </Col>
          <Col lg='6' sm='12'>
            <img src={doct} alt='' />
          </Col>
        </Row>
      </div>
    </div>
  );
}
