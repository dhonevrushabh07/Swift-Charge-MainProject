import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function RegisterCust() {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    conpassword: "",
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formErrors);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "UserName is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a Valid Email format";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    }
    if (!values.password) {
      errors.password = "password is required ";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 character ";
    } else if (values.password.length > 10) {
      errors.password = "password can not ne more than 10  characters ";
    }
    if (!values.conpassword) {
      errors.conpassword = "conpassword is required ";
    } else if (values.conpassword !== values.password) {
      errors.conpassword = "password is not matched ";
    }

    return errors;
  };
  return (
    <div className="container ">
      {/* <h1 className="text-light">This is Registration Page</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center m-0 ">
          <div className="col-12 col-md-6 d-flex align-items-center flex-column justify-content-center h">
            <h3
              className="text-center text-light "
              style={{ textDecoration: "underline" }}
            >
              Registration Form
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
              <div className="fs-5 text-light fw-bold">User Name</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.username}</p>
            </div>

            <div>
              <div className="fs-5 text-light fw-bold">Email Id</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.email}</p>
            </div>

            <div>
              <div className="fs-5 text-light fw-bold">Phone Number </div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.phone}</p>
            </div>

            <div>
              <div className="fs-5 text-light fw-bold">Password</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="text-danger">{formErrors.password}</p>
            </div>

            <div>
              <div className="fs-5 text-light fw-bold">Confirm Password</div>
              <input
                className="form-control"
                style={{ width: "300px" }}
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
                className="btn btn-primary m-2"
                style={{ width: "200px" }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterCust;
