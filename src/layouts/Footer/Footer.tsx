import { data as serviceData } from '@/views/Services/data/items'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className="footer" data-scroll-section>
        <div className="footer-top gap-3">
          {serviceData.map((item, index) => (
            <div className="footer-nav " key={index}>
              <div className="text-lg font-semibold mb-6">{item.name}</div>
              {item.items.map((service, i) =>
                service.path ? (
                  <Link href={service.path} className="text-base opacity-80 mb-5 btn btn--link link-hover" key={i}>
                    {service.name}
                  </Link>
                ) : (
                  <a className="text-base opacity-80 mb-5 btn btn--link link-hover" key={i}>
                    {service.name}
                  </a>
                )
              )}
            </div>
          ))}

          <div className="footer-top__separator"></div>
          <div className="footer-nav footer-contacts">
            <div className="text-lg font-semibold mb-6">Контакты</div>
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">ул.Рождественская Набережная 45/1</a>
            <a href="tel:+7 (952) 835-50-16" className="text-lg font-semibold opacity-80 mb-5 btn btn--link link-hover">
              +7 (952) 835-50-16
            </a>
            <a href="mailto:info@stdkit.ru" className="text-lg font-semibold opacity-80 mb-5 btn btn--link link-hover">
              info@stdkit.ru
            </a>
          </div>
        </div>

        <div className="flex my-10">
          <img src="/img/footer-logo.svg" alt="" className="mr-3" />
          <div className="text-xl font-semibold">Сложное становится простым</div>
        </div>

        <div className="footer-bottom">
          <img src="/img/timeweb.png" alt="" className="mr-4 block" />
          <img src="/img/bitrix.png" alt="" className="mr-4 block" />
          <img src="/img/direct.png" alt="" className="mr-4 block" />
          <img src="/img/bitrix24.png" alt="" className="mr-4 block" />
          <div className="ml-auto text-sm font-semibold w-full md:w-auto mt-5 md:mt-auto">
            / ООО “Студия КИТ” © 2022
          </div>
        </div>
      </footer>
      {/* <Credentials /> */}
    </>
  )
}
