import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../../../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto my-5">
      <Row>
        {/* 1st col */}
        <Col xs={12} md={6} lg={6}>
          <h1 className="headLine">Empowering Tomorrow, </h1>
          <h1 className="headLine">Macro-Brain-It </h1>
          <p className="my-4">
            Macro-Brain-It is an innovative project focused on simplifying
            data-driven decision-making. It combines AI and advanced analytics
            to help users gain insights, automate tasks, and drive smarter
            outcomes with ease.
          </p>

          <button className=" learn-more-btn">Learn More</button>
        </Col>
        {/* 2nd col */}
        <Col xs={12} md={6} lg={6}>
          <img src={img} className="imgSize" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
