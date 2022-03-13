import { Dropdown } from "bootstrap";
import { DropdownButton } from "react-bootstrap";

function BookSlot() {
  return (
    <div
      className="container  d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="col-6 d-flex justify-content-center p-5 "
        style={{ borderRadius: "10px" }}
      >
        <form action="">
          <div>
            <select
              className="custom-select m-1 form-control"
              name=""
              id=""
              style={{ width: "400px" }}
            >
              <option value="">Select Vehicle Type</option>
              <option value="">Two Wheeler</option>
              <option value="">Three Wheeler</option>
              <option value="">Four Wheeler</option>
            </select>
          </div>
          <div>
            <input
              className="form-control m-1"
              style={{ width: "400px" }}
              type="text"
              name=""
              id=""
              placeholder="Vendor"
            />
          </div>
          <div>
            <input
              className="form-control m-1"
              style={{ width: "400px" }}
              type="text"
              name=""
              id=""
              placeholder="Vehicle Number"
            />
          </div>
          <button className="btn btn-primary  m-1" style={{ width: "200px" }}>
            <a href="#" className="text-decoration-none fs-6 text-light">
              Book Slot
            </a>
          </button>
          <button className="btn btn-primary m-1" style={{ width: "190px" }}>
            {" "}
            <a href="#" className="text-decoration-none fs-6 text-light">
              Claim Premium Access
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookSlot;
