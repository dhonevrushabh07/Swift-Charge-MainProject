import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import i1 from "../images/i1.jpg";
import "./formBorder.css";
import axios from "axios";

function RegisterCust() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    conpassword: "",
  };
  // let state = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   conpassword: "",
  // };
  // let user = {
  //   Name: this.state.uname,
  //   email: this.state.email,
  //   phone: this.state.phone,
  //   password: this.state.password,
  // };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    // this.setState({ name: e.target.value });
    // this.setState({ email: e.target.value });
    // this.setState({ phone: e.target.value });
    // this.setState({ password: e.target.value });
    // this.setState({ conpassword: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    //   await axios.post(`http://localhost:8081/register`, { user }).then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formErrors);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /^[a-zA-Z ]/;
    const regex2 = /^[a-zA-Z ]{2,30}$/;
    const regex3 = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    const regex4 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!values.name) {
      errors.name = "Name is required ";
    } else if (!regex1.test(values.name)) {
      errors.name = "Name should be charater";
    } else if (!regex2.test(values.name)) {
      errors.name =
        "Minimum 2 character and Maximum than 30 character required";
    }
    if (!values.email) {
      errors.email = "email is required Like xyz123@gmail.com";
    } else if (!regex.test(values.email)) {
      errors.email =
        "This is not a Valid Email format required Like xyz12@gmail.com";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    } else if (!regex3.test(values.phone)) {
      errors.phone = "Please enter valid 10 digit phone number";
    }
    if (!values.password) {
      errors.password = "password is required ";
    } else if (!regex4.test(values.password)) {
      errors.password = "Please enter valid password";
    }
    if (!values.conpassword) {
      errors.conpassword = "confirm password is required ";
    } else if (values.conpassword !== values.password) {
      errors.conpassword = "password is not matched ";
    }

    return errors;
  };
  return (
    <div
      style={{
        backgroundImage: `url(${i1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.3)",
        height: "100vh",
      }}
    >
      <div
        className="col-12  col-md-12 d-flex align-items-center justify-content-center "
        style={{ height: "120vh" }}
      >
        {/* <h1 className="text-light">This is Registration Page</h1> */}
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center justify-content-center  "
          style={{
            width: "600px",
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <div>
            <div>
              <h3
                className="text-center text-dark "
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Registration
              </h3>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <h3 className="ui message success text-light">
                  Registered Successfuly
                </h3>
              ) : (
                <pre className="text-light">
                  {/* {JSON.stringify(formValues, undefined, 2)} */}
                </pre>
              )}
              <div>
                {/* <div className="fs-5 text-light fw-bold">User Name</div> */}
                <input
                  className="form-control"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.name}</p>
              </div>

              <div>
                {/* <div className="fs-5 text-light fw-bold">Email Id</div> */}
                <input
                  className="form-control"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                  type="text"
                  name="email"
                  placeholder="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.email}</p>
              </div>

              <div>
                {/* <div className="fs-5 text-light fw-bold">Phone Number </div> */}
                <input
                  className="form-control"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.phone}</p>
              </div>

              <div>
                {/* <div className="fs-5 text-light fw-bold">Password</div> */}
                <input
                  className="form-control"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.password}</p>
              </div>

              <div>
                {/* <div className="fs-5 text-light fw-bold">Confirm Password</div> */}
                <input
                  className="form-control"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                  type="password"
                  name="conpassword"
                  placeholder="Confirm Password"
                  value={formValues.conpassword}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.conpassword}</p>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary m-2"
                  style={{
                    width: "400px",
                    borderRadius: "20px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCust;
