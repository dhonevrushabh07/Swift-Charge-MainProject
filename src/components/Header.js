import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import About from "./About";
import RequestForStation from "./RequestForStation";
import i9 from "../images/i9.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterCust from "./RegisterCustomer";
import BookSlot from "./BookSlot";
import Home from "./Home";
import { render } from "@testing-library/react";
import HomeContent from "./HomeContent";
import BFooter from "./BFooter";
import GMAP from "./GMap";
import { Dropdown } from "bootstrap";
import { FaUserAlt, FaRegUser } from "react-icons/fa";

function Header() {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "black", height: "70px" }}
        >
          <Container className="bg-dark p-0 ">
            <Navbar.Brand
              as={Link}
              to="/"
              className="fw-bold fs-3 text-light"
              style={{ fontFamily: "cursive" }}
            >
              <img
                src={i9}
                alt="img not found"
                style={{
                  height: "50px",
                  width: "70px",
                  borderRadius: "50px",
                  margin: "5px",
                }}
              />
              SwiftCharge
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to="/RegisterCustomer"
                  className="fw-bold text-light"
                >
                  Find Charging Point
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/RequestForStation"
                  className="fw-bold text-light"
                >
                  Add Charging Point
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  className="bg-dark "
                  style={{ borderRadius: "5px", width: "70px" }}
                  title={
                    <FaRegUser style={{ width: "20px", height: "20px" }} />
                  }
                  id="collasible-nav-dropdown"
                >
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <NavDropdown.Item
                      href="/signup"
                      className="bg-dark text-light mb-1 fw-bold text-center"
                      style={{ borderRadius: "10px", width: "100px" }}
                    >
                      Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/signin"
                      className="bg-dark text-light mb-1 fw-bold text-center"
                      style={{ borderRadius: "10px", width: "100px" }}
                    >
                      Sign In
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              </Nav>
              {/* <Nav>
                <Nav.Link as={Link} to="/signin" className="fw-bold text-light">
                  <button className="btn btn-dark"> Sign In</button>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/signup"
                  className="fw-bold text-light"
                >
                  <button className="btn btn-dark"> Sign Up</button>
                </Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <GMap /> */}
        <div>
          <Routes>
            <Route path="/" exact element={<HomeContent />} />
            <Route path="/RegisterCustomer" element={<RegisterCust />} />
            <Route path="/RequestForStation" element={<RequestForStation />} />
            <Route path="/signin" element={<BookSlot />} />
            <Route path="/signup" element={<RegisterCust />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
