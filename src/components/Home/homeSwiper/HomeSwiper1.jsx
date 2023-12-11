import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//
import './homeswiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import data from '../../../data.json'

const HomeSwiper1 = () => {
    return (
        <div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data[0].swiper.map((box) => (
                    <div key={box.id}>
                    <SwiperSlide >
                        <div>
                            <img src={box.img} alt='aaaa' />
                        </div>
                    </SwiperSlide>
                    </div>
                ))}
            </Swiper>
      

         
        </div>
    )
}

export default HomeSwiper1