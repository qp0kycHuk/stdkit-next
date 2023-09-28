import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

interface IProps {
  className?: string
}

export function Resume({ className }: IProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <div className={className}>
      <div className="text-2xl sm:text-3.5xl font-semibold mb-8 md:mb-12 mobile-fade-in-down" data-scroll>
        Резюме
      </div>
      <div className="lg:text-lg leading-normal opacity-70 mobile-fade-in-down" data-scroll>
        Предлагаем разработку сайтов любой тематики. Это может быть как простенький одностраничный сайт, так и
        сложнейший интернет-магазин с несколькими тысячами товаров.Предлагаем разработку сайтов любой тематики. Это
        может быть как простенький одностраничный сайт, так и сложнейший интернет-магазин с несколькими тысячами
        товаров.
      </div>
      <div className="resume-itog mt-12 mobile-fade-in-down" data-scroll>
        <div className="text-2xl lg:text-3.5xl font-semibold">
          Итак, хотите заказать у нас лендинг? <span className="max-lg:hidden">Жмите /→→→</span>
        </div>
        <button className="btn btn--contur" onClick={openFormDialog}>
          Заказать лендинг
        </button>
      </div>
      <DialogForm source={'Заказать лендинг'} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </div>
  )
}
