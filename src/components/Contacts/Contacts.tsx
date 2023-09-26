import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export function Contacts() {
  return (
    <section className="contact-page" data-scroll-section>
      <div className="contact-page-map" id="map">
        <YMaps>
          <Map width="100%" height="100%" defaultState={{ center: [45.03191, 38.915172], zoom: 16 }}>
            <Placemark
              geometry={[45.03191, 38.921172]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '../img/geo.png',
                iconImageSize: [68, 68],
                iconImageOffset: [-34, -34],
              }}
            />
          </Map>
        </YMaps>
      </div>
      <div className="contact-page-content">
        <div className="contact-page__title">Наши контакты</div>
        <div className="contact-page__address flex flex-align-center">
          <svg className="icon">
            <use xlinkHref="/img/icons.svg#address" />
          </svg>
          <div>
            350089, г.Краснодар, <br />
            ул.Рождественская Набережная 45/1
          </div>
        </div>
        <a href="tel:+7 (952) 835-50-16" className="contact-page__phone flex flex-align-center mt-4 link-hover-wrapper">
          <svg className="icon">
            <use xlinkHref="/img/icons.svg#phone" />
          </svg>
          <span className="link-hover">+7 (952) 835-50-16</span>
        </a>
        <div className="contact-page__separator"></div>

        <a href="mailto:info@stdkit.ru" className="contact-page__email contact-page__email--blue link-hover-wrapper">
          <div className="contact-page__email-sign">Нужен сайт</div>
          <span className="link-hover"> info@stdkit.ru </span>
        </a>
        <a
          href="mailto:partner@stdkit.ru"
          className="contact-page__email contact-page__email--green link-hover-wrapper"
        >
          <div className="contact-page__email-sign">Хочу сотрудничать</div>
          <span className="link-hover"> partner@stdkit.ru </span>
        </a>
        <a href="mailto:student@stdkit.ru" className="contact-page__email contact-page__email--red link-hover-wrapper">
          <div className="contact-page__email-sign">Я практикант</div>
          <span className="link-hover"> student@stdkit.ru </span>
        </a>

        <button
          data-fancybox-modal
          data-type="ajax"
          data-src="dialog-form.html"
          className="contact-page__btn btn btn--text btn--contur"
        >
          У меня есть вопрос
        </button>
        <div className="contact-page__separator"></div>

        <div className="lh-1-5 text-sm">
          <div className="text--demibold  ">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СТДКИТ»</div>
          <div className="fade-60">
            Юридический и почтовый адрес: 350089, Краснодарский край, <br />
            г. Краснодар, ул. Рождественская набережная, д. 45, офис 4
          </div>
          <div className="fade-60 mt-4">
            ИНН: 2308288160 <br />
            КПП: 230801001 <br />
            ОГРН: 1222300056571
          </div>
        </div>
      </div>
    </section>
  )
}
