import { Dropdown } from "bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

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
      className="container  d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="col-6 d-flex justify-content-center p-5 "
        style={{ borderRadius: "10px" }}
      >
        <form onSubmit={handleSubmit(onsubmit)} action="">
          <div>
            <select
              className="custom-select m-1 form-control"
              name="vehicletype"
              id=""
              style={{ width: "400px" }}
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
            <input
              className="form-control m-1"
              style={{ width: "400px" }}
              type="text"
              name="vendor"
              id=""
              placeholder="Vendor"
              {...register("vendor", {
                required: "Vedor is required",
                maxLength: {
                  value: 20,
                  message: "Vendor name contains maximum 20 character",
                },
              })}
              onKeyUp={() => {
                trigger("vendor");
              }}
            />
            {errors.vendor && (
              <small className="text-danger fs-6 p-1">
                {errors.vendor.message}
              </small>
            )}
          </div>
          <div>
            <input
              className="form-control m-1"
              style={{ width: "400px" }}
              type="text"
              name="vehiclenumber"
              id=""
              placeholder="Vehicle Number"
              {...register("vehiclenumber", {
                required: "Please Enter Vehicle Number",
                pattern: {
                  value:
                    /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/,
                  message: "Please Enter valid Vehicle number",
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
          <button className="btn btn-primary  m-1" style={{ width: "200px" }}>
            <a href="#" className="text-decoration-none fs-6 text-light">
              Book Slot
            </a>
          </button>
          <button className="btn btn-primary m-1" style={{ width: "190px" }}>
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
