import classNames from 'classnames'
import { SwiperSlide } from 'swiper/react'

const colorBgClassNames: Record<IColor, string> = {
  teal: 'bg-teal bg-opacity-30',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  blue: 'bg-blue bg-opacity-25',
}

const colorChartClassNames: Record<IColor, string> = {
  teal: 'bg-teal',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  blue: 'bg-blue',
}

export function Slide({ item }: IProps) {
  const chartMax = item.chart.reduce((max, data) => Math.max(max, data.value), 0)

  return (
    <>
      <div className={classNames('p-2 rounded-1.5lg ', colorBgClassNames[item.color])}>
        <div className="bg-white bg-opacity-80 p-4 sm:py-7 sm:px-6 rounded-1.5lg">
          <div className="text-xs sm:text-sm md:text-lg font-medium leading-none mb-2">
            Количество ключевых запросов
          </div>
          <div className="text-xs sm:text-sm md:text-lg leading-none">
            Было <span className="text-red font-semibold"> {item.progress[0]} </span>
            <svg className="icon inline align-top">
              <use xlinkHref="/img/icons.svg#arrow-right" />
            </svg>
            Стало <span className="text-green font-semibold"> {item.progress[1]} </span>
          </div>
        </div>
        <div className="mt-2 bg-white bg-opacity-80 p-4 sm:py-5 sm:px-6 rounded-1.5lg">
          <div className="text-xs sm:text-sm md:text-lg font-medium leading-none">Посещаемость сайта</div>
          <div className="opacity-70 text-xs sm:text-sm md:text-lg leading-none mt-1 sm:mt-2">
            Начало работ: {item.start}
          </div>
          <div className="h-28 sm:h-9.5 grid gap-2 sm:gap-3.5 grid-cols-6 mt-1">
            {item.chart.map((data) => (
              <div className="flex flex-col " key={data.name}>
                <div className="flex-grow flex flex-col justify-end">
                  <div
                    className={classNames('rounded', colorChartClassNames[item.color])}
                    style={{ height: (100 * data.value) / chartMax + '%' }}
                  />
                </div>
                <div className="leading-none text-center opacity-70 text-xs sm:text-lg mt-1 sm:mt-2">{data.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href={item.path} target="_blank" className="btn btn--link mt-5 sm:mt-7 w-max">
        {item.name}
        <svg className="icon text-xs ml-2">
          <use xlinkHref="/img/icons.svg#link" />
        </svg>
      </a>
    </>
  )
}

interface IProps {
  item: ISlideItem
}

type IColor = 'teal' | 'yellow' | 'pink' | 'blue'
type IChartItem = {
  name: string
  value: number
}

export interface ISlideItem {
  name: string
  path: string
  progress: [number, number]
  start: string
  color: IColor
  chart: IChartItem[]
}
