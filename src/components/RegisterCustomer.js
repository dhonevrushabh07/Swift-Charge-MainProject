import { Form } from "react-bootstrap";

function RegisterCust() {
  return (
    <div className="bg-black">
      <h1 className="text-light">This is Registration Page</h1>
      <form action="">
        <div className="row justify-content-center ">
          <div
            className="col-6 d-flex align-items-center flex-column justify-content-center"
            style={{ height: "500px", backgroundColor: "#48C9B0" }}
          >
            <h2 className="text-center">Registration Form</h2>
            <div>
              <div className="fs-5 text-dark fw-bold">User Name</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div>
              <div className="fs-5 text-dark fw-bold">Email Id</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <div className="fs-5 text-dark fw-bold">phone number </div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="text"
                name="phone "
                id="phone"
              />
            </div>

            <div>
              <div className="fs-5 text-dark fw-bold">Password</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <div className="fs-5 text-dark fw-bold">Confirm Password</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="password"
                name="conpassword"
                id="conpassword"
              />
            </div>
            <div>
              <input
                className="btn btn-primary m-2"
                style={{ width: "200px" }}
                type="button"
                value="Register"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterCust;
