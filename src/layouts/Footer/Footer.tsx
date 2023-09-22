import { Credentials } from './Footer.Credentials'

export function Footer() {
  return (
    <>
      <footer className="footer" data-scroll-section>
        <div className="footer-top">
          <div className="footer-nav">
            <div className="text-body-0 text--demibold mb-6">Разработка сайта</div>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Корпоративный сайт
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Интернет-магазин
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Landing Page
            </a>
          </div>
          <div className="footer-nav">
            <div className="text-body-0 text--demibold mb-6">Работа с сайтом</div>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Техническая поддержка
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              SEO-продвижение
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Контекстная реклама
            </a>
          </div>
          <div className="footer-nav">
            <div className="text-body-0 text--demibold mb-6">Ведение соцсетей</div>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Оформление аккаунта
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Администрирование
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Дизайн и креатив
            </a>
          </div>
          <div className="footer-nav">
            <div className="text-body-0 text--demibold mb-6">Ведение соцсетей</div>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Оформление аккаунта
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Администрирование
            </a>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              Дизайн и креатив
            </a>
          </div>
          <div className="footer-top__separator"></div>
          <div className="footer-nav footer-contacts">
            <div className="text-body-0 text--demibold mb-6">Контакты</div>
            <a href="javascript:;" className="text-body-1 fade-80 mb-5 btn btn--link link-hover">
              ул.Рождественская Набережная 45/1
            </a>
            <a href="javascript:;" className="text-subtitle-2 fade-80 mb-5 btn btn--link link-hover">
              +7 (918) 317-99-73
            </a>
            <a href="javascript:;" className="text-subtitle-2 fade-80 mb-5 btn btn--link link-hover">
              info@stdkit.ru
            </a>
          </div>
        </div>

        <div className="flex my-10">
          <img src="img/footer-logo.svg" alt="" className="mr-3" />
          <div className="text-subtitle-1">Сложное становится простым</div>
        </div>

        <div className="footer-bottom">
          <img src="img/timeweb.png" alt="" className="mr-4 d-block" />
          <img src="img/bitrix.png" alt="" className="mr-4 d-block" />
          <img src="img/direct.png" alt="" className="mr-4 d-block" />
          <img src="img/bitrix24.png" alt="" className="mr-4 d-block" />
          <div className="ml-auto text-sm text--medium w-100 w-md-auto mt-5 mt-md-auto">/ ООО “Студия КИТ” © 2022</div>
        </div>
      </footer>
      <Credentials />
    </>
  )
}
