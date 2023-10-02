import { useRouteChangeHandler } from '@/hooks/useRouteChangeHandler'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export function PageTransition() {
  const { loading } = useRouteChangeHandler({ onComplete: completeHandler, onStart: startHandler })
  const ref = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>(gsap.timeline())

  useEffect(() => {
    if (!loading) {
      completeHandler()
    }
  }, [loading])

  function startHandler() {
    tl.current.pause()
    tl.current = gsap.timeline()

    tl.current.to(ref.current, {
      scaleX: 1,
      transformOrigin: 'right',
      duration: 0.75,
    })
  }

  function completeHandler() {
    tl.current.to(ref.current, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1,
    })
  }

  return <div className="fixed inset-0 bg-white z-[320] flex" ref={ref}></div>
}
