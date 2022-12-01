import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const data= [
        "https://m.media-amazon.com/images/I/61LYb-2bvDL.jpg",
        "https://cdn-amz.woka.io/images/I/51HnH4FapCL.jpg",
        "https://target.scene7.com/is/image/Target/GUEST_5bea148c-5ddb-409d-b5a4-7bf518a4943f?wid=488&hei=488&fmt=pjpeg"
    ]
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };
    
      return (
        <div className="slider">
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
          </div>
          <div className="icons">
            <div className="icon" onClick={prevSlide}>
              <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
              <EastOutlinedIcon />
            </div>
          </div>
        </div>
      );
    };
    
    export default Slider;