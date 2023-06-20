import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../../App.css";

import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { getAllPricingSliders } from '../../../../api/requests';

const PricingPlan = () => {
  const [pricingSliders,setPricingSliders] = useState([]);
    useEffect(()=>{
       getAllPricingSliders().then((res)=>{
        setPricingSliders(res.data)
        console.log(res.data)
       })
    },[])
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {pricingSliders && pricingSliders.map((pricingSlider) => (
      <SwiperSlide key={pricingSlider._id} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pricingSlider.image})` ,backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <article style={{textAlign:'center', padding:'300px 40px'}}>
        <h3 style={{color:'yellow'}}>MOVFLX</h3>
        <h1 style={{color:'white', fontWeight:'900', fontSize:'60px',lineHeight: '1.2'}}>PRICING PLAN</h1>
        
        
       
        </article>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default PricingPlan