import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    const data =  [
        {
            id:1,
            img: "https://m.media-amazon.com/images/I/61LYb-2bvDL.jpg",
            img2: "https://tamashiinations.fr/14288-home_default/gundam-metal-build-gundam-devise-exia.jpg",
            title: "Gundam",
            isNew: true,
            oldprice: 19,
            newprice: 14,
        },
        {
            id:2,
            img: "https://cdn-amz.woka.io/images/I/51HnH4FapCL.jpg",
            title: "HG Barbartos gundam",
            isNew: true,
            oldprice: 19,
            newprice: 14,
        },
        {
            id:3,
            img: "https://target.scene7.com/is/image/Target/GUEST_5bea148c-5ddb-409d-b5a4-7bf518a4943f?wid=488&hei=488&fmt=pjpeg",
            title: "Fire gundam",
            isNew: true,
            oldprice: 19,
            newprice: 14,
        },
        {
            id:4,
            img: "https://cdn-amz.woka.io/images/I/51HnH4FapCL.jpg",
            title: "HG Barbartos gundam",
            isNew: true,
            oldprice: 19,
            newprice: 14,
        }
    ]
  return (
   <div className="featuredProducts">

    <div className="top">
    <h1> Sản phẩm {type}</h1>
    <p>Chúng tôi cam kết sản phẩm chính hãng, giống với hình ảnh. Phục vụ quý khách là vinh dự của chúng tôi</p>
    </div>
    <div className="bottom">
        {data.map(item=>(
            <Card item ={item} key={item.id}/>
        ))}
    </div>
   </div>
  )
}

export default FeaturedProducts
