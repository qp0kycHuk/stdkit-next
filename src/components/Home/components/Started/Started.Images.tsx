'use client'

import { throttle } from 'throttle-debounce'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

interface IProps {
  cover: React.RefObject<HTMLElement>
}

const DEFAULT_RECT = {
  x: 0,
  y: 0,
  width: 323,
  height: 297,
}

export function Images({ cover }: IProps) {
  const images = useRef<HTMLImageElement[]>()
  const mask = useRef<HTMLImageElement>()
  const maskContur = useRef<HTMLImageElement>()

  const target = useRef<IRect>(DEFAULT_RECT)
  const defaults = useRef<IRect>(DEFAULT_RECT)

  const $canvas = useRef<HTMLCanvasElement>(null)
  const tween = useRef<gsap.core.Tween>()

  useEffect(addListeners, [cover])
  useEffect(setSizes, [$canvas.current])
  useEffect(initImages, [])
  useEffect(() => {
    window.addEventListener('load', () => draw(target.current))
  }, [])

  function addListeners() {
    const throttleHandler = throttle(1000 / 30, mousemoveHandler)

    cover.current?.addEventListener('mousemove', throttleHandler)
    cover.current?.addEventListener('mouseleave', mouseLeaveHandler)

    return () => {
      cover.current?.removeEventListener('mousemove', throttleHandler)
      cover.current?.removeEventListener('mouseleave', mouseLeaveHandler)
    }
  }

  function initImages() {
    mask.current = createImg('/img/code-mask.svg')
    maskContur.current = createImg('/img/code-mask-contur.svg')
    images.current = [
      createImg('/img/started-work-1.jpg'),
      createImg('/img/started-work-2.jpg'),
      createImg('/img/started-work-3.jpg'),
    ]
  }

  function setSizes() {
    if (!$canvas.current) return

    const size = $canvas.current.getBoundingClientRect()

    $canvas.current.width = size.width
    $canvas.current.height = size.height

    defaults.current = {
      ...defaults.current,
      x: (size.width * 1085) / 1920 + defaults.current.width / 2,
      y: 70 + defaults.current.height / 2,
    }

    target.current = {
      ...defaults.current,
    }

    draw(target.current)
  }

  function mousemoveHandler(event: MouseEvent) {
    if (!$canvas.current || !cover.current) {
      return
    }

    const { left, top } = $canvas.current.getBoundingClientRect()
    // const { width: coverWidth, left: coverLeft } = cover.current.getBoundingClientRect()

    const offsetX = left + event.clientX
    const offsetY = -top + event.clientY

    const targetTo = {
      ...target.current,
      x: offsetX,
      y: offsetY,
    }

    const throttleDraw = throttle(1000 / 60, draw)

    tween.current?.kill()
    tween.current = gsap.to(target.current, {
      ...targetTo,
      onUpdate: () => throttleDraw(target.current),
      duration: 0.5,
      ease: 'elastic.out(1, 1)',
    })
  }

  function mouseLeaveHandler() {
    setTimeout(() => {
      const throttleDraw = throttle(1000 / 60, draw)

      tween.current?.kill()
      tween.current = gsap.to(target.current, {
        ...defaults.current,
        onUpdate: () => throttleDraw(target.current),
        duration: 0.75,
        ease: 'elastic.out(1, 1)',
      })
    }, 100)
  }

  function draw(params: IRect) {
    const context = $canvas.current?.getContext('2d')

    if (!$canvas.current || !cover.current || !context) return

    const position = {
      x: params.x - params.width / 2,
      y: params.y - params.height / 2,
    }

    const { width: coverWidth, left: coverLeft } = cover.current.getBoundingClientRect()
    let imgBreak = false
    let currentImage = images.current?.[0]

    images.current?.forEach((image, index, { length }) => {
      if (imgBreak) return

      if ((params.x - coverLeft) / coverWidth <= (index + 1) / length) {
        currentImage = image
        imgBreak = true
      }
    })

    if (!currentImage?.complete) {
      currentImage?.addEventListener('load', () => setTimeout(() => draw(params), 100))
    }

    context.clearRect(0, 0, $canvas.current.width, $canvas.current.height)

    if (mask.current) {
      // draw mask for picture
      context.globalCompositeOperation = 'source-over'
      context.drawImage(mask.current, position.x, position.y, params.width, params.height)
    }

    if (currentImage) {
      // draw picture
      context.globalCompositeOperation = 'source-in'
      context.drawImage(currentImage, position.x, position.y, params.width, params.height)
    }

    if (maskContur.current) {
      // draw lidne
      context.globalCompositeOperation = 'source-over'
      context.drawImage(
        maskContur.current as HTMLImageElement,
        position.x + 8,
        position.y + 8,
        params.width,
        params.height
      )
    }
  }

  return (
    <div className="code-cursor-wrapper">
      <canvas ref={$canvas}></canvas>
    </div>
  )
}

function createImg(src: string) {
  const img = new Image()

  img.src = src

  return img
}

interface IRect {
  x: number
  y: number
  width: number
  height: number
}
