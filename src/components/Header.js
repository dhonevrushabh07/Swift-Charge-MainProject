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

function Header() {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#30a3b0" }}
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              className="fw-bold fs-3"
              style={{ fontFamily: "cursive" }}
            >
              <img
                src={i9}
                alt="img not found"
                style={{
                  height: "80px",
                  width: "150px",
                  borderRadius: "50px",
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
                  style={{ textDecoration: "underline" }}
                >
                  Find Charging Point
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/RequestForStation"
                  className="fw-bold text-light"
                  style={{ textDecoration: "underline" }}
                >
                  Add Charging Point
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/signin"
                  className="fw-bold text-light"
                  style={{ textDecoration: "underline" }}
                >
                  <button className="btn btn-dark"> Sign In</button>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/signup"
                  className="fw-bold text-light"
                  style={{ textDecoration: "underline" }}
                >
                  <button className="btn btn-dark"> Sign Up</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
