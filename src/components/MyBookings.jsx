import { Card } from "react-bootstrap";

function MyBookings() {
  // let details = [
  //   {
  //     no: 1,
  //     vehicleNo: "MH 27 AB 4954",
  //     startTime: "6AM",
  //     endTime: "7AM",
  //     stationName: "Pune",
  //   },
  //   {
  //     no: 2,
  //     vehicleNo: "MH 27 AB 4954",
  //     startTime: "7AM",
  //     endTime: "8AM",
  //     stationName: "Pune",
  //   },
  //   {
  //     no: 3,
  //     vehicleNo: "MH 27 AB 4954",
  //     startTime: "8AM",
  //     endTime: "9AM",
  //     stationName: "Pune",
  //   },
  //   {
  //     no: 3,
  //     vehicleNo: "MH 27 AB 4954",
  //     startTime: "8AM",
  //     endTime: "9AM",
  //     stationName: "Pune",
  //   },
  // ];

  let bookingDetails = [
    {
      id: "1509443006-7072709022022-04-12T01:00",
      startTime: "2022-04-12T01:00:00",
      endTime: "2022-04-12T02:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2500",
      },
      station: {
        id: "1509443",
        longitude: 74.7592976,
        totalPoints: 6,
        latitude: 20.9401854,
        stationName: "chaitanya station",
      },
      point: {
        id: "1509443006",
      },
    },
    {
      id: "1509443006-7072709022022-04-12T01:00",
      startTime: "2022-04-12T01:00:00",
      endTime: "2022-04-12T02:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2500",
      },
      station: {
        id: "1509443",
        longitude: 74.7592976,
        totalPoints: 6,
        latitude: 20.9401854,
        stationName: "chaitanya station",
      },
      point: {
        id: "1509443006",
      },
    },
  ];

  return (
    <div className="row ">
      {bookingDetails.map((item) => (
        <div className="col-6 col-md-5 ">
          <Card className="mb-1">
            <Card.Header
              className="bg-dark text-light text-center mb-1  "
              style={{ borderRadius: "5px" }}
            >
              Booking No {item.no}
            </Card.Header>
            <Card.Body className="bg-dark text-light mb-1  ">
              <Card.Text>Station Name : {item.station.stationName}</Card.Text>
              <Card.Text>Booking Id : {item.id}</Card.Text>
              <Card.Text>Latittude : {item.station.latitude}</Card.Text>
              <Card.Text>Longitude : {item.station.longitude}</Card.Text>
              <Card.Text>Point Id : {item.point.id}</Card.Text>
              <Card.Text>Start Time :{item.startTime}</Card.Text>
              <Card.Text>End Time : {item.endTime}</Card.Text>
              <Card.Text>
                Vehicle Number : {item.vehicle.vehicleNumber}
              </Card.Text>
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
