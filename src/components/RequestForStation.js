import { useForm } from "react-hook-form";
import "./formBorder.css";
import i1 from "../images/i1.jpg";

function RequestForStation() {
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
  //console.log(errors);
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
        className="col-12 col-md-12 d-flex align-items-center flex-column justify-content-center "
        style={{ height: "100vh" }}
      >
        <form
          onSubmit={handleSubmit(onsubmit)}
          action=""
          className="bg-light d-flex align-items-center flex-column justify-content-center p-5 "
          style={{ width: "600px", borderRadius: "20px" }}
        >
          <div>
            <h3
              className="text-dark text-center"
              style={{ textDecoration: "underline" }}
            >
              Station Registration
            </h3>
            {/* <div className="fs-5 text-light fw-bold">Registration Number</div> */}
            <input
              className={`form-control my-1  ${
                errors.registrationNumber && "invalid"
              }`}
              style={{
                width: "400px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
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
                  message: "Station Registration Number is Minimum 10 Digits",
                },
                maxLength: {
                  value: 15,
                  message: "Station Registration Number is Maximum 15 Digits",
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
                width: "400px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
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
            {/* <div className="fs-5 text-light fw-bold my-1">Location</div> */}
            <input
              className={`form-control my-1  ${errors.location && "invalid"}`}
              style={{
                width: "400px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
              }}
              type="text"
              name="location"
              placeholder="Location"
              {...register("location", {
                required: "Location is Required",
              })}
              onKeyUp={() => {
                trigger("location");
              }}
            />
            {errors.location && (
              <small className="text-danger fs-6 p-1">
                {errors.location.message}
              </small>
            )}
          </div>
          <div>
            {/* <div className="fs-5 text-light fw-bold my-1">Name</div> */}
            <input
              className={`form-control   ${errors.stationName && "invalid"}`}
              style={{
                width: "400px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
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
              width: "400px",
              borderRadius: "20px",
              height: "50px",
              fontWeight: "bold",
            }}
          >
            Request For Station
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestForStation;