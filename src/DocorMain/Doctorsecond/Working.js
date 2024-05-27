import React from "react";
import { NavLink } from "react-router-dom";

function Working() {
  return (
    <div style={{ paddingTop: "90px", height: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1>Our Working</h1>

            <span>Our Working</span>
            <NavLink className='NavLink' to='/home'>
              {` >   الرئيسيه`}
            </NavLink>
          </div>
        </footer>
      </div>

      <br />
    </div>
  );
}

export default Working;
