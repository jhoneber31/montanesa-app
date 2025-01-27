"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideShow.css";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {

  return (
    <div className={`${className}`}>
      <Swiper
        style={{
          width: "100vw",
          height: "400px",
        }}
        pagination={true}
        autoplay={{
          delay: 3000,

        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      > 
      {
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={title}
              className="object-fill"
            />
        </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
};
