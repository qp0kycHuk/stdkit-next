import Head from 'next/head'
import { Started } from './components/Started/Started'
import { Services } from './components/Services/Services'
import { Nothing } from './components/Nothing/Nothing'
import { Flora } from './components/Works/Flora'
import { Place } from './components/Works/Place'
import { Park } from './components/Works/Park'
import { Partners } from './components/Partners/Partners'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function Home() {
  const { scroll } = useLocomotiveScroll()
  const router = useRouter()

  useEffect(() => {
    if (router.query.id === 'portfolio' || router.query.id?.includes('portfolio')) {
      setTimeout(() => {
        scroll.scrollTo('#portfolio')
      }, 20)
    }
  }, [router.asPath])

  return (
    <>
      <Head>
        <title>Создание и продвижение сайтов в Краснодаре : Веб-студия КИТ</title>
      </Head>
      <Started />
      <Services />
      <Nothing />

      <Flora />
      <Park />
      <Place />

      <Partners />
    </>
  )
}
