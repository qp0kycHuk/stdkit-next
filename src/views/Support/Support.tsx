import Head from 'next/head'
import { Description } from './components/Support.Description'
import { Slider } from './components/Support.Slider/Support.Slider'
import { Types } from './components/Support.Types/Support.Types'
import { Features } from './components/Support.Features'
import { Resume } from './components/Support.Resume'
import Link from 'next/link'
import { Background } from '@/components/Background/Background'
import { Qwiz } from '../Landing/components/Landing.Qwiz/Qwiz'

export function Support() {
  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>

      <Background scroll />

      <section className="page-support overflow-hidden" data-scroll-section>
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
          Техническая поддержка
        </div>

        <Description className="mb-10 sm:mb-16" />

        <Slider />
      </section>

      <Types />

      <section data-scroll-section className="pb-16 pt-0 mt-10 md:mt-28">
        <Qwiz />

        <Resume className="mt-10 md:mt-20" />
      </section>
    </>
  )
}
