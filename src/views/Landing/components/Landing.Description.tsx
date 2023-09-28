import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

interface IProps {
  className?: string
}

export function Description({ className }: IProps) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <div className={className}>
      <div className="text-2xl md:text-4xl lg:text-5.5xl mb-8 sm:mb-10 font-semibold mobile-fade-in-down" data-scroll>
        / Лендинг пейдж <br className="sm:hidden" /> (Landing page)
      </div>
      <div className="flex mb-8 sm:mb-10 gap-2 sm:gap-4 md:gap-8 max-md:flex-col">
        <div className="flex  items-center gap-2 sm:gap-4 mobile-fade-in-down" data-scroll>
          <svg className="icon text-xl sm:text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#wallet" />
          </svg>
          <div className="text-sm sm:text-lg">
            <span className="font-semibold">Стоимость услуги: </span>
            <span className="opacity-80">от 1 000 000 ₽</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mobile-fade-in-down" data-scroll>
          <svg className="icon text-xl sm:text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#calendar" />
          </svg>
          <div className="text-sm sm:text-lg">
            <span className="font-semibold">Срок реализации: </span>
            <span className="opacity-80">от 1 месяца</span>
          </div>
        </div>
      </div>
      <div className="max-sm:text-sm lg:text-lg leading-normal opacity-70 mobile-fade-in-down" data-scroll>
        Предлагаем разработку сайтов любой тематики. Это может быть как простенький одностраничный сайт, так и
        сложнейший <br className="max-lg:hidden" />
        интернет-магазин с несколькими тысячами товаров.Предлагаем разработку сайтов любой тематики. Это может быть как
        простенький <br className="max-lg:hidden" />
        одностраничный сайт, так и сложнейший интернет-магазин с несколькими тысячами товаров.
      </div>
      <div className=" mobile-fade-in-down" data-scroll>
        <button className="btn btn--text btn--contur mt-7 sm:mt-8" onClick={openFormDialog}>
          <span className="max-sm:text-sm">Мне это нужно</span>
        </button>
      </div>
      <DialogForm source={'Заказать лендинг'} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </div>
  )
}
