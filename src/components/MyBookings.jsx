import { Card } from "react-bootstrap";

function MyBookings() {
  let bookingDetails = [
    {
      id: "1002",
      startTime: "2022-03-31T10:00:00",
      endTime: "2022-03-31T11:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        latitude: 27.21,
        stationName: "hitesh station",
      },
      point: {
        id: "1509442002",
      },
    },
    {
      id: "1003",
      startTime: "2022-03-31T13:00:00",
      endTime: "2022-03-31T17:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        latitude: 27.21,
        stationName: "hitesh station",
      },
      point: {
        id: "1509442002",
      },
    },
    {
      id: "1004",
      startTime: "2022-03-31T14:00:00",
      endTime: "2022-03-31T15:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        latitude: 27.21,
        stationName: "hitesh station",
      },
      point: {
        id: "1509442003",
      },
    },
    {
      id: "1005",
      startTime: "2022-03-31T15:00:00",
      endTime: "2022-03-31T16:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        latitude: 27.21,
        stationName: "hitesh station",
      },
      point: {
        id: "1509442003",
      },
    },
    {
      id: "1509443002-7072707712022-04-11T00:00",
      startTime: "2022-04-11T00:00:00",
      endTime: "2022-04-12T01:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      station: {
        id: "1509443",
        longitude: 74.7592976,
        totalPoints: 6,
        latitude: 20.9401854,
        stationName: "chaitanya station",
      },
      point: {
        id: "1509443002",
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
        <div className="col-6 col-md-4 ">
          <Card className="mb-1" style={{ border: "4px solid blue" }}>
            <Card.Header
              className="bg-dark text-light text-center mb-1"
              style={{ height: "55px" }}
            >
              Booking Id : {item.id}
            </Card.Header>
            <Card.Body
              className="bg-light text-dark text-light mb-1 fw-bold"
              style={{
                height: "310px",
                background: "linear-gradient(#e66465, #9198e5,#e66465)",
              }}
            >
              <Card.Text>Station Name : {item.station.stationName}</Card.Text>
              <Card.Text>Latittude : {item.station.latitude}</Card.Text>
              <Card.Text>Longitude : {item.station.longitude}</Card.Text>
              <Card.Text>Point Id : {item.point.id}</Card.Text>
              <Card.Text>Start Time :{item.startTime}</Card.Text>
              <Card.Text>End Time : {item.endTime}</Card.Text>
              <Card.Text>
                Vehicle Number : {item.vehicle.vehicleNumber}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark text-light text-center">
              Thank You
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
