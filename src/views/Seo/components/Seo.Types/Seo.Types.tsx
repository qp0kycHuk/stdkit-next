import { Types as TypesComponent } from '@/components/Service/TypesOfWork/Types'

export function Types() {
  const items = [
    {
      title: 'Подбор ключевых слов',
      icon: (
        <div className="p-2.5 bg-teal bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-teal">
            <use xlinkHref="/img/icons.svg#key" />
          </svg>
        </div>
      ),
      description:
        'Ключевые слова — это математика. Пользователи набирают в поисковиках конкретные запросы, а поисковые системы ведут учет этим запросам.',
    },
    {
      title: 'Оформление текста по SEO',
      icon: (
        <div className="p-2.5 bg-yellow bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#menu-alt" />
          </svg>
        </div>
      ),
      description:
        'Когда наша классная статья написана и напичкана ключевыми словами (органично вписанными в текст), приступаем к редакции ошибок и оформлению.',
    },
    {
      title: 'SEO-оптимизация картинок',
      icon: (
        <div className="p-2.5 bg-pink bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-pink">
            <use xlinkHref="/img/icons.svg#picture" />
          </svg>
        </div>
      ),
      description:
        'Ключевые слова — это математика. Пользователи набирают в поисковиках конкретные запросы, а поисковые системы ведут учет этим запросам.',
    },
    {
      title: 'Аудит сайта',
      icon: (
        <div className="p-2.5 bg-blue bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-blue">
            <use xlinkHref="/img/icons.svg#desctop" />
          </svg>
        </div>
      ),
      description:
        'Когда наша классная статья написана и напичкана ключевыми словами (органично вписанными в текст), приступаем к редакции ошибок и оформлению.',
    },
    {
      title: 'Настройка на сайте систем аналитики',
      icon: (
        <div className="p-2.5 bg-violet bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-violet">
            <use xlinkHref="/img/icons.svg#chart-pie" />
          </svg>
        </div>
      ),
      description:
        'Ключевые слова — это математика. Пользователи набирают в поисковиках конкретные запросы, а поисковые системы ведут учет этим запросам.',
    },
    {
      title: 'Размещение на других площадках',
      icon: (
        <div className="p-2.5 bg-green bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-green">
            <use xlinkHref="/img/icons.svg#speakerphone" />
          </svg>
        </div>
      ),
      description:
        'Когда наша классная статья написана и напичкана ключевыми словами (органично вписанными в текст), приступаем к редакции ошибок и оформлению.',
    },
  ]

  return (
    <TypesComponent buttonText="Смотреть пример" items={items} title="SEO включает в себя 6 видов работ">
      <picture>
        <source srcSet="/img/seo/types-bg-1-min.webp" type="image/webp" />
        <img
          src="/img/seo/types-bg-1-min.png"
          alt=""
          className="absolute object-left object-scale-down -top-1/2 -left-1/2 max-w-full opacity-30 pointer-events-none max-lg:h-3/4 max-lg:bottom-auto max-lg:top-0 max-lg:object-cover"
        />
      </picture>
      <picture>
        <source srcSet="/img/seo/types-bg-2-min.webp" type="image/webp" />
        <img
          src="/img/seo/types-bg-2-min.png"
          alt=""
          className="absolute top-0 left-0 w-full opacity-30 pointer-events-none max-lg:h-3/4 max-lg:top-auto max-lg:bottom-0 max-lg:object-cover"
        />
      </picture>
    </TypesComponent>
  )
}
