import Head from 'next/head'
import Link from 'next/link'
import { Description } from './components/Landing.Description'
import { Slider } from './components/Landing.Slider'
import { Steps } from './components/Landing.Steps'
import { Qwiz } from './components/Landing.Qwiz/Qwiz'
import { Resume } from './components/Landing.Resume'
import { Background } from '@/components/Background/Background'

export function Landing() {
  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>

      <Background scroll />

      <section className="page-landing pb-16" data-scroll-section>
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
          Лендинг
        </div>

        <Description className="mb-10 sm:mb-16" />

        <Slider className="mb-10 sm:mb-20 " />

        <Steps />

        <Qwiz className="mt-10 sm:mt-20" />

        <Resume className="mt-10 md:mt-20" />
      </section>
    </>
  )
}
