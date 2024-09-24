import {  Col, Image, Row, Tabs, Typography } from "antd";
import "./Explore.css";
import { useState } from "react";
import More from "./More/More";

export default function Explore() {
  const images = [
    "explore/sci-fi.png",
    "explore/nature.png",
    "explore/Gaming.png",
    "explore/driving.png",
  ];

  const [imageSrc, setImageSrc] = useState(images[0]);
  const [selectedButton, setSelectedbutton] = useState(0);
  const [showMore, setShowMore] = useState(false); // State to control More component visibility

  const toggleMore = () => {
    setShowMore((prev) => !prev); // Toggle the visibility of the More component
  };

  const handlebuttonClick = (index) => {
    setImageSrc(images[index]);
    setSelectedbutton(index);
  };
  return (
    <>
      <div className="explore-button-section">
        <button className="explore-button" onClick={toggleMore}>
          {showMore ? "Show Less" : "Explore More"}{" "}
        </button>
      </div>
      {showMore && (
        <div>
          <Row>
            <Col lg={1} xs={1} sm={1} md={1}></Col>
            <Col lg={22} xs={22} sm={22} md={22}>
              {/* <div className="explore-button-section">
            <button className="explore-button" onClick={toggleMore}>{setShowMore ? "Show Less" : "Explore More"} </button>
          </div> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  color: "white",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div className="explore-first-section">
                    <div className="explore-main">
                      <Typography className="explore-title">
                        Explore Possibillities
                      </Typography>
                      <Typography className="explore-content">
                        Unlock New Dimentions through Tech and Virtual Reality{" "}
                      </Typography>
                    </div>
                    <div className="buttons" id="explore-buttons-group" style={{}}>
                      <button
                        id="tab-button"
                        onClick={() => handlebuttonClick(0)}
                        style={{
                          backgroundColor:
                            selectedButton === 0
                              ? "rgba(61, 0, 117, 1)"
                              : "#f0f0f0",
                          border:
                            selectedButton === 0
                              ? "3px solid rgba(255, 0, 245, 1)"
                              : "4px solid rgba(124, 145, 255, 1)",
                          color: selectedButton === 0 ? "white" : "black",
                        }}
                      >
                        Sci-Fi
                      </button>
                      <button
                        id="tab-button"
                        onClick={() => handlebuttonClick(1)}
                        style={{
                          background:
                            selectedButton === 1
                              ? "rgba(61, 0, 117, 1)"
                              : "#f0f0f0",
                          border:
                            selectedButton === 1
                              ? "3px solid rgba(255, 0, 245, 1)"
                              : "4px solid rgba(124, 145, 255, 1)",
                          color: selectedButton === 1 ? "white" : "black",
                        }}
                      >
                        Nature
                      </button>
                      <button
                        id="tab-button"
                        onClick={() => handlebuttonClick(2)}
                        style={{
                          background:
                            selectedButton === 2
                              ? "rgba(61, 0, 117, 1)"
                              : "#f0f0f0",
                          border:
                            selectedButton === 2
                              ? "3px solid rgba(255, 0, 245, 1)"
                              : "4px solid rgba(124, 145, 255, 1)",
                          color: selectedButton === 2 ? "white" : "black",
                        }}
                      >
                        Gaming
                      </button>
                      <button
                        id="tab-button"
                        onClick={() => handlebuttonClick(3)}
                        style={{
                          background:
                            selectedButton === 3
                              ? "rgba(61, 0, 117, 1)"
                              : "#f0f0f0",
                          border:
                            selectedButton === 3
                              ? "3px solid rgba(255, 0, 245, 1)"
                              : "4px solid rgba(124, 145, 255, 1)",
                          color: selectedButton === 3 ? "white" : "black",
                        }}
                      >
                        Drive
                      </button>
                    </div>
                  </div>
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt="Selected"
                      style={{
                        width: "87vw",
                        margin: "80px auto 50px auto",
                        padding: "auto 5px",
                      }}
                      preview={false}
                    />
                  )}
                </div>
              </div>
            </Col>
            <Col lg={1} xs={1} sm={1} md={1}></Col>
          </Row>
          <div>
            <More />
          </div>
        </div>
      )}
    </>
  );
}
