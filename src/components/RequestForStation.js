import { useForm } from "react-hook-form";
import "./formBorder.css";
import i1 from "../images/i1.jpg";
import { useState } from "react";

function RequestForStation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [requestData, setRequestData] = useState({});

  const onsubmit = (data) => {
    console.log(data);
    reset();
  };
  function submitRequest(e) {
    e.preventDefault();
  }
  //console.log(errors);
  return (
    <div
      style={{
        //  backgroundImage: `url(${i1})`,
        //  backgroundRepeat: "no-repeat",
        //  backgroundSize: "cover",
        backgroundColor: "rgba(255,255,255,0.9)",
        height: "100vh",
      }}
    >
      <div
        className="col-12 col-md-12 d-flex align-items-center flex-column justify-content-center "
        style={{ height: "100vh" }}
      >
        <form
          // onSubmit={handleSubmit(onsubmit)}
          onSubmit={handleSubmit(submitRequest)}
          action=""
          className=" d-flex align-items-center flex-column justify-content-center p-5 "
          style={{
            width: "600px",
            backgroundColor: "whitesmoke",
            border: "10px solid white",
            borderRadius: "10px",
          }}
        >
          <div>
            <h3 className="text-dark text-center p-2">Station Registration</h3>
            {/* <div className="fs-5 text-light fw-bold">Registration Number</div> */}
            <input
              className={`form-control my-1  ${
                errors.registrationNumber && "invalid"
              }`}
              style={{
                width: "400px",
                borderRadius: "5px",
                height: "45px",
                border: "2px solid black",
              }}
              type="text"
              value={requestData.registrationNumber}
              onBeforeInputCapturech
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
              className={`form-control   ${errors.totalPoints && "invalid"}`}
              style={{
                width: "400px",
                borderRadius: "5px",
                height: "45px",
                border: "2px solid black",
              }}
              type="number"
              name="totalPoints"
              value={requestData.totalPoints}
              placeholder="Total Points"
              {...register("totalPoints", {
                required: "Total Points Required",
                pattern: {
                  value: /^[0-9]{1,2}$/,
                  message: "Only Numbers are allowed",
                },
                max: {
                  value: 99,
                  message: "Maximum 99 Points are allowed",
                },
                min: {
                  value: 1,
                  message: "Minimum 1 Point is required",
                },
              })}
            />
            {errors.totalPoints && (
              <small className="text-danger fs-6 p-1">
                {errors.totalPoints.message}{" "}
              </small>
            )}
          </div>
          <div>
            {/* Latittude*/}
            <input
              className={`form-control my-1  ${errors.latittude && "invalid"}`}
              style={{
                width: "300px",
                borderRadius: "5px",
                height: "45px",
                width: "400px",
                border: "2px solid black",
              }}
              type="text"
              name="latittude"
              placeholder="Latittude"
              {...register("latittude", {
                required: "Latittude is Required",
                pattern: {
                  value: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/,
                  message: "Please Enter Valid Lattitude",
                },
              })}
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
              className={`form-control my-1  ${errors.longitude && "invalid"}`}
              style={{
                width: "300px",
                borderRadius: "5px",
                height: "45px",
                width: "400px",
                border: "2px solid black",
              }}
              type="text"
              name="longitude"
              placeholder="Longitude"
              {...register("longitude", {
                required: "Longitude is Required",
                pattern: {
                  value: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/,
                  message: "Please Enter Valid Longitude",
                },
              })}
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
              className={`form-control   ${errors.stationName && "invalid"}`}
              style={{
                width: "400px",
                borderRadius: "5px",
                height: "45px",
                border: "2px solid black",
              }}
              type="text"
              name="stationName"
              value={requestData.stationName}
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
            />
            {errors.stationName && (
              <small className="text-danger fs-6 p-1">
                {errors.stationName.message}
              </small>
            )}
          </div>
          <button
            className="btn btn-dark  my-2"
            style={{
              width: "400px",
              borderRadius: "5px",
              height: "45px",
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
