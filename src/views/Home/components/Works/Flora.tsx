import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

export function Flora() {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <>
      <div className="work-wrapper" data-scroll-section id="portfolio">
        <div className="work-fixed-target" id="flora-fixed-target"></div>

        <section className="work flora" data-scroll data-scroll-sticky data-scroll-target="#flora-fixed-target">
          <div className="container work__container">
            <div className="work__content" data-scroll data-scroll-speed="2">
              <div className="work__title flora__title mb-10 " data-scroll>
                Интернет-магазин <br />
                цветов Флора <img src="img/work/flora/title-icon-min.png" alt="" />
              </div>
              <div
                className="leading-normal mb-5 lg:mb-10 work__subtitle mobile-fade-in-down max-lg:text-sm"
                data-scroll
              >
                Ресурс разработан для уникального города <br />
                России - Норильска
              </div>
              <div
                className="text-xl lg:text-1.5xl font-semibold leading-normal work__sign mobile-fade-in-down "
                data-scroll
              >
                Разработка <span className="opacity-40">сайта</span> <br />
                Продвижение <span className="opacity-40">в топ</span> <br />
                Техническая поддержка
              </div>
              <div className="mb-10"></div>
              <div className="lg:mb-10"></div>
              <div className="mobile-fade-in-down flex" data-scroll>
                <button className="btn btn--text btn--contur" onClick={openFormDialog}>
                  Хочу так же
                </button>
              </div>
            </div>
            <div className="work__preview self-end" data-scroll data-scroll-speed="-2">
              <picture>
                <source srcSet="img/work/flora/preview-min.webp" type="image/webp" />
                <img src="img/work/flora/preview-min.jpg" alt="" />
              </picture>
            </div>
          </div>
          <div className="flora-buner flora-buner--1" data-scroll data-scroll-speed="5">
            <img src="img/work/flora/buner-1-min.png" alt="" />
          </div>
          <div className="flora-buner flora-buner--2" data-scroll data-scroll-speed="4">
            <img src="img/work/flora/buner-2-min.png" alt="" />
          </div>
          <div className="flora-buner flora-buner--3" data-scroll data-scroll-speed="5">
            <img src="img/work/flora/buner-3-min.png" alt="" />
          </div>
          <div className="flora-buner flora-buner--4" data-scroll data-scroll-speed="3">
            <img src="img/work/flora/buner-4-min.png" alt="" />
          </div>
        </section>
      </div>

      <DialogForm isOpen={formDialogOpen} onClose={closeFormDialog} />
    </>
  )
}
