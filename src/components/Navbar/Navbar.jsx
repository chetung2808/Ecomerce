import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
      
          <div className="item">
            <Link className ="link" to="/products/1">Figure</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">DX</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Gundam</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">CMTshop</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Trang chủ</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Thông tin</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Liên hệ</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Danh sách cửa hàng</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;