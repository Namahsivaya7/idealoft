import { Button, Checkbox, Col, Input, Row, Typography } from "antd";
import "./Footer.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Footer() {
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
              <Input placeholder="Email ID" />
            </div>
            <div className="terms">
              <Checkbox />
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
              <Checkbox />
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
              <Button className="mail-submit">
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
