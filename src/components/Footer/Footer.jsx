import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Menu</h1>
          <span>Figure</span>
          <span>Dx</span>
          <span>Card</span>
       
        </div>
        <div className="item">
          <h1>Liên kết</h1>
          <span>FAQ</span>
          <span>Trang</span>
          <span>Các cửa hàng</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Về chúng tôi</h1>
          <span>
          Chúng tôi cam kết sản phẩm chính hãng, giống với hình ảnh. Phục vụ quý khách là vinh dự của chúng tôi
          </span>
        </div>
        <div className="item">
          <h1>Liên hệ</h1>
          <span>
          Chúng tôi cam kết sản phẩm chính hãng, giống với hình ảnh. Phục vụ quý khách là vinh dự của chúng tôi
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">CMTshop</span>
          <span className="copyright">
            © Copyright 2022. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;