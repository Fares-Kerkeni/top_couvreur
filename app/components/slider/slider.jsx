import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import header_home from "../../assets/header_home.png";
import toiture_apres from "../../assets/toiture_apres.jpg";
import toiture_avant from "../../assets/toiture_avant.jpg";
import toiture1 from "../../assets/toiture1.jpg";
import toiture2 from "../../assets/toiture2.jpg";
import velux from "../../assets/velux.jpg";
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
          <Image src={toiture_avant} width={300} height={300} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={toiture_apres} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={toiture1} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={toiture2} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={velux} width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
