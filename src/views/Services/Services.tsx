import Head from 'next/head'
import { List } from './components/List/List'
import { Background } from '@/components/Background/Background'

export function Services() {
  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>

      <Background disablePurple disableBlue />

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
