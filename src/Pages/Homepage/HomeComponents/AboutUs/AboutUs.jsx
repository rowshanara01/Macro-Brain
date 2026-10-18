import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import leon from "../../../../assets/others/leon.jpg";
import mission from "../../../../assets/others/mission.png";
import vission from "../../../../assets/others/vission.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-5">
      <h2 className="my-5 text-center">About Us</h2>
      <Row>
        {/* 1st */}
        <Col xs={12} md={12} lg={6}>
          <div>
            <Card
              className="h-100"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <div className="d-flex">
                <Card.Img
                  src={mission}
                  style={{ width: "100px", padding: "15px" }}
                  alt="mission"
                />
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To empower businesses and individuals by delivering
                    cutting-edge, innovative solutions that harness the power of
                    technology to solve complex challenges, improve efficiency,
                    and create meaningful impact.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>

          <div className="my-4">
            <Card
              className="h-100"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <div className="d-flex">
                <Card.Img
                  src={vission}
                  style={{ width: "100px", padding: "15px" }}
                  alt="vission"
                />
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To empower businesses and individuals by delivering
                    cutting-edge, innovative solutions that harness the power of
                    technology to solve complex challenges, improve efficiency,
                    and create meaningful impact.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </Col>
        {/* 2nd */}
        <Col xs={12} md={12} lg={6}>
          <h4>About Macro-Brain-It </h4>
          Macro-Brain-It is a cutting-edge project designed to revolutionize the
          way businesses and individuals approach data-driven decision-making.
          By combining advanced analytics, artificial intelligence, and
          intuitive interfaces, Macro-Brain-It empowers users to gain deep
          insights, automate complex processes, and drive innovation. Whether
          you're streamlining operations, predicting market trends, or enhancing
          user experiences, Macro-Brain-It is your comprehensive solution for
          smarter, faster, and more impactful results in a rapidly evolving
          digital landscape.
        </Col>
      </Row>

      {/* owner */}
      <Row className="my-5">
        <Col xs={12} md={12} lg={6}>
          <p>
            Meet Mostasim Leon. Products management Web developer and owner of
            company
          </p>
        </Col>
        <Col className="my-4" xs={12} md={12} lg={6}>
          <img src={leon} style={{ width: "70%" }} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
