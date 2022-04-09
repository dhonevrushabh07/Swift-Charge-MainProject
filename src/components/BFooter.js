import { Component } from "react";
import { Nav } from "react-bootstrap";
import i9 from "../images/i9.jpg";
function BFooter() {
  return (
    <div className="row d-flex" style={{ height: "40vh" }}>
      {" "}
      <div className="col-4 bg-dark text-light ">
        <div className="fw-bold fs-3 p-4 " style={{ fontFamily: "cursive" }}>
          <img
            src={i9}
            alt="img not found"
            style={{
              height: "80px",
              width: "150px",
              borderRadius: "50px",
              margin: "5px",
            }}
          />
          SwiftCharge
        </div>
        <div className="text-center my-2">
          The India's bookable home and destination EV charging network
        </div>
      </div>
      <div className="col-4 bg-danger"></div>
      <div className="col-4 bg-light">1</div>
    </div>
  );
}

export default BFooter;
