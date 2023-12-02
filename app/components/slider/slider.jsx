import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import header_home from "../../assets/header_home.png";
import toiture_apres from "../../assets/image_ac/toiture_apres.jpg";
import toiture_avant from "../../assets/image_ac/toiture_avant.jpg";
import toiture1 from "../../assets/image_ac/toiture1.jpg";
import toiture2 from "../../assets/image_ac/toiture2.jpg";
import velux from "../../assets/image_ac/velux.jpg";
import img1 from "../../assets/img_car/1.jpg";
import img2 from "../../assets/img_car/2.jpg";
import img3 from "../../assets/img_car/3.jpg";
import img4 from "../../assets/img_car/4.jpg";
import img5 from "../../assets/img_car/5.jpg";
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
        <SwiperSlide>
          <Image src={img1} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img5} width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
