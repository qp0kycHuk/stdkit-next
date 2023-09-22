import { screens } from '@/const'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

export function ScrollContextProvider({ children }: React.PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null)
  const { asPath } = useRouter() // With next/router

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.05,
        touchMultiplier: 4,
        tablet: {
          smooth: true,
          breakpoint: 749.98,
        },
      }}
      watch={[]}
      location={asPath}
      containerRef={container}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
    >
      <div ref={container} data-scroll-container>
        <ScrollInner>{children}</ScrollInner>
      </div>
    </LocomotiveScrollProvider>
  )
}

function ScrollInner({ children }: React.PropsWithChildren) {
  const { scroll } = useLocomotiveScroll()

  function checkScrollTop(event: any) {
    if (
      (window.screen.width > screens.md && event.scroll.y <= 32) ||
      (window.screen.width <= screens.md && window.scrollY <= 0)
    ) {
      document.body.classList.add('scroll-top')
    } else {
      document.body.classList.remove('scroll-top')
    }
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', checkScrollTop)
    }
  }, [scroll])

  return <>{children}</>
}
