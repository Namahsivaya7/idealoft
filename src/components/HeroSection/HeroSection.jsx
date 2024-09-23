import { Button, Col, Row, Typography } from "antd";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div>
      <Row>
        <Col lg={1} xs={1}></Col>
        <Col lg={10} xs={22}>
          <div className="left-section">
            <Typography.Title className="title">
              The Next Big Thing!
            </Typography.Title>
            <Typography.Text className="text">
              join us in our journey to find out
              <br /> how the world of VR is evolving
            </Typography.Text>
            <div className="section-button">
              <Button type="primary">Know more</Button>
              {/* <div className="vector-div"> */}
                <img
                src="vector 40.png"
                alt="vector image"
                className="vector-image"
              />
              {/* </div> */}
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <div>
            <img src="hero-image.png" width={"100%"} alt="hero-image" />
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
}
