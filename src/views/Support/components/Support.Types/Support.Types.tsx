import { Types as TypesComponent } from '@/components/Service/TypesOfWork/Types'

export function Types() {
  const items = [
    {
      title: 'Обновление информации на сайте',
      description: `
        Не всегда информацию на сайт можно разместить без
        подготовки. Текст надо правильно отредактировать,
        а изображениям надо придать нужную форму.
      `,
      icon: (
        <div className="p-2.5 bg-teal bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-teal">
            <use xlinkHref="/img/icons.svg#pen" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Разработка новых баннеров',
      description: `
        Нередко, такая, на первый взгляд, не сложная задача, как
        разработка нового баннера для сайта может отнять целый
        день! Но и это, не гарантия того, что получится хорошо…
      `,
      icon: (
        <div className="p-2.5 bg-yellow bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#album" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Решение технических проблем',
      description: `
        Порой, для работы с сайтом требуется слишком много всего
        знать. Одна лишь настройка хостинга, порой заставляет
        изучать новую специальность.
      `,
      icon: (
        <div className="p-2.5 bg-pink bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-pink">
            <use xlinkHref="/img/icons.svg#settings" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Работа с почтой',
      description: `
        Добавление и настройка корпоративных почтовых ящиков
        с привязкой к вашему домену.
      `,
      icon: (
        <div className="p-2.5 bg-blue bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-blue">
            <use xlinkHref="/img/icons.svg#message" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Настройка резервного копирования',
      description: `
        Для того, чтобы не бояться потерять данные вашего сайта
        необходимо регулярно делать бэкапы. В случае необходимости,
        сайт можно будет восстановить из резервной копии.
      `,
      icon: (
        <div className="p-2.5 bg-violet bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-violet">
            <use xlinkHref="/img/icons.svg#copy" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Удаление вирусов',
      description: `
        Наличие вируса на сайте приводит к потере позиций
        в поисковой выдаче, некорректной работе сайта, а иногда
        и полном его блокировании.
      `,
      icon: (
        <div className="p-2.5 bg-green bg-opacity-30 rounded-xl">
          <svg className="icon text-2xl text-green">
            <use xlinkHref="/img/icons.svg#virus" />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <TypesComponent
      buttonText="Узнать подробнее"
      items={items}
      title="Техническая поддержка включает в себя 6 видов работ"
    >
      <picture>
        <source srcSet="/img/seo/types-bg-1-min.webp" type="image/webp" />
        <img
          src="/img/seo/types-bg-1-min.png"
          alt=""
          className="absolute object-left object-scale-down -top-1/2 left-0 max-w-full opacity-30 pointer-events-none max-lg:h-3/4 max-lg:bottom-auto max-lg:top-0 max-lg:object-cover"
        />
      </picture>
      <picture>
        <source srcSet="/img/seo/types-bg-2-min.webp" type="image/webp" />
        <img
          src="/img/seo/types-bg-2-min.png"
          alt=""
          className="absolute -top-1/4 -left-1/2 w-full opacity-30 pointer-events-none max-lg:h-3/4 max-lg:top-auto max-lg:bottom-0 max-lg:object-cover"
        />
      </picture>
    </TypesComponent>
  )
}
