import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import NewsPlate from './NewsPlate'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay }  from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'











SwiperCore.use([EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay]);

function Slider({ resolvedData }) {
  
  const [controlledSwiper, setControlledSwiper] = useState(null)
  
  
  
  
  
  return (
    <>
      <Swiper      
        controller={{ control: controlledSwiper}}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, reverseDirection: false, disableOnInteraction: true }}            
        navigation
        pagination={{ clickable: true }}
        onSwiper={setControlledSwiper}      
        spaceBetween={25}
        
      >     
      {
        resolvedData && resolvedData[0] && resolvedData.map((item, index)=>{
          return (
            <SwiperSlide key={index} >
              <NewsPlate item={ item } />
            </SwiperSlide>
          )
        })

      }

        
      </Swiper>
    </>
  )
}

export default Slider
