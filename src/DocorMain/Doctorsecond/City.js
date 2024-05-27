import { Link, NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Box from "../box.json";

function City() {
  const boxing =
    Box &&
    Box.map((cont, index) => {
      return (
        <ListGroup.Item
          key={index}
          className='click'
          style={{ transition: "0.1s" }}
        >
          <Link to='/Raiting' className='link'>
            {" "}
            <span> {index + 1} - </span> {cont.city}
          </Link>
        </ListGroup.Item>
      );
    });

  return (
    <div style={{ paddingTop: "90px", height: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1>City</h1>

            <span>City</span>
            <NavLink className='NavLink' to='/home'>
              {` >   الرئيسيه`}
            </NavLink>
          </div>
        </footer>
      </div>
      <div style={{ margin: "50px" }}>
        <ListGroup dir='rtl' style={{ width: "70%", margin: "auto" }}>
          {boxing}
        </ListGroup>
      </div>
    </div>
  );
}

export default City;
