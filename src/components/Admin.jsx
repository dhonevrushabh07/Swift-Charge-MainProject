import React from "react";
import { Table } from "react-bootstrap";

function Admin() {
  let stationDetails = [
    {
      srNo: 1,
      registrationNo: "1234567891",
      stationName: "Shivaji nagar pune",
      userId: "12345",
      latittude: "18.18",
      longitude: "70.56",
    },
    {
      srNo: 2,
      registrationNo: "1234567892",
      stationName: "Karve nagar pune",
      userId: "12345",
      latittude: "18.18",
      longitude: "70.56",
    },
    {
      srNo: 3,
      registrationNo: "1234567893",
      stationName: "Fc road pune",
      userId: "12345",
      latittude: "18.18",
      longitude: "70.56",
    },
  ];
  return (
    <div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>Sr No</th>
              <th>Station Name</th>
              <th>Station Reg No</th>
              <th>User Id</th>
              <th>Latittude</th>
              <th>Longitude</th>
              <th>Decision</th>
            </tr>
          </thead>

          {stationDetails.map((item) => (
            <tbody>
              <tr className="text-center">
                <td>{item.srNo}</td>
                <td>{item.stationName}</td>
                <td>{item.userId}</td>
                <td>{item.registrationNo}</td>
                <td>{item.latittude}</td>
                <td>{item.longitude}</td>
                <td>
                  <button className="btn btn-primary m-1">Accept</button>
                  <button className="btn btn-primary m-1">Reject</button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Admin;
