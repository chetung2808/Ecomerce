import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'

const Products = () => {

  const catId = parseInt(useParams().id)
  const[MaxPrice,setMaxPrice] =useState(100000000)
  const[Sort,setSort]=useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2> Danh mục sản phẩm</h2>
          <div className="inputItem">
              <input type="checkbox" id="1" value={1}/>
              <label htmlFor="1">Figure</label>
          </div>
          <div className="inputItem">
              <input type="checkbox" id="2" value={2}/>
              <label htmlFor="2">Dx</label>
          </div>
          <div className="inputItem">
              <input type="checkbox" id="3" value={3}/>
              <label htmlFor="3">Gundam</label>
          </div>
        </div>
        <div className="filterItem">
          <h2> Khoảng giá</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100000000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{MaxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2> Sắp xếp</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="newprice" onChange={(e)=>setSort("asc")}/>
            <label htmlFor='asc'>Giá từ thấp tới cao</label>
            </div>
            <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="newprice" onChange={(e)=>setSort("desc")}/>
            <label htmlFor='desc'>Giá từ thấp tới cao</label>
            </div>
        </div>
      </div>
      <div className="right"></div>
      <img src=''></img>
      <List catId={catId} MaxPrice={MaxPrice} Sort={Sort}/>
    </div>
  )
}

export default Products
