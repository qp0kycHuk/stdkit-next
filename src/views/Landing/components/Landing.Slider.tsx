import { screens } from '@/const'
import { useIsServer } from '@/hooks/useIsServer'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  className?: string
}

export function Slider({ className }: IProps) {
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
        <SwiperSlide className="page-landing-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3">
          <div className="ratio ratio-[402/348] relative">
            <img src="/img/landing/example/1.png" alt="" className="absolute-image object-cover" />
          </div>
          <button className="page-landing-example-title btn btn--link mt-7">
            klubsadprof-e.ru
            <svg className="icon text-small-2 ml-2">
              <use xlinkHref="/img/icons.svg#link" />
            </svg>
          </button>
        </SwiperSlide>
        <SwiperSlide className="page-landing-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3">
          <div className="ratio ratio-[402/348] relative">
            <img src="/img/landing/example/1.png" alt="" className="absolute-image object-cover" />
          </div>
          <button className="page-landing-example-title btn btn--link mt-7">
            klubsadprof-e.ru
            <svg className="icon text-small-2 ml-2">
              <use xlinkHref="/img/icons.svg#link" />
            </svg>
          </button>
        </SwiperSlide>
        <SwiperSlide className="page-landing-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3">
          <div className="ratio ratio-[402/348] relative">
            <img src="/img/landing/example/1.png" alt="" className="absolute-image object-cover" />
          </div>
          <button className="page-landing-example-title btn btn--link mt-7">
            klubsadprof-e.ru
            <svg className="icon text-small-2 ml-2">
              <use xlinkHref="/img/icons.svg#link" />
            </svg>
          </button>
        </SwiperSlide>
        <SwiperSlide className="page-landing-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3">
          <div className="ratio ratio-[402/348] relative">
            <img src="/img/landing/example/1.png" alt="" className="absolute-image object-cover" />
          </div>
          <button className="page-landing-example-title btn btn--link mt-7">
            klubsadprof-e.ru
            <svg className="icon text-small-2 ml-2">
              <use xlinkHref="/img/icons.svg#link" />
            </svg>
          </button>
        </SwiperSlide>
        <SwiperSlide className="page-landing-example swiper-slide w-10/12 sm:w-1/2 lg:w-1/3 mr-3">
          <div className="ratio ratio-[402/348] relative">
            <img src="/img/landing/example/1.png" alt="" className="absolute-image object-cover" />
          </div>
          <button className="page-landing-example-title btn btn--link mt-7">
            klubsadprof-e.ru
            <svg className="icon text-small-2 ml-2">
              <use xlinkHref="/img/icons.svg#link" />
            </svg>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
