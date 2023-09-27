import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'
import Link from 'next/link'

interface IProps {
  item: IServiceItem
  color?: string
}

export function Item({ item, color }: IProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  const Component = item.path ? Link : 'div'

  return (
    <>
      <Component
        href={item.path || ''}
        className={`page-service-item page-service-item--${color}`}
        onClick={!item.path ? openFormDialog : undefined}
      >
        <div className="page-service-item__title">{item.name}</div>
        <div className="page-service-item__subtitle">{item.description}</div>
        <button className="page-service-item__btn btn btn--text btn--contur">Подробнее</button>
      </Component>
      <DialogForm source={item.name} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </>
  )
}
