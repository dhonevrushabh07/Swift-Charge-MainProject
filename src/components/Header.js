import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <h1 className="bg-primary text-center m-0" style={{ height: "60px" }}>
        Hello Welcome to Swift Charge
      </h1>
      {/*Adding Nabar  */}
      <div className="row bg-black">
        <div className="col-7 text-light fs-1">Logo</div>
        <div className="col-5">
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "70px" }}
          >
            <div className="col-4">
              <button className="btn-info btn-lg">About</button>
            </div>
            <div className="col-4">
              <button className="btn-info btn-lg">Contact</button>
            </div>
            <div className="col-4">
              <button className="btn-info btn-lg">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
