import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

export function TypesItem({ icon, title, description, buttonText }: IProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <div
      className="rounded-1.5lg bg-white p-4 md:py-10 md:px-12 mobile-fade-in-down flex flex-col items-start"
      data-scroll
    >
      <div className="flex items-center gap-4">
        {icon}
        <div className="text-xl sm:text-2xl font-semibold">{title}</div>
      </div>
      <div className="mt-4 opacity-80 max-sm:text-sm md:text-lg leading-normal mb-8">{description}</div>
      <button className="btn btn--contur mt-auto" onClick={openFormDialog}>
        {buttonText}
      </button>

      <DialogForm source={title} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </div>
  )
}

interface IProps {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
}
