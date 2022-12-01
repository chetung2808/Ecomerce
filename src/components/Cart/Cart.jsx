import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const data =  [
        {
            id:1,
            img: "https://m.media-amazon.com/images/I/61LYb-2bvDL.jpg",
            img2: "https://tamashiinations.fr/14288-home_default/gundam-metal-build-gundam-devise-exia.jpg",
            title: "Gundam",
            desc: "Gundam",
            isNew: true,
            oldprice: 19,
            newprice: 18,
        },
        {
            id:2,
            img: "https://cdn-amz.woka.io/images/I/51HnH4FapCL.jpg",
            title: "HG Barbartos gundam",
            desc: "Gundam",
            isNew: true,
            oldprice: 19,
            newprice: 16,
        },
        {
            id:3,
            img: "https://target.scene7.com/is/image/Target/GUEST_5bea148c-5ddb-409d-b5a4-7bf518a4943f?wid=488&hei=488&fmt=pjpeg",
            title: "Fire gundam",
            desc: "Gundam",
            isNew: true,
            oldprice: 19,
            newprice: 14,
        },
    ]
  return (
    <div className='cart'>
      <h1>Sản phẩm trong giỏ</h1>
      {data.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="detals">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">1 x ${item.newprice}</div>
            </div>
            <DeleteIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>Tổng thanh toán</span>
        <span>10000 VNĐ</span>
      </div>
      <button>Quy trình thanh toán</button>
      <span className="reset">Làm mới giỏ hàng</span>
    </div>
  )
}

export default Cart
