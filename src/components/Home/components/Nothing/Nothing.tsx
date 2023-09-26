import { useLocomotiveScroll } from 'react-locomotive-scroll'

export function Nothing() {
  const { scroll } = useLocomotiveScroll()

  return (
    <section className="nothing" data-scroll-section>
      <div className="nothing-background">
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div
          className="nothing-background__item nothing-background__item--big"
          data-scroll
          data-scroll-delay="0.25"
          data-scroll-speed="-2"
        ></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>

        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div
          className="nothing-background__item nothing-background__item--big"
          data-scroll
          data-scroll-delay="0.25"
          data-scroll-speed="-2"
        ></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
        <div className="nothing-background__item" data-scroll data-scroll-delay="0.25" data-scroll-speed="-2"></div>
      </div>
      <div className="nothing-content">
        <div className="nothing__title" data-scroll data-scroll-delay="0.25" data-scroll-speed="1.5">
          Реализуем все ваши{' '}
          <div className="nothing-lamp" data-scroll>
            <img src="img/lamp.png" alt="" />
          </div>{' '}
          идеи, <br />
          превратив их{' '}
          <div className="nothing-money" data-scroll>
            <img src="img/money.png" alt="" />
          </div>{' '}
          в эффективный <br />
          интернет-ресурс{' '}
          <div className="nothing-rocket" data-scroll>
            <img src="img/rocket.png" alt="" />
          </div>
        </div>
        <div
          className="nothing__subtitle mobile-fade-in-down"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="2"
        >
          Работа нашей Студии находится на стыке творчества и технологий
          <span>Некоторые интересные работы</span>
        </div>
        <div
          className="flex mobile-fade-in-down"
          data-scroll
          data-scroll-delay="0.05"
          data-scroll-speed="2.5"
          data-scroll-to="#flora"
        >
          <button className="nothing__btn btn btn--text btn--contur" onClick={() => scroll.scrollTo('#portfolio')}>
            <svg className="icon">
              <use xlinkHref="img/icons.svg#to-down" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
