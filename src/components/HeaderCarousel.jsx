import React from 'react'
import '../styles/headercarousel.css'
import { useShopContext } from '../context/ProductContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { NavLink } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
export default function HeaderCarousel() {
  const { products } = useShopContext()

  const productElements = products.map((item, index) => {
    const currentImage = item.images[0]

    if (index >= 4) return <></>

    return (
      <React.Fragment key={item.id}>
        <div className='header-item-container'>
          <SwiperSlide>
            <div className='slide-container-header'>
              <NavLink to={`product-detail/${item.id}`}>
                <img
                  className='item-image'
                  src={currentImage}
                  alt={item.name}
                />
              </NavLink>
            </div>
          </SwiperSlide>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='header-swiper-container'
      >
        {productElements}
      </Swiper>
    </>
  )
}
