import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import p1 from "../../../../assets/others/p1.png";
import p2 from "../../../../assets/others/p2.png";
import p3 from "../../../../assets/others/p3.png";

const Projects = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="my-5">
        <h3 className="text-center">Our Projects</h3>
      </div>

      <Row>
        {/* 1 */}
        <Col className="my-2" xs={12} md={6} lg={4}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }}>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
              <Card.Title>
                MovieFiesta-Ticket Booking Site | React JS | Tailwind CSS
              </Card.Title>
              <Card.Text>{/* about project if any */}</Card.Text>
              <a href="https://moviefiesta.netlify.app/" target="_blank">
                <button className="learn-more-btn "> Live Demo</button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        {/* 2 */}
        <Col className="my-2" xs={12} md={6} lg={4}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }}>
            <Card.Img variant="top" src={p2} />
            <Card.Body>
              <Card.Title>
                Game Listing Site | React JS | Tailwind CSS
              </Card.Title>
              <Card.Text>{/* about project if any */}</Card.Text>
              <a href="https://playcrafts.netlify.app/" target="_blank">
                <button className="learn-more-btn "> Live Demo</button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        {/* 3 */}
        <Col className="my-2" xs={12} md={6} lg={4}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img variant="top" src={p3} />
            <Card.Body>
              <Card.Title>
                E-commerce Platform | Django | Tailwind CSS
              </Card.Title>
              <Card.Text>{/* about project if any */}</Card.Text>
              <a href="https://yeakiniqra.pythonanywhere.com/" target="_blank">
                <button className="learn-more-btn "> Live Demo</button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
