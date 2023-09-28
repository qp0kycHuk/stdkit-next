import gsap from 'gsap'
import { useRef } from 'react'

interface IProps {
  className?: string
}

export function Steps({ className }: IProps) {
  const line = useRef<HTMLDivElement>(null)
  const hook = useRef<HTMLDivElement>(null)
  const fish1 = useRef<HTMLDivElement>(null)
  const fish2 = useRef<HTMLDivElement>(null)
  const fish3 = useRef<HTMLDivElement>(null)
  const fish4 = useRef<HTMLDivElement>(null)

  function transitionHandler() {
    const tl = gsap.timeline({
      paused: true,
    })

    if (line.current && getComputedStyle(line.current).display !== 'none') {
      tl.fromTo(
        line.current,
        {
          strokeDashoffset: getComputedStyle(line.current).getPropertyValue('--stroke-offset-start').toString(),
        },
        {
          strokeDashoffset: getComputedStyle(line.current).getPropertyValue('--stroke-offset-end').toString(),
        }
      )
    }

    tl.fromTo(
      hook.current,
      {
        scale: 0,
        rotateZ: 30,
        x: -5,
        y: -10,
      },
      {
        x: 0,
        y: 0,
        rotateZ: 0,
        scale: 1,
        ease: 'elastic.out(1, 1)',
        duration: 2,
      },
      '+=0.5'
    )
    tl.fromTo(
      fish1.current,
      {
        scale: 0,
        x: -50,
        y: -50,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 1)',
      },
      '-=0.75'
    )
    tl.fromTo(
      fish2.current,
      {
        scale: 0,
        x: -50,
        y: 50,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 1)',
      },
      '-=0.75'
    )
    tl.fromTo(
      fish3.current,
      {
        scale: 0,
        x: 50,
        y: 50,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 1)',
      },
      '-=0.75'
    )
    tl.fromTo(
      fish4.current,
      {
        scale: 0,
        x: 50,
      },
      {
        scale: 1,
        x: 0,
        duration: 1,
        ease: 'elastic.out(1, 1)',
      },
      '-=0.75'
    )
    tl.play()

    tl.then(() => {
      const options = {
        repeat: -1,
        duration: 12,
        // repeatDelay: 'random(1, 3)',
        // delay: 'random(1, 3)',
      }

      gsap.to(fish1.current, {
        keyframes: {
          x: [0, 10, 0],
          y: [0, 10, 0],
          easeEach: 'power2.out',
        },
        delay: 1,
        ...options,
      })

      gsap.to(fish2.current, {
        keyframes: {
          x: [0, -10, 0],
          y: [0, 10, 0],
          easeEach: 'power2.out',
        },
        ...options,
      })

      gsap.to(fish4.current, {
        keyframes: {
          x: [0, -10, 0],
          easeEach: 'power2.out',
        },
        repeatDelay: 2,
        ...options,
      })

      gsap.to(fish3.current, {
        keyframes: {
          x: [0, 10, 0],
          y: [0, 10, 0],
          easeEach: 'power2.out',
        },
        repeatDelay: 1,
        ...options,
      })
    })
  }

  return (
    <div className={className}>
      <div className="text-2xl md:text-3.5xl font-semibold mb-8 md:mb-12 mobile-fade-in-down" data-scroll>
        Как проходит разработка лендинга
      </div>
      <div className="page-landing-steps space-y-4 md:space-y-8">
        <div className="mobile-fade-in-down" data-scroll>
          <div className="page-landing-step " data-scroll data-scroll-offset="55%">
            <div className="page-landing-step-content">
              <div className="text-xl md:text-2xl font-medium mb-3">1. Согласование</div>
              <div className="max-sm:text-sm lg:text-lg leading-normal">
                Итог работы на данном этапе - согласование основных моментов будущей работы: целей и задач,{' '}
                <br className="max-lg:hidden" />
                которые должен решать сайт, главные компоненты сайта, функциональные блоки, палитра и тд
              </div>
              <div className="flex items-center gap-2 mt-8">
                <svg className="icon text-lg text-yellow">
                  <use xlinkHref="/img/icons.svg#calendar" />
                </svg>
                <span className="text-sm sm:text-lg font-semibold">Приблизительные сроки этапа: 2-3 дня</span>
              </div>

              <div className="page-landing-step-dot"></div>
              <div className="page-landing-step-line">
                <svg className="w-full h-full">
                  <use xlinkHref="/img/landing/step-line.svg#line" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-fade-in-down" data-scroll>
          <div className="page-landing-step " data-scroll data-scroll-offset="55%">
            <div className="page-landing-step-content">
              <div className="text-xl md:text-2xl font-medium mb-3">2. Разработка дизайна</div>
              <div className="max-sm:text-sm lg:text-lg leading-normal">
                Итог работы на данном этапе - согласование основных моментов будущей работы: целей и задач,{' '}
                <br className="max-lg:hidden" />
                которые должен решать сайт, главные компоненты сайта, функциональные блоки, палитра и тд
              </div>
              <div className="flex items-center gap-2 mt-8">
                <svg className="icon text-lg text-yellow">
                  <use xlinkHref="/img/icons.svg#calendar" />
                </svg>
                <span className="text-sm sm:text-lg font-semibold">Приблизительные сроки этапа: 2-3 дня</span>
              </div>
              <div className="page-landing-step-dot"></div>
              <div className="page-landing-step-line -translate-x-full -scale-x-100">
                <svg className="w-full h-full">
                  <use xlinkHref="/img/landing/step-line.svg#line" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-fade-in-down" data-scroll>
          <div className="page-landing-step " data-scroll data-scroll-offset="55%">
            <div className="page-landing-step-content">
              <div className="text-xl md:text-2xl font-medium mb-3">3. Программирование</div>
              <div className="max-sm:text-sm lg:text-lg leading-normal">
                Итог работы на данном этапе - согласование основных моментов будущей работы: целей и задач,{' '}
                <br className="max-lg:hidden" />
                которые должен решать сайт, главные компоненты сайта, функциональные блоки, палитра и тд
              </div>
              <div className="flex items-center gap-2 mt-8">
                <svg className="icon text-lg text-yellow">
                  <use xlinkHref="/img/icons.svg#calendar" />
                </svg>
                <span className="text-sm sm:text-lg font-semibold">Приблизительные сроки этапа: 2-3 дня</span>
              </div>
              <div className="page-landing-step-dot"></div>
              <div className="page-landing-step-line">
                <svg className="w-full h-full">
                  <use xlinkHref="/img/landing/step-line.svg#line" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-fade-in-down relative z-1" data-scroll>
          <div className="page-landing-step " data-scroll data-scroll-offset="55%" onAnimationStart={transitionHandler}>
            <div className="page-landing-step-content">
              <div className="text-xl md:text-2xl font-medium mb-3">4. Завершение и запуск</div>
              <div className="max-sm:text-sm lg:text-lg leading-normal">
                Итог работы на данном этапе - согласование основных моментов будущей работы: целей и задач,{' '}
                <br className="max-lg:hidden" />
                которые должен решать сайт, главные компоненты сайта, функциональные блоки, палитра и тд
              </div>
              <div className="flex items-center gap-2 mt-8">
                <svg className="icon text-lg text-yellow">
                  <use xlinkHref="/img/icons.svg#calendar" />
                </svg>
                <span className="text-sm sm:text-lg font-semibold">Приблизительные сроки этапа: 2-3 дня</span>
              </div>
              <div className="page-landing-step-dot"></div>
              <div className="page-landing-step-line -translate-x-full -scale-x-100" ref={line}>
                <svg className="w-full h-full">
                  <use xlinkHref="/img/landing/step-line.svg#line" />
                </svg>
              </div>
              <div className="page-landing-step-finish">
                <div className="page-landing-step-hook" ref={hook}>
                  <img src="/img/landing/step-hook.svg" alt="" />
                </div>
                <div className="page-landing-step-fish page-landing-step-fish-1" ref={fish1}>
                  <img src="/img/landing/step-fish.svg" alt="" />
                </div>
                <div className="page-landing-step-fish page-landing-step-fish-2" ref={fish2}>
                  <img src="/img/landing/step-fish.svg" alt="" />
                </div>
                <div className="page-landing-step-fish page-landing-step-fish-3" ref={fish3}>
                  <img src="/img/landing/step-fish.svg" alt="" />
                </div>
                <div className="page-landing-step-fish page-landing-step-fish-4" ref={fish4}>
                  <img src="/img/landing/step-fish.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-landing-itog mobile-fade-in-down relative" data-scroll>
          <div className="page-landing-itog-line md:hidden">
            <svg className="w-full h-full">
              <use xlinkHref="/img/landing/step-line.svg#line" />
            </svg>
          </div>
          <div className="text-xl md:text-3.5xl font-bold mb-3">Что вы получите в итоге?</div>
          <div className="text-sm md:text-lg">
            В результате Вы получаете качественный веб-ресурс, <br className="max-sm:hidden" />
            интересный для пользователей и приносит прибыль
          </div>
        </div>
      </div>
    </div>
  )
}
