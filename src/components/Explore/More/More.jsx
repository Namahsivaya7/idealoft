import { Col, Row, Typography } from "antd";
import './More.css';

export default function More() {
  return (
    <>
      <div>
        <Row justify="center" > {/* Added gutter for spacing between columns */}
          <Col lg={1} xs={0}></Col> {/* Hide this column on xs */}
          <Col lg={22} xs={24}> {/* Full width on xs, 22 cols on lg */}
            <Row justify="center" > {/* Added gutter for spacing between sections */}
              <Col lg={8} xs={24}>
                <div className="more-section">
                    <Row>
                        <Col lg={{order:1,span:24}} xs={{order:3,span:8}}>
                  <div className="more-images1">
                    <img src="more/immersive-experiences.png" alt="Immersive Experiences" />
                  </div>
                  </Col>
                  <Col lg={{order:2,span:0}} xs={{order:2,span:0}}></Col>
                  <Col lg={{order:3,span:24}} xs={{order:0,span:15}}>
                  <Typography className="more-image-title">Tech Innovations</Typography>
                  <Typography className="more-image-description">
                    Unveiling the latest in tech innovation, from cutting-edge gadgets to groundbreaking VR experiences. Dive into expert reviews and insights.
                  </Typography>
                  </Col></Row>
                </div>
              </Col>
              <Col lg={8} xs={24}>
                <div className="more-section">
                    <Row>
                    <Col lg={{order:1,span:24}} xs={{order:3,span:8}}>
                  <div className="more-images2">
                    <img src="more/vr-game-development.png" alt="VR Game Development" />
                  </div>
                  </Col>
                  <Col lg={{order:2,span:0}} xs={{order:2,span:0}}></Col>
                  <Col lg={{order:3,span:24}} xs={{order:1,span:15}}>
                  <Typography className="more-image-title">Immersive Experiences</Typography>
                  <Typography className="more-image-description">
                    Delve into a collection of VR projects, where technology pushes the boundaries of imagination and transforms the digital landscape.
                  </Typography>
                  </Col>
                    </Row>
                </div>
              </Col>
              <Col lg={8} xs={24}>
                <div className="more-section">
                    <Row>
                        <Col lg={{order:1,span:24}} xs={{order:3,span:8}}>
                  <div className="more-images3">
                    <img src="more/tech-innovations.png" alt="Tech Innovations" />
                  </div>
                  </Col>
                  <Col lg={{order:2,span:0}} xs={{order:2,span:0}}></Col>
                  <Col lg={{order:3,span:24}} xs={{order:1,span:15}}>
                  <Typography className="more-image-title">VR Game Innovations</Typography>
                  <Typography className="more-image-description">
                    Explore the art of VR game development, showcasing the blend of technology and creativity in crafting immersive virtual worlds.
                  </Typography>
                  </Col>
                    </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1} xs={0}></Col> {/* Hide this column on xs */}
        </Row>
      </div>
    </>
  );
}
