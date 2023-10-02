import { data } from '@/views/Services/data/items'
import { Item } from './Services.item'

export function Services() {
  return (
    <section className="index-service" data-scroll-section id="service">
      <div className="index-service-grid">
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </section>
  )
}
