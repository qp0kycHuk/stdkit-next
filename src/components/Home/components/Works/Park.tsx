export function Park() {
  return (
    <div className="work-wrapper" data-scroll-section>
      <div className="work-fixed-target" id="park-fixed-target"></div>

      <section className="work park" data-scroll data-scroll-sticky data-scroll-target="#park-fixed-target">
        <div className="container work__container">
          <div className="work__content" data-scroll data-scroll-speed="2">
            <div className="work__title park__title mb-10" data-scroll>
              Инфомат <br />
              в парке <img src="img/work/park/title-icon-min.png" alt="" /> <br />
              Краснодар
            </div>
            <div className="leading-normal mb-5 lg:mb-10 work__subtitle mobile-fade-in-down max-lg:text-sm" data-scroll>
              Эстетика, современный стиль, комфорт – все это <br />
              про наше место отдыха. <br />
              Приезжайте и наслаждайтесь <br />
              спокойным отдыхом в приятном окружении!
            </div>
            <div
              className="text-xl lg:text-1.5xl font-semibold leading-normal work__sign mobile-fade-in-down"
              data-scroll
            >
              Разработка <span className="fade-40">сайта</span> <br />
              Продвижение <span className="fade-40">в топ</span> <br />
              Техническая поддержка
            </div>
            <div className="mb-10"></div>
            <div className="lg:mb-10"></div>
            <div className="mobile-fade-in-down flex" data-scroll>
              <button
                className="btn btn--text btn--contur"
                data-fancybox-modal
                data-type="ajax"
                data-src="dialog-form.html"
              >
                Хочу так же
              </button>
            </div>
          </div>
          <div className="work__preview self-end" data-scroll data-scroll-speed="-2">
            <picture>
              <source srcSet="img/work/park/preview-min.webp" type="image/webp" />
              <img src="img/work/park/preview-min.jpg" alt="" />
            </picture>
          </div>
        </div>
        <div className="park-buner park-buner--1" data-scroll data-scroll-speed="4">
          <img src="img/work/park/buner-1-min.png" alt="" />
        </div>
        <div className="park-buner park-buner--2" data-scroll data-scroll-speed="2">
          <img src="img/work/park/buner-2-min.png" alt="" />
        </div>
        <div className="park-buner park-buner--3" data-scroll data-scroll-speed="8">
          <img src="img/work/park/buner-3-min.png" alt="" />
        </div>
        <div className="park-buner park-buner--4" data-scroll data-scroll-speed="6">
          <img src="img/work/park/buner-4-min.png" alt="" />
        </div>
        <div className="park-buner park-buner--5" data-scroll data-scroll-speed="2">
          <img src="img/work/park/buner-5-min.png" alt="" />
        </div>
        <div className="park-buner park-buner--6" data-scroll data-scroll-speed="4">
          <img src="img/work/park/buner-6-min.png" alt="" />
        </div>
      </section>
    </div>
  )
}
