// import { Credentials } from './Footer.Credentials'

export function Footer() {
  return (
    <>
      <footer className="footer" data-scroll-section>
        <div className="footer-top">
          <div className="footer-nav">
            <div className="text-lg font-semibold mb-6">Разработка сайта</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Корпоративный сайт</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Интернет-магазин</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Landing Page</a>
          </div>
          <div className="footer-nav">
            <div className="text-lg font-semibold mb-6">Работа с сайтом</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Техническая поддержка</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">SEO-продвижение</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Контекстная реклама</a>
          </div>
          <div className="footer-nav">
            <div className="text-lg font-semibold mb-6">Ведение соцсетей</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Оформление аккаунта</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Администрирование</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Дизайн и креатив</a>
          </div>
          <div className="footer-nav">
            <div className="text-lg font-semibold mb-6">Ведение соцсетей</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Оформление аккаунта</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Администрирование</a>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">Дизайн и креатив</a>
          </div>
          <div className="footer-top__separator"></div>
          <div className="footer-nav footer-contacts">
            <div className="text-lg font-semibold mb-6">Контакты</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">ул.Рождественская Набережная 45/1</a>
            <a className="text-lg font-semibold opacity-80 mb-5 btn btn--link link-hover">+7 (918) 317-99-73</a>
            <a className="text-lg font-semibold opacity-80 mb-5 btn btn--link link-hover">info@stdkit.ru</a>
          </div>
        </div>

        <div className="flex my-10">
          <img src="img/footer-logo.svg" alt="" className="mr-3" />
          <div className="text-xl font-semibold">Сложное становится простым</div>
        </div>

        <div className="footer-bottom">
          <img src="img/timeweb.png" alt="" className="mr-4 block" />
          <img src="img/bitrix.png" alt="" className="mr-4 block" />
          <img src="img/direct.png" alt="" className="mr-4 block" />
          <img src="img/bitrix24.png" alt="" className="mr-4 block" />
          <div className="ml-auto text-sm font-semibold w-full md:w-auto mt-5 md:mt-auto">
            / ООО “Студия КИТ” © 2022
          </div>
        </div>
      </footer>
      {/* <Credentials /> */}
    </>
  )
}
