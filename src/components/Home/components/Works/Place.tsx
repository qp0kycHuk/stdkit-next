export function Place() {
  return (
    <div className="work-wrapper" data-scroll-section>
      <div className="work-fixed-target" id="krav-fixed-target"></div>

      <section className="work krav" data-scroll data-scroll-sticky data-scroll-target="#krav-fixed-target">
        <div className="container work__container">
          <div className="work__content" data-scroll data-scroll-speed="2">
            <div className="work__title krav__title mb-10" data-scroll>
              Kravchenko <br />
              Place <img src="img/work/krav/title-icon-min.png" alt="" /> <br />
            </div>
            <div className="leading-normal mb-5 lg:mb-10 work__subtitle mobile-fade-in-down max-lg:text-sm" data-scroll>
              Эстетика, современный стиль, комфорт – все это <br />
              про наше место отдыха. <br />
              Приезжайте и наслаждайтесь <br />
              спокойным отдыхом в приятном окружении!
            </div>
            <div className="text-xl lg:text-1.5xl leading-normal work__sign mobile-fade-in-down" data-scroll>
              Разработка <span className="fade-40">сайта</span> <br />
              Продвижение <span className="fade-40">в топ</span> <br />
              Техническая поддержка
            </div>
            <div className="mb-10"></div>
            <div className="lg:mb-10"></div>
            <div className="mobile-fade-in-down flex" data-scroll>
              <button
                className="btn btn--white btn--contur"
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
              <source srcSet="img/work/krav/preview-min.webp" type="image/webp" />
              <img src="img/work/krav/preview-min.jpg" alt="" />
            </picture>
          </div>
        </div>

        <div className="krav-buner krav-buner--1" data-scroll data-scroll-speed="5">
          <img src="img/work/krav/buner-1-min.png" alt="" />
        </div>
        <div className="krav-buner krav-buner--2" data-scroll data-scroll-speed="4">
          <img src="img/work/krav/buner-2-min.png" alt="" />
        </div>
        <div className="krav-buner krav-buner--3" data-scroll data-scroll-speed="5" data-scroll-delay="0.25">
          <img src="img/work/krav/buner-3-min.png" alt="" />
        </div>
        <div className="krav-buner krav-buner--4" data-scroll data-scroll-speed="3" data-scroll-delay="0.25">
          <img src="img/work/krav/buner-4-min.png" alt="" />
        </div>
      </section>
    </div>
  )
}
