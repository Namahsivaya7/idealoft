import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css"; // Import your custom CSS here
import { Col, Row, Typography } from "antd";

const products = [
  {
    imageUrl: "vr/htc-vive.png",
    title: "HTC Vive",
    description:"Learn more",
  },
  {
    imageUrl: "vr/htc-vive-pro.png",
    title: "HTC Vive Pro",
    description: "Learn more",
  },
  {
    imageUrl: "vr/oculus-rift.png",
    title: "Oculus Rift",
    description: "Learn more",
  },
  {
    imageUrl: "vr/playstation-vr.png",
    title: "PlayStation VR",
    description: "Learn more",
  },
  {
    imageUrl: "vr/samsung-vr.png",
    title: "Samsung VR",
    description: "Learn more",
  },
  {
    imageUrl: "vr/htc-vive-cosmic-vr.png",
    title: "HTC Vive Cosmic",
    description: "Learn more",
  },
  {
    imageUrl: "vr/hp-vr.png",
    title: "HP VR",
    description: "Learn more",
  },
];

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides =products.length; // Adjust this based on the slidesToShow for larger screens

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    afterChange: handleAfterChange, // Trigger pagination change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const calculatePaginationWidth = () => {
    // Get the number of images visible at once
    const slidesToShow = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 600 ? 3 : 2;
    const percentage = ((currentSlide + slidesToShow) / totalSlides) * 100;
    return `${Math.min(percentage, 100)}%`; // Ensure the width doesn't exceed 100%
  };

  return (
    <>
      <Row>
        <Col lg={1} xs={1}></Col>
        <Col lg={23} xs={23}>
          <div className="slider-wrapper">
            <Typography className="product-title">Products</Typography>
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index} className="slider-item">
                  <img
                    src={product.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                      margin: "20px 0px 0px 0px",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "gray",
                      margin: "10px 0px 20px 0px",
                    }}
                  >
                    {product.description}
                  </Typography>
                </div>
              ))}
            </Slider>
            
          </div>
        </Col>
      </Row>
      {/* Custom Pagination Line */}
      <div className="pagiation-section">
            <div className="pagination-line-container">
              <div
                className="pagination-line"
                style={{ width: calculatePaginationWidth() }}
              ></div>
              </div>
            </div>
    </>
  );
};

export default Products;
