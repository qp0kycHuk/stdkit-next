import { screens } from '@/const'
import { useIsServer } from '@/hooks/useIsServer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Slide } from './Seo.Slider.Slide'
import { items } from './data'

export function Slider({ className = '' }) {
  const isServer = useIsServer()
  const sliderProps = {
    slidesPerView: 1.2,
    spaceBetween: 12,
    loop: true,
    breakpoints: {
      [screens.lg]: {
        slidesPerView: 3.1,
      },
      [screens.sm]: {
        slidesPerView: 2.1,
      },
    },
  }

  if (isServer) {
    return null
  }

  return (
    <div className={className}>
      <div className="text-2xl md:text-3.5xl font-semibold mb-8 md:mb-14 mobile-fade-in-down" data-scroll>
        Примеры наших лендингов
      </div>

      <Swiper className="page-landing-slider swiper mobile-fade-in-down" data-scroll {...sliderProps}>
        {items.map((item, index) => (
          <SwiperSlide className="page-seo-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3" key={index}>
            <Slide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
