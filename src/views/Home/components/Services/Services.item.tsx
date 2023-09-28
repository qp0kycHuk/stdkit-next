import { Fragment, useState } from 'react'
import { ServiceLink } from './Services.Link'

interface IProps {
  item: IServiceItem
}

export function Item({ item }: IProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const styles = {
    '--x': `${position.x}px`,
    '--y': `${position.y}px`,
  } as React.CSSProperties

  function mouseMoveHandler(event: React.MouseEvent) {
    const element = (event.target as HTMLElement).closest('.-lightening-')

    if (!element) return

    setPosition({
      x: event.clientX - element.getBoundingClientRect().left,
      y: event.clientY - element.getBoundingClientRect().top,
    })
  }

  return (
    <div
      className={`index-service-item index-service-item--${item.color} -lightening- mobile-fade-in-down`}
      style={styles}
      data-scroll
      onMouseMove={mouseMoveHandler}
    >
      <div className="index-service-item-video">
        {/* <video src="media/service-hover-programming.mp4" muted autoplay loop></video>  */}
      </div>
      <div className="index-service-item-content" data-scroll data-scroll-delay="0.05" data-scroll-speed="1.2">
        <div className="text-2.5xl lg:text-3xl font-bold mb-7 text-center index-service-item-title">{item.title}</div>
        <div className="opacity-60 lg:text-lg text-center index-service-item-subtitle">{item.description}</div>
        <div className="text-sm lg:text-lg text-center mt-auto mb-5 index-service-item-sign">
          {item.links?.map((item, index) => (
            <Fragment key={index}>
              {index > 0 && <span> / </span>}
              <ServiceLink item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export interface IServiceItem {
  color: 'purple' | 'blue' | 'orange' | 'green'
  title: string
  description: React.ReactNode
  links?: IItemLink[]
}

interface IItemLink {
  path?: string
  name: string
}
