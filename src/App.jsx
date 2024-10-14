import React from "react";
import logo from "./assets/logo-icon.png";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Restaurants from "./pages/Restaurants";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex items-center justify-between gap-10 px-10 ">
          <div className="log flex items-end gap-2">
            <img src={logo} alt="" className="h-10" />
            <h1 className="text-xl font-semibold">GeeksFood</h1>
          </div>
          <div className="nav flex items-center justify-center p-3 sm:text-lg text-sm font-semibold">
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/quote"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                Quote
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/resturants"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                Resturants
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/foods"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                Foods
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-md p-2">
            Get Started
          </button>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quote" element={<Quote />} />
          <Route exact path="/resturants" element={<Restaurants />} />
          <Route exact path="/foods" element={<Foods />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
