import { useForm } from "react-hook-form";
import "./formBorder.css";
import i1 from "../images/i1.jpg";
import Header from "./Header";

function NewStylePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Header />
      <div className="row">
        <div
          className="col-7 "
          style={{
            backgroundImage: `url(${i1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "10px",
            height: "100vh",
          }}
        >
          Anvi
        </div>
        <div className="col-5 ">
          {/* start of form */}
          <div>
            <div
              className="col-12 col-md-12 d-flex align-items-center flex-column justify-content-center"
              style={{ height: "100vh" }}
            >
              <form
                onSubmit={handleSubmit(onsubmit)}
                action=""
                style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              >
                <div>
                  <h3 className="text-back text-center">
                    Station Registration
                  </h3>
                  {/* <div className="fs-5 text-light fw-bold">Registration Number</div> */}
                  <input
                    className={`form-control my-1  ${
                      errors.registrationNumber && "invalid"
                    }`}
                    style={{
                      width: "300px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      height: "50px",
                      width: "400px",
                    }}
                    type="text"
                    name="registrationNumber"
                    placeholder="Registration Number"
                    {...register("registrationNumber", {
                      required: "Registration Number Required",

                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only Numbers are allowed",
                      },
                      minLength: {
                        value: 10,
                        message:
                          "Station Registration Number is Minimum 10 Digit",
                      },
                      maxLength: {
                        value: 15,
                        message:
                          "Station Registration Number is Maximum 15 Digit",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("registrationNumber");
                    }}
                  />
                  {errors.registrationNumber && (
                    <small className="text-danger fs-6 p-1">
                      {errors.registrationNumber.message}
                    </small>
                  )}
                </div>

                <div>
                  {/* <div className="fs-5 text-light fw-bold my-1">User Id</div> */}
                  <input
                    className={`form-control   ${errors.userId && "invalid"}`}
                    style={{
                      width: "300px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      height: "50px",
                      width: "400px",
                    }}
                    type="text"
                    name="userId"
                    placeholder="User Id"
                    {...register("userId", {
                      required: "User Id Required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only Numbers are allowed",
                      },
                      maxLength: {
                        value: 5,
                        message: "User Id length is Maximum 5 Digit",
                      },
                      minLength: {
                        value: 1,
                        message: "User Id length is minimum 1 Digit",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("userId");
                    }}
                  />
                  {errors.userId && (
                    <small className="text-danger fs-6 p-1">
                      {errors.userId.message}{" "}
                    </small>
                  )}
                </div>
                <div>
                  {/* Latittude*/}
                  <input
                    className={`form-control my-1  ${
                      errors.latittude && "invalid"
                    }`}
                    style={{
                      width: "300px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      height: "50px",
                      width: "400px",
                    }}
                    type="text"
                    name="latittude"
                    placeholder="Latittude"
                    {...register("latittude", {
                      required: "Latittude is Required",
                    })}
                    onKeyUp={() => {
                      trigger("latittude");
                    }}
                  />
                  {errors.latittude && (
                    <small className="text-danger fs-6 p-1">
                      {errors.latittude.message}
                    </small>
                  )}
                </div>
                <div>
                  {/* Longitude*/}
                  <input
                    className={`form-control my-1  ${
                      errors.longitude && "invalid"
                    }`}
                    style={{
                      width: "300px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      height: "50px",
                      width: "400px",
                    }}
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    {...register("longitude", {
                      required: "Longitude is Required",
                    })}
                    onKeyUp={() => {
                      trigger("longitude");
                    }}
                  />
                  {errors.longitude && (
                    <small className="text-danger fs-6 p-1">
                      {errors.longitude.message}
                    </small>
                  )}
                </div>

                <div>
                  {/* <div className="fs-5 text-light fw-bold my-1">Name</div> */}
                  <input
                    className={`form-control   ${
                      errors.stationName && "invalid"
                    }`}
                    style={{
                      width: "300px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      height: "50px",
                      width: "400px",
                    }}
                    type="text"
                    name="stationName"
                    placeholder="Station Name"
                    {...register("stationName", {
                      required: "Station Name is Required",
                      minLength: {
                        value: 10,
                        message: "Station name contains minimum 10 character",
                      },
                      maxLength: {
                        value: 30,
                        message: "Station name contains maximum 30 character",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("stationName");
                    }}
                  />
                  {errors.stationName && (
                    <small className="text-danger fs-6 p-1">
                      {errors.stationName.message}
                    </small>
                  )}
                </div>
                <button
                  className="btn btn-primary  my-2"
                  style={{
                    width: "300px",
                    fontWeight: "bold",
                    borderRadius: "50px",
                    height: "50px",
                    width: "400px",
                  }}
                >
                  Request For Station
                </button>
              </form>
            </div>
          </div>
          {/* End of form */}
        </div>
      </div>
    </div>
  );
}
export default NewStylePage;
