import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../../../assets/service/Ai.png";
import img2 from "../../../../assets/service/Cloud.png";
import img3 from "../../../../assets/service/Data.png";
import img4 from "../../../../assets/service/Digital.png";
import "./Service.css";

const OurServices = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="my-5">
        <h3 className="text-center">Our Services</h3>
        <h1 className="text-center">Enhancing Creativity, Step by Step</h1>
      </div>
      
      <Row>
        {/* 1 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }} >
            <Card.Img variant="top" src={img1} style={{ width: "100px", margin: "25px" }} />
            <Card.Body>
              <Card.Title>AI & Automation</Card.Title>
              <Card.Text>
                Creating AI-powered applications and systems that automate
                tasks, analyze data, and provide insights, revolutionizing
                various industries.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 2 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }} >
            <Card.Img variant="top" src={img2} style={{ width: "100px", margin: "25px" }} />
            <Card.Body>
              <Card.Title>Data & Analytics</Card.Title>
              <Card.Text>
                Developing tools to collect, process, and analyze large
                datasets, enabling businesses to make informed decisions based
                on data-driven insights.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 3 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 cardBackground" style={{ backgroundColor: "#181818" }} >
            <Card.Img variant="top" src={img3} style={{ width: "100px", margin: "25px" }} />
            <Card.Body>
              <Card.Title>Digital Transformation</Card.Title>
              <Card.Text>
                Implementing technologies like Robotic Process Automation (RPA)
                and workflow automation to optimize processes, and reduce manual
                tasks, to increased productivity.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 4 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 cardBackground" style={{ backgroundColor: "#181818" }} >
            <Card.Img variant="top" src={img4} style={{ width: "100px", margin: "25px" }} />
            <Card.Body>
              <Card.Title>Cloud Offering</Card.Title>
              <Card.Text>
                Providing scalable and flexible cloud-based services that allow
                businesses to store, manage, and access data and applications
                remotely.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OurServices;
