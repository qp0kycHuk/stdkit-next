import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'
import Link from 'next/link'

interface ILinkProps {
  name: string
  path?: string
}

export function ServiceLink({ name, path }: ILinkProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <>
      {path ? (
        <Link className="hover:underline" href={path}>
          {name}
        </Link>
      ) : (
        <button className="hover:underline" onClick={openFormDialog}>
          {name}
        </button>
      )}

      <DialogForm source={name} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </>
  )
}
