import Head from 'next/head'
import { List } from './components/List/List'

export function Services() {
  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>

      <div className="background-wrapper">
        <div className="background animate__animated animate__fadeIn">
          <div className="background-item background-item--1"></div>
          <div className="background-item background-item--2"></div>
        </div>
      </div>
      <section className="page-service" data-scroll-section>
        <div className="text-xs opacity-60 mb-10">
          <a href="/" className="link-hover">
            Главная
          </a>
          {' > '}
          Услуги
        </div>

        <List />
      </section>
    </>
  )
}
