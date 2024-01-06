import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} >
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mb-3">
  <div className="social-icon">
  <a href="http://www.linkedin.com/in/maheshika-dissanayake" target="_blank">
                  <img src={navIcon1} alt="LinkedIn Profile" />
                </a>
                <a href="https://www.facebook.com/maheshika.dissanayake.549?mibextid=vk8aRt" target="_blank">
                  <img src={navIcon2} alt="Facebook Profile" />
                </a>
                <a href="https://www.instagram.com/maheshi_dissanayake_?igsh=NTJxeHR1bHN0ZHZm" target="_blank">
                  <img src={navIcon3} alt="Instagram Account" />
                </a>
  </div>
  <p>Copyright 2024. All Rights Reserved</p>
</Col>

        </Row>
      </Container>
    </footer>
  )
}