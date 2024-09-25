import { Button, Checkbox, Col, Input, message, Row, Typography } from "antd";
import "./Footer.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Footer() {

  const [email, setEmail] = useState(""); 
  const [emailValid, setEmailValid] = useState(false);
  const [checkboxValid, setCheckboxValid] = useState(false); 

  const updateEmail = (value) => {
    setEmail(value);
    validateEmail(value);
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email)); 
  };
 
  const updateCheckbox = (checked) => {
    setCheckboxValid(checked); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form submitted",emailValid,checkboxValid);

    const username = email.split('@')[0].trim();
    console.log("username", username)

    const formStatus = `${emailValid}-${checkboxValid}`; 

    switch (formStatus) {
      case "false-false":
        message.error("Enter Valid Email and accept T&C");
        break;

      case "false-true":
        message.error("Enter Valid Email");
        break;

      case "true-false":
        message.error("Accept T&C.");
        break;

      case "true-true":
        message.success(`Thank you for submitting your email! ${username}`);
        setEmail("");
        setEmailValid(false)
      setCheckboxValid(false);
        break;

      default:
        message.error("Unexpected validation state.");
    }
  };

  return (
    <div className="footer-main">
      <Row>
        <Col lg={{span:0,order:1}} xs={{span:1,order:1}}></Col>
        <Col lg={{ order: 2, span: 6 }} xs={{ order: 3, span: 22, offset: 1 }} sm={{ span: 20 }}>
          <div className="profile-section">
            <div className="profile-pic">
              <img src="jonather-vader-profile.png" />
            </div>
            <Typography className="profile-name">Jonathan Vader</Typography>
            <Typography className="profile-description">
              Hello, EquiTek is a personal blog created by me for tech
              enthusiasts and people looking to buy the latest Tech. I am a VR
              Games Developer who loves to create immersive experiences. You can
              visit my personal website to see my work
            </Typography>
            <Typography className="know-more">
              Know more
              <div>
                <ArrowRightOutlined />
              </div>
            </Typography>
          </div>
        </Col>
        <Col lg={{span:1,order:3}} xs={{order:0,span:0}}>
          <div style={{ height: "100%", borderRight: "1px solid white" }}></div>
        </Col>
        <Col lg={{ order: 3, span: 8 }} xs={{ order: 1, span: 22, }} sm={{ span: 20 }}>
          <div className="footer-secoend-column">
            <Typography className="mail-head">MAILING LIST</Typography>
            <Typography className="mail-description">
              Sign up to the mailing list and stay updated on the latest posts
              and offers
            </Typography>
            <div className="mail-box">
              <Input placeholder="Email ID" type="email" name="email" value={email}
            onChange={(e) => updateEmail(e.target.value)} required/>
            </div>
            <div className="terms">
              <Checkbox type="checkbox" checked={checkboxValid} onChange={(e)=>updateCheckbox(e.target.checked)} required/>
              <Typography className="tc">
                {" "}
                I agree to receive emails
                <Typography className="tc-text">
                  {" "}
                  I agree to receive updates, promotions, and relevant content
                  via email.
                </Typography>
              </Typography>
            </div>
            <div className="terms">
              <Checkbox type="checkbox"/>
              <Typography className="tc">
                {" "}
                I allow sharing with third-party partners
                <Typography className="tc-text">
                  <i>(optional)</i>
                  <br />
                  consent to my email being shared with selected partners for
                  offers and promotions.
                </Typography>
              </Typography>
            </div>
            <div id="mail-submit">
              <Button className="mail-submit" onClick={handleSubmit}>
                SUBMIT
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={{ order: 5, span: 7 }} xs={{ order: 4, span: 22}} sm={{ span: 20 }}>
          <div className="white-logo">
            <img src="logo-white.svg" style={{width:"100%"}}/>
          </div>
        </Col>
        <Col lg={{order:5,span:1}} xs={{span:1}}></Col>
      </Row>
    </div>
  );
}
