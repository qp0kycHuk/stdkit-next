import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

interface IProps extends React.PropsWithChildren {
  className?: string
  title: string
  description: string
  buttonText: string
  source: string
}

export function Resume({ className, title, description, children, buttonText, source }: IProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <div className={className}>
      <div className="text-2xl sm:text-3.5xl font-semibold mb-8 md:mb-12 mobile-fade-in-down" data-scroll>
        {title}
      </div>
      <div className="lg:text-lg leading-normal opacity-70 mobile-fade-in-down" data-scroll>
        {description}
      </div>
      <div className="resume-itog mt-12 mobile-fade-in-down" data-scroll>
        <div className="text-2xl lg:text-3.5xl font-semibold">{children}</div>
        <button className="btn btn--contur" onClick={openFormDialog}>
          {buttonText}
        </button>
      </div>
      <DialogForm source={source} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </div>
  )
}
