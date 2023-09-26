import { Item } from './Services.item'

const items: IServiceItem[] = [
  {
    color: 'purple',
    title: 'Разработка сайта',
    description: 'Разработка эффективных сайтов различной сложности',
    links: [{ name: 'Лендинг (Landing Page)' }, { name: 'Корпоративный сайт' }, { name: 'Интернет-магазин' }],
  },
  {
    color: 'blue',
    title: 'Работа с сайтом',
    description: 'Если есть сайт, но нужны заботливые, профессиональные руки',
    links: [{ name: 'Техническая поддержка' }, { name: 'Доработка сайта' }],
  },
  {
    color: 'orange',
    title: 'Продвижение сайта',
    description: 'Качественный трафик - залог успешных продаж',
    links: [{ name: 'SEO-продвижение' }, { name: 'Контекстная реклама' }, { name: 'Картографические сервисы' }],
  },
  {
    color: 'green',
    title: 'Разработка веб-приложений и систем',
    description: 'Находим решение для нестандартных задач',
    links: [{ name: 'Личные кабинеты' }, { name: 'Инфоматы' }, { name: 'Отраслевые решения' }],
  },
]

export function Services() {
  return (
    <section className="index-service" data-scroll-section id="service">
      <div className="index-service-grid">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </section>
  )
}
