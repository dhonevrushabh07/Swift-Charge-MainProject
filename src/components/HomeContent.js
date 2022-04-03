import { Component } from "react";
import i3 from "../images/i3.jpg";
import Image from "react-bootstrap/Image";
import { Marker } from "react-map-gl";
import { Card } from "react-bootstrap";
import RequestForStation from "./RequestForStation";
import BFooter from "./BFooter";

function HomeContent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-12 p-0 m-0 border-0">
          <Card className="">
            <Card.Img
              src={i3}
              alt=" image Not found"
              className="me-5 p-0 border-0"
            />
            {/* <Card.ImgOverlay>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay> */}
          </Card>
        </div>
        <div
          className="col-md-4 col-12 d-flex justify-content-center align-items-center p-0 m-0"
          style={{ backgroundColor: "cyan" }}
        >
          <p className="text-center fw-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            tenetur? Minus corrupti corporis quaerat officia id facilis
            nesciunt, ad beatae commodi consequuntur! Consequuntur iure aliquid,
            animi nam voluptatum nihil dolores asperiores velit veritatis,
            totam, laborum alias similique quasi tempora voluptatibus accusamus
            eaque autem maxime natus. Voluptatibus nam sapiente nostrum
            officiis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
