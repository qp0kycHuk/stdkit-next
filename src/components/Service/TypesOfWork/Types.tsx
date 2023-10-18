import { TypesItem } from './Types.Item'

export function Types({ items, title, buttonText, children }: IProps) {
  return (
    <section className="relative py-0 mt-10 md:mt-24" data-scroll-section>
      <div className="text-2xl md:text-3.5xl font-semibold mb-8 md:mb-14 mobile-fade-in-down relative z-1" data-scroll>
        {title}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 relative z-1">
        {items.map((item, index) => (
          <TypesItem
            buttonText={buttonText}
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
      {children}
    </section>
  )
}

interface IProps extends React.PropsWithChildren {
  items: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  title: string
  buttonText: string
}
