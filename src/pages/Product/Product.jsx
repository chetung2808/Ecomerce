import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [SelectImg, setSelectImg] = useState(0)
  const [Quantity, setQuantity] = useState(0)
  const images = [
    "https://m.media-amazon.com/images/I/61LYb-2bvDL.jpg",
    "https://tamashiinations.fr/14288-home_default/gundam-metal-build-gundam-devise-exia.jpg",
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[SelectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Mô tả</h1>
        <span className='price'>9000000 VNĐ</span>
        <p>Mô hình chính hãng nhật bản</p>
        <div className="quantity">
          <span>Số lượng </span>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {Quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div className="links">
        <button className='add'>
          <AddShoppingCartIcon />Thêm vào giỏ
        </button>
        <button className='add'>
         Mua ngay
        </button>
        </div>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Yêu thích
          </div>
          <div className="item">
            <BalanceIcon /> So sánh giá
          </div>
        </div>
        <div className="info">
          <span>Nhà sản xuất: Bandai</span>
          <span>Loại sản phẩm: Gumdam</span>
          <span>Tag: Gundam, Mecha</span>
      
        </div>
        <div className="details">
          <span>Mô tả</span>
          <span>Thêm thông tin</span>
        <hr/>
        <span>FAQ</span>
        </div>
       
      </div>
    </div>
  )
}

export default Product