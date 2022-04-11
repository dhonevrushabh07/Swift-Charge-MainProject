import { Card } from "react-bootstrap";

function MyBookings() {
  let details = [
    {
      no: 1,
      vehicleNo: "MH 27 AB 4954",
      startTime: "6AM",
      endTime: "7AM",
      stationName: "Pune",
    },
    {
      no: 2,
      vehicleNo: "MH 27 AB 4954",
      startTime: "7AM",
      endTime: "8AM",
      stationName: "Pune",
    },
    {
      no: 3,
      vehicleNo: "MH 27 AB 4954",
      startTime: "8AM",
      endTime: "9AM",
      stationName: "Pune",
    },
    {
      no: 3,
      vehicleNo: "MH 27 AB 4954",
      startTime: "8AM",
      endTime: "9AM",
      stationName: "Pune",
    },
  ];
  return (
    <div className="row ">
      {details.map((item) => (
        <div className="col-4 col-md-4 ">
          <Card className="mb-1">
            <Card.Header
              className="bg-dark text-light text-center mb-1  "
              style={{ borderRadius: "5px" }}
            >
              Booking No {item.no}
            </Card.Header>
            <Card.Body className="bg-dark text-light text-center mb-1  ">
              <Card.Text>Vehicle No : {item.vehicleNo}</Card.Text>
              <Card.Text>Start Time : {item.startTime}</Card.Text>
              <Card.Text>End Time : {item.endTime}</Card.Text>
              <Card.Text>Station Name :{item.stationName}</Card.Text>
            </Card.Body>
            <Card.Footer
              className="bg-dark text-light text-center"
              style={{ borderRadius: "5px" }}
            >
              Thank You
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
