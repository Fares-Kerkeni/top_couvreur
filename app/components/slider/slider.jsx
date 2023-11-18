import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import header_home from "../../assets/header_home.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <Image src={header_home} width={300} height={300} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={header_home} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={header_home} width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
