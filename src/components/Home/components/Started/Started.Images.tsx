'use client'

import { useEffect, useRef, useState } from 'react'

export function Images() {
  const images = useRef<HTMLImageElement[]>()
  const mask = useRef<HTMLImageElement>()
  const maskContur = useRef<HTMLImageElement>()
  const [currentImage, setCurrentImage] = useState<HTMLImageElement>()

  const $canvas = useRef<HTMLCanvasElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>()

  const [rect, setRect] = useState({
    width: 323,
    height: 297,
    x: 0,
    y: 0,
  })

  useEffect(() => {
    // draw()
  }, [context.current, currentImage])

  useEffect(() => {
    if (!$canvas.current) return

    context.current = $canvas.current?.getContext('2d')
    const size = $canvas.current.getBoundingClientRect()

    $canvas.current.width = size.width
    $canvas.current.height = size.height

    setRect({
      ...rect,
      x: (size.width * 1085) / 1920 + rect.width / 2,
      y: 70 + rect.height / 2,
    })
  }, [$canvas.current])

  useEffect(() => {
    mask.current = createImg('/img/code-mask.svg')
    maskContur.current = createImg('/img/code-mask-contur.svg')
    images.current = [
      createImg('/img/started-work-1.jpg'),
      createImg('/img/started-work-2.jpg'),
      createImg('/img/started-work-3.jpg'),
    ]

    setCurrentImage(images.current[0])
  }, [])

  function draw() {
    if (!$canvas.current || !context.current || !currentImage) return

    context.current.clearRect(0, 0, $canvas.current.width, $canvas.current.height)

    // draw mask for picture
    context.current.globalCompositeOperation = 'source-over'
    context.current.drawImage(mask.current as HTMLImageElement, rect.x, rect.y, rect.width, rect.height)

    // draw picture
    context.current.globalCompositeOperation = 'source-in'
    context.current.drawImage(currentImage as HTMLImageElement, rect.x, rect.y, rect.width, rect.height)

    // draw lidne
    context.current.globalCompositeOperation = 'source-over'
    context.current.drawImage(maskContur.current as HTMLImageElement, rect.x + 8, rect.y + 8, rect.width, rect.height)
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
