import { Card, Table } from "react-bootstrap";

function MyStation() {
  let stationDetails = {
    id: "1509442",
    registrationNumber: "1234",
    latitude: 27.21,
    longitude: 21.24,
    stationName: "hitesh station",
    totalPoints: 5,
    chargingPoints: [
      {
        id: "1509442005",
        stationId: null,
      },
      {
        id: "1509442002",
        stationId: null,
      },
      {
        id: "1509442001",
        stationId: null,
      },
      {
        id: "1509442004",
        stationId: null,
      },
      {
        id: "1509442003",
        stationId: null,
      },
    ],
    approved: true,
  };
  let approval;
  if (stationDetails.approved == true) approval = "Station Approved";
  else approval = "Station Not Approved";

  let details = [
    {
      id: "1005",
      startTime: "2022-03-31T15:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      endTime: "2022-03-31T16:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442003",
      },
    },
    {
      id: "1004",
      startTime: "2022-03-31T14:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      endTime: "2022-03-31T15:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442003",
      },
    },
    {
      id: "1003",
      startTime: "2022-03-31T13:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      endTime: "2022-03-31T17:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442002",
      },
    },
    {
      id: "1001",
      startTime: "2022-03-31T10:00:00",
      vehicle: {
        vehicleNumber: "MH18V3516",
      },
      endTime: "2022-03-31T11:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442001",
      },
    },
    {
      id: "1002",
      startTime: "2022-03-31T10:00:00",
      vehicle: {
        vehicleNumber: "MH20AO2547",
      },
      endTime: "2022-03-31T11:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442002",
      },
    },
    {
      id: "1000",
      startTime: "2022-03-31T09:00:00",
      vehicle: {
        vehicleNumber: "MH18V3516",
      },
      endTime: "2022-03-31T10:00:00",
      station: {
        id: "1509442",
        longitude: 21.24,
        totalPoints: 5,
        stationName: "hitesh station",
        latitude: 27.21,
      },
      point: {
        id: "1509442001",
      },
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: "700px" }}>
          <Card.Header className="fs-4 text-center bg-dark text-light">
            Station Details
          </Card.Header>
          <Card.Body
            className="fs-5"
            style={{
              background: "linear-gradient(rgba(200,0,0,0.5),transparent)",
            }}
          >
            <Card.Text>Station Name : {stationDetails.stationName}</Card.Text>
            <Card.Text>Station Id : {stationDetails.id}</Card.Text>
            <Card.Text>
              Registration Number : {stationDetails.registrationNumber}
            </Card.Text>
            <Card.Text>Lattitude : {stationDetails.latitude}</Card.Text>
            <Card.Text>Longitude : {stationDetails.longitude}</Card.Text>
            <Card.Text>
              Total Charging Points : {stationDetails.totalPoints}
            </Card.Text>
            <Card.Text>Station Approval : {approval}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="text-center mt-2">
        <Table striped bordered hover>
          {" "}
          {/* //id, vehicle number, point id, starttime, end time */}
          <thead className="bg-dark text-light">
            <tr>
              <th>Booking Id</th>
              <th>Vehicle Number</th>
              <th>Point Id</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item) => (
              <tr style={{ borderBottom: "1px solid black" }}>
                <td>{item.id}</td>
                <td>{item.vehicle.vehicleNumber}</td>
                <td>{item.point.id}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyStation;
