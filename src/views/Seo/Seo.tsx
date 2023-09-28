import Head from 'next/head'
import { Description } from './components/Seo.Description'
import { Slider } from './components/Seo.Slider/Seo.Slider'
import { Types } from './components/Seo.Types/Seo.Types'
import { Features } from './components/Seo.Features'
import { Resume } from './components/Seo.Resume'
import Link from 'next/link'

export function Seo() {
  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>

      <div className="background-wrapper">
        <div className="background animate__animated animate__fadeIn" data-scroll-section>
          <div className="background-item background-item--1"></div>
          <div className="background-item background-item--2"></div>
        </div>
      </div>

      <section className="page-seo overflow-hidden" data-scroll-section>
        <div className="text-xs opacity-60 mb-10">
          <Link href="/" className="link-hover">
            Главная
          </Link>
          {' > '}
          <Link href="/services/" className="link-hover">
            Услуги
          </Link>
          {' > '}
          <Link href="/services/" className="link-hover">
            Разработка сайта
          </Link>
          {' > '}
          SEO-продвижение
        </div>

        <Description className="mb-10 sm:mb-16" />

        <Slider />
      </section>

      {/* 6 видов работ */}
      <Types />

      <section data-scroll-section className="pb-16 pt-0 mt-10 md:mt-28">
        <Features />

        <Resume className="mt-10 md:mt-20" />
      </section>
    </>
  )
}
