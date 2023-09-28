import { useForm } from 'react-hook-form'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Controller } from 'swiper'
import { Swiper as SwiperType } from 'swiper/types'
import { useState } from 'react'
import { getMaskedPhoneValue } from '@/utils/helpers/phoneMask'
import { Contacts } from '@/components/Form/Form.Contacts'
import { Policy } from '@/components/Form/Form.Policy'
import { useToggle } from '@/hooks/useToggle'
import axios from 'axios'
import { DialogSuccess } from '@/components/DialogSuccess'

const aims = [
  {
    name: 'Реклама какого-либо продукта',
  },
  {
    name: 'Интернет продажи',
  },
  {
    name: 'Личный сайт',
  },
  {
    name: 'Другое',
  },
]

export function Qwiz({ className }: IProps) {
  const [successDialogOpen, , openSuccessDialog, closeSuccessDialog] = useToggle()
  const [loading, , loadingStart, loadingEnd] = useToggle()
  const { register, handleSubmit, reset, setValue } = useForm<Inputs>({
    defaultValues: {
      aim: aims[0].name,
    },
  })

  const [formSwiper, setFormSwiper] = useState<SwiperType>(null)
  const [imagesSwiper, setImagesSwiper] = useState<SwiperType>(null)

  const swiperOptions: SwiperProps = {
    modules: [Controller],
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    touchRatio: 0,
    navigation: {
      nextEl: '.qwiz-next',
    },
  }

  function slideNext() {
    formSwiper.slideNext()
  }

  async function submitHandler(data: Inputs) {
    loadingStart()

    await axios.post('/api/submit', data)

    loadingEnd()
    openSuccessDialog()
    reset()
    formSwiper.slideTo(0)
    imagesSwiper.slideTo(0)
  }

  return (
    <div className={className}>
      <div className="text-2xl md:text-3.5xl font-semibold md:mb-6 mobile-fade-in-down" data-scroll>
        Нужен ли вам лендинг?
      </div>
      <div className="text-sm md:text-lg mb-10 md:mb-12 mobile-fade-in-down" data-scroll>
        Пройдите опроси узнайте, какой сайт вам нужен
      </div>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="qwiz flex items-center gap-8  group p-4 max-lg:flex-col max-md:overflow-hidden mobile-fade-in-down"
        data-scroll
      >
        <Swiper
          {...swiperOptions}
          onSwiper={setFormSwiper}
          controller={{ control: imagesSwiper }}
          className="qwiz-slider  swiper w-full lg:w-5/12 max-md:overflow-visible"
        >
          <SwiperSlide className="qwiz-slide swiper-slide  md:p-6 self-start">
            <div className="text-xl md:text-2xl font-medium mb-6 md:mb-8">Какие цели у вашего будущего сайта?</div>
            <div className="space-y-4">
              {aims.map((aim) => (
                <label className="form-field text-sm sm:text-lg" key={aim.name}>
                  <div className="flex items-center gap-3">
                    <input {...register('aim')} value={aim.name} type="radio" className="form-input-checkbox" />
                    <div className="form-radio-target"></div>
                    {aim.name}
                  </div>
                </label>
              ))}
            </div>

            <button
              type="button"
              className="btn btn--primary btn--contur qwiz-next mt-8 sm:mt-11 group-[.stopped]:pointer-events-none group-[.stopped]:opacity-40"
              onClick={slideNext}
            >
              <span className="max-sm:text-sm">Дальше</span>
            </button>
          </SwiperSlide>

          <SwiperSlide className="qwiz-slide swiper-slide  md:p-6 self-start">
            <div className="text-xl md:text-2xl font-medium mb-6 md:mb-8">Давайте поговорим</div>

            <Contacts source="Лэндинг - квиз" register={register} setValue={setValue} />

            <button type="submit" disabled={loading} className="dialog-form__btn btn btn--text btn--contur mt-9">
              Отправить
            </button>

            <Policy />
          </SwiperSlide>
        </Swiper>
        <Swiper
          {...swiperOptions}
          onSwiper={setImagesSwiper}
          controller={{ control: formSwiper }}
          className="qwiz-images swiper ml-auto w-full lg:w-6/12"
          dir="rtl"
        >
          <SwiperSlide className="qwiz-image swiper-slide ratio ratio-[658/362] rounded-lg overflow-hidden">
            <img src="/img/landing/qwiz.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </SwiperSlide>

          <SwiperSlide className="qwiz-image swiper-slide ratio ratio-[658/462] rounded-lg overflow-hidden">
            <img src="/img/test.gif" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </form>

      <DialogSuccess isOpen={successDialogOpen} onClose={closeSuccessDialog} />
    </div>
  )
}

interface IProps {
  className?: string
}

type Inputs = {
  name: string
  phone: string
  form: string
  aim: string
}
