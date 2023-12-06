import React from 'react'
import './homeheader.css'
import data from '../../../data.json'
import  shopicon from '../../../img/homeimg/Bag 6.png'

const HomeHeader = () => {
  return (
    <div>
        {data.map((header, index)=>(
            <div key={index} className="home-heading">

                <div className="left">
                    <h1>{header.heading.title}</h1>
                    <h6>{header.heading.desc}</h6>
                    <button><span><img src={shopicon} alt="" /></span><span>SHOP NOW</span></button>
                </div>
                <div className="right">
                    <img src={header.heading.image} alt="" />
                    <div className='blur'></div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default HomeHeader