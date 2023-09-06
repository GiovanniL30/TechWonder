import React from 'react'
import '../styles/productdeatilcarousel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

export default function ProductCarousel({ product }) {
  const productElement = product.images.map((image, index) => {
    return (
      <SwiperSlide key={index} className='my-swiper-slide'>
        <h3>{index + 1}</h3>
        <img
          className='product-detail-carousel'
          src={image}
          alt={product.name}
        />
      </SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='hello-swiper'
      >
        {productElement}
      </Swiper>
    </>
  )
}
