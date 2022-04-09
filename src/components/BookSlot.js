import { Dropdown } from "bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import i1 from "../images/i1.jpg";

function BookSlot() {
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${i1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.3)",
        height: "100vh",
      }}
    >
      <div
        className="col-12 col-md-12 d-flex align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <form
          onSubmit={handleSubmit(onsubmit)}
          action=""
          className=" d-flex align-items-center flex-column justify-content-center p-5 "
          style={{
            width: "500px",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <div>
            <div>
              <h3
                className="text-dark text-center"
                style={{ textDecoration: "underline" }}
              >
                Book Slot
              </h3>
            </div>
            <select
              className="custom-select m-1 fw-bold "
              name="vehicletype"
              id=""
              style={{ width: "400px", height: "45px", borderRadius: "20px" }}
              {...register("vehicletype", {
                required: "Please Select Vehicle type",
              })}
              onKeyUp={() => {
                trigger("vehicletype");
              }}
            >
              <option value="">Select Vehicle Type</option>
              <option value="vehicletype">Two Wheeler</option>
              <option value="vehicletype">Three Wheeler</option>
              <option value="vehicletype">Four Wheeler</option>
            </select>
          </div>
          {errors.vehicletype && (
            <small className="text-danger fs-6 p-1">
              {errors.vehicletype.message}
            </small>
          )}
          <div>
            <select
              className="custom-select m-1 fw-bold "
              name="vendor"
              id=""
              style={{
                textAlign: "left",
                width: "400px",
                height: "45px",
                borderRadius: "20px",
              }}
              {...register("vendor", {
                required: "Please Select Vendor ",
              })}
              onKeyUp={() => {
                trigger("vendor");
              }}
            >
              <option value="" placeholder="Select Vendor">
                Select Vendor
              </option>
              <option value="vendor">Mahindra</option>
              <option value="vendor">Tesla</option>
              <option value="vendor">Tata</option>
              <option value="vendor">Hyundai</option>
            </select>
          </div>
          {errors.vendor && (
            <small className="text-danger fs-6 p-1">
              {errors.vendor.message}
            </small>
          )}
          <div>
            <input
              className="m-1 fw-bold"
              style={{ width: "400px", height: "45px", borderRadius: "20px" }}
              type="text"
              name="vehiclenumber"
              id=""
              placeholder="Vehicle Number Like MH 27 AB 4954"
              {...register("vehiclenumber", {
                required: "Please Enter Vehicle Number Like Ex.MH27 AB 4954",
                pattern: {
                  value:
                    /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/,
                  message:
                    "Please Enter valid Vehicle number Like Ex.MH27 AB 4954",
                },
              })}
              onKeyUp={() => {
                trigger("vehiclenumber");
              }}
            />
            {errors.vehiclenumber && (
              <small className="text-danger fs-6 p-1">
                {errors.vehiclenumber.message}
              </small>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-dark m-2"
              style={{
                width: "200px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
              }}
            >
              Book Slot
            </button>{" "}
            <button
              className="btn btn-dark m-2"
              style={{
                width: "200px",
                borderRadius: "20px",
                height: "50px",
                fontWeight: "bold",
              }}
            >
              Claim Premium Access
            </button>
          </div>
          {/* <div className="d-flex align-items-center justify-content-center">
            {" "}
            <button
              className="btn btn-primary m-1 "
              style={{ width: "190px", height: "45px", borderRadius: "20px" }}
            >
              <a href="#" className="text-decoration-none fs-6 text-light">
                Book Slot
              </a>
            </button>
            <button
              className="btn btn-primary m-1 "
              style={{ width: "190px", height: "45px", borderRadius: "20px" }}
            >
              <a href="#" className="text-decoration-none fs-6 text-light">
                Claim Premium Access
              </a>
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default BookSlot;
