import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import feature from "../../../../assets/others/feature.png";

const Features = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <h1 className="text-center">Enhancing Creativity, Step by Step</h1>
      </div>

      <Row>
        {/* 1 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }}>
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Agile Project Management</Card.Title>
              <Card.Text>
                Collaborative planning, tracking, adapting projects flexibly for
                effective development.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 2 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card className="h-100 " style={{ backgroundColor: "#181818" }}>
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Version Control System</Card.Title>
              <Card.Text>
                Track code changes, manage versions, prevent conflicts, ensure
                collaboration.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 3 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>(CI/CD) Pipeline</Card.Title>
              <Card.Text>
                Automate building, testing, releasing software reliably,
                speeding up development.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 4 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Collaboration Tools</Card.Title>
              <Card.Text>
                Enhance teamwork, communication, project alignment effectively,
                fostering collaboration.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 5 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Analytics and Reporting</Card.Title>
              <Card.Text>
                Gain insights, improve decisions through performance data,
                enhance understanding.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 6 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Security & Access Control</Card.Title>
              <Card.Text>
                Protect data, manage access, ensure system security, maintain
                privacy.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 7 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Scalability & Performance</Card.Title>
              <Card.Text>
                Ensure smooth performance, handle increased users seamlessly,
                optimize efficiency.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
        {/* 8 */}
        <Col className="my-2" xs={12} md={6} lg={3}>
          <Card
            className="h-100 cardBackground"
            style={{ backgroundColor: "#181818" }}
          >
            <Card.Img
              variant="top"
              src={feature}
              style={{ width: "100px", margin: "25px" }}
            />
            <Card.Body>
              <Card.Title>Support & Feedback</Card.Title>
              <Card.Text>
                Support users, incorporate suggestions, foster relationships,
                improve satisfaction.
              </Card.Text>
              <button className="learn-more-btn ">Learn More</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
