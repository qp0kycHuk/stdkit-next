import Image from 'next/image'
import { Images } from './Started.Images'
import { useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { Background } from '@/components/Background/Background'

export function Started() {
  const container = useRef<HTMLDivElement>(null)
  const { scroll } = useLocomotiveScroll()

  return (
    <section className="started code-cursor-cover" data-scroll-section>
      <Background />

      <div className="started-inner">
        <div className="started__logo-wrapper" ref={container}>
          <div className="started__logo">
            <Image width={696} height={196} src="/img/started-logo.svg" alt="" />
          </div>
        </div>
        <div data-scroll data-scroll-speed="1.5">
          <div className="started__subtitle">Разработка и продвижение сайтов</div>
        </div>
        <div data-scroll data-scroll-speed="1.5">
          <button className="started__btn btn btn--text btn--contur" onClick={() => scroll.scrollTo('#service')}>
            Узнать как
          </button>
        </div>

        <Images cover={container} />
      </div>
    </section>
  )
}
