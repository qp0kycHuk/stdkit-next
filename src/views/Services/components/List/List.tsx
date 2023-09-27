import { Fragment } from 'react'
import { data } from '../../data/items'
import { Item } from './List.Item'

export function List() {
  return (
    <>
      <div className="page-service__title title">Услуги</div>

      {data.map(({ name, items, color }) => (
        <Fragment key={name}>
          <div className="page-service__subtitle">{name}</div>
          <div className="page-service__grid">
            {items.map((service, index) => (
              <Item key={index} item={service as IServiceItem} color={color} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  )
}
