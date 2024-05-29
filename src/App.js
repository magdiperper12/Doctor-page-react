import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbare, Slide } from "./DocorMain/Header";
import { Contain, Minmumslide } from "./DocorMain/Container";
import { Footer, Footer2 } from "./DocorMain/Fooetr";
import Aboute from "./DocorMain/Doctorsecond/Aboute";
import Raiting from "./DocorMain/Doctorsecond/Raiting";
import Call from "./DocorMain/Doctorsecond/Call";
import Working from "./DocorMain/Doctorsecond/Working";
import Adress from "./DocorMain/Doctorsecond/Adress";
import Searvice from "./DocorMain/Doctorsecond/Searvice";
import City from "./DocorMain/Doctorsecond/City";
import Profile from "./DocorMain/Doctorsecond/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/Doctor-page-react'
          element={
            <div className='App'>
              <Navbare />
              <Slide />
              <Contain />
              <Minmumslide />
              <Footer />
              <Footer2 />
            </div>
          }
        ></Route>
        <Route
          path='/home'
          element={
            <div className='App'>
              <Navbare />
              <Slide />
              <Contain />
              <Minmumslide />
              <Footer />
              <Footer2 />
            </div>
          }
        ></Route>
        <Route
          path='/Container'
          element={
            <div className='App'>
              <Navbare />
              <div style={{ paddingTop: "200px" }}>
                <Contain />
              </div>
            </div>
          }
        ></Route>
        <Route
          path='/Raiting'
          element={
            <div className='App'>
              <Navbare />
              <Raiting />
            </div>
          }
        ></Route>
        <Route
          path='/aboute'
          element={
            <div className='App'>
              <Navbare />
              <Aboute />
            </div>
          }
        ></Route>
        <Route
          path='/Call'
          element={
            <div className='App'>
              <Navbare />
              <Call />
            </div>
          }
        ></Route>
        <Route
          path='/Working'
          element={
            <div className='App'>
              <Navbare />
              <Working />
            </div>
          }
        ></Route>
        <Route
          path='/Adress'
          element={
            <div className='App'>
              <Navbare />
              <Adress />
            </div>
          }
        ></Route>
        <Route
          path='/Searvice'
          element={
            <div className='App'>
              <Navbare />
              <Searvice />
            </div>
          }
        ></Route>
        <Route
          path='/City'
          element={
            <div className='App'>
              <Navbare />
              <City />
            </div>
          }
        ></Route>
        <Route
          path='/Profile'
          element={
            <div className='App'>
              <Navbare />
              <Profile />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
