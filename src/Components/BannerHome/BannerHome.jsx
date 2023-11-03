import React from 'react'
import './BannerHome.css'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function ShowImagesSlider() {

    const images = [
        {id:1, image:"https://www.gsuplementos.com.br/upload/banner/af07084c5402fdf3ab0e3bd178b25e19.webp"},
        {id:2, image:"https://www.gsuplementos.com.br/upload/banner/54c0b55d92b306b643042a6d6cf4ff17.webp"},
        {id:3, image:"https://www.gsuplementos.com.br/upload/banner/4f521d5f265993e9b32e1179cffd0bc8.webp"},
        {id:4, image:"https://www.gsuplementos.com.br/upload/banner/4551e292ee33d8e622bd427f8fce45a0.webp"},
        {id:5, image:"https://www.gsuplementos.com.br/upload/banner/9716ead06a4414af13ca1777f99fee04.webp"},
        {id:6, image:"https://www.gsuplementos.com.br/upload/banner/ad4cc0a747565256fd87fe89f154edb8.webp"},
        {id:7, image:"https://www.gsuplementos.com.br/upload/banner/38abc339125c0e2b9e81b1086a73a3bb.webp"},
        {id:8, image:"https://www.gsuplementos.com.br/upload/banner/b43e612fe8e8663bf8e9a765886e4f0d.webp"},
        {id:9, image:"https://www.gsuplementos.com.br/upload/banner/d1364abf204ec27d3824b359bbc04574.webp"}
    ]

  return (
    <div className='containerSlider'>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            loop={true}
        >
            {images.map((image) => (
                <SwiperSlide key={image.id}>
                    <img src={image.image} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ShowImagesSlider
