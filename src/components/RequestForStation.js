function RequestForStation() {
  return (
    <div className="d-flex justify-content-center">
      <div className="container col-4" style={{ height: "100vh" }}>
        <form action="">
          <div>
            <h3 className="text-light" style={{ textDecoration: "underline" }}>
              Station Registration Form
            </h3>
            <div className="fs-5 text-light fw-bold">Registration Number</div>
            <input
              className="form-control my-1"
              style={{ width: "300px" }}
              type="text"
              name="username"
              placeholder="Registration Number"
            />
          </div>

          <div>
            <div className="fs-5 text-light fw-bold my-1">User Id</div>
            <input
              className="form-control"
              style={{ width: "300px" }}
              type="text"
              name="userId"
              placeholder="User Id"
            />
          </div>
          <div>
            <div className="fs-5 text-light fw-bold my-1">Location</div>
            <input
              className="form-control"
              style={{ width: "300px" }}
              type="text"
              name="location"
              placeholder="Location"
            />
          </div>
          <div>
            <div className="fs-5 text-light fw-bold my-1">Name</div>
            <input
              className="form-control"
              style={{ width: "300px" }}
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <button className="btn btn-primary  my-2" style={{ width: "300px" }}>
            Request For Station
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestForStation;
