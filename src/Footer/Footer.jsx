import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import {
  FaCreditCard,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaypal,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { FaCircleDollarToSlot, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="my-5">
      {/* Part 1 */}
      <div style={{ backgroundColor: "#151515" }}>
        <br />
        <Container className="mt-4">
          <Row>
            {/* 1 */}
            <Col xs={12} md={6} lg={3}>
              <Image src="" style={{ width: "100px" }} fluid alt="Logo" />
              <br />
              <br />
              <p className="footerText">Macro-Brain-It.</p>
            </Col>

            {/* 2 */}
            <Col xs={12} md={6} lg={3}>
              <p className="text-white">
                <b>Quick links</b>
              </p>
              <Nav className="flex-column">
                <Link to="" className="footerLinks">
                  Sell Airline Miles
                </Link>
                <Link to="" className="footerLinks">
                  Buy Miles
                </Link>
                <Link to="" className="footerLinks">
                  Sell Hotel Points
                </Link>
                <Link to="" className="footerLinks">
                  Sell Credit Card Points
                </Link>
                <Link to="" className="footerLinks">
                  Sitemap
                </Link>
              </Nav>
            </Col>

            {/* 3 */}
            <Col xs={12} md={6} lg={3}>
              <p className="text-white">
                <b>Company</b>
              </p>
              <Nav className="flex-column">
                <Link to="" className="footerLinks">
                  Blog
                </Link>
                <Link to="" className="footerLinks">
                  About Us
                </Link>
                <Link to="" className="footerLinks">
                  Contact Us
                </Link>
              </Nav>
            </Col>

            {/* 4 */}
            <Col xs={12} md={6} lg={3}>
              <p className="text-white">
                <b>Contact Us</b>
              </p>
              <div className="d-flex">
                <FaLocationDot style={{ color: "#56D4FC", fontSize: "20px" }} />
                <p className="footerLinks mx-3">
                  2170 N 29th Ave Hollywood, <br /> FL 33020
                </p>
              </div>

              <div className="d-flex">
                <FaPhoneVolume style={{ color: "#56D4FC", fontSize: "20px" }} />
                <p className="footerLinks mx-3">8664583853</p>
              </div>

              <div className="text-white" style={{ fontSize: "25px" }}>
                <FaFacebook />
                <FaLinkedin className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaInstagram />
              </div>
            </Col>
          </Row>
          <br />
          <br />

          {/* Payment Methods */}
          <Row>
            <Col xs={10} md={6} className="smallDiv text-center">
              <p>
                <b>Payment Methods</b>
              </p>
              <b>
                <FaCircleDollarToSlot /> Cash |
                <FaCreditCard /> Credit Card |
                <FaPaypal /> Paypal
              </b>
            </Col>
          </Row>

          <br />
          <p className="text-white text-center">
            All Right Reserved Macro-Brain-It | © 2024
          </p>
          <br />
        </Container>
      </div>
    </section>
  );
};

export default Footer;
