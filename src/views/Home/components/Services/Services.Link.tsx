import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'
import Link from 'next/link'

interface ILinkProps {
  item: IItemLink
}

export function ServiceLink({ item }: ILinkProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <>
      {item.path ? (
        <Link className="hover:underline" href={item.path}>
          {item.name}
        </Link>
      ) : (
        <button className="hover:underline" onClick={openFormDialog}>
          {item.name}
        </button>
      )}

      <DialogForm source={item.name} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </>
  )
}
