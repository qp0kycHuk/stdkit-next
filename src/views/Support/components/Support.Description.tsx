import { DialogForm } from '@/components/DialogForm'
import { useToggle } from '@/hooks/useToggle'

export function Description({ className = '' }) {
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()

  return (
    <div className={className}>
      <div className="text-2xl md:text-4xl lg:text-5.5xl mb-8 sm:mb-10 font-semibold mobile-fade-in-down" data-scroll>
        / Техническая поддержка
      </div>
      <div className="flex mb-8 sm:mb-10 gap-2 sm:gap-4 md:gap-8 max-md:flex-col">
        <div className="flex  items-center gap-2 sm:gap-4 mobile-fade-in-down" data-scroll>
          <svg className="icon text-xl sm:text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#wallet" />
          </svg>
          <div className="text-sm sm:text-lg">
            <span className="font-semibold">Стоимость услуги: </span>
            <span className="opacity-80">от 100 000 ₽</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mobile-fade-in-down" data-scroll>
          <svg className="icon text-xl sm:text-2xl text-yellow">
            <use xlinkHref="/img/icons.svg#calendar" />
          </svg>
          <div className="text-sm sm:text-lg">
            <span className="font-semibold">Срок реализации: </span>
            <span className="opacity-80">непрерывная работа</span>
          </div>
        </div>
      </div>
      <div className="max-sm:text-sm lg:text-lg leading-normal opacity-70 mobile-fade-in-down" data-scroll>
        Для полноценной работы с сайтом необходимо обладать множеством специальных знаний: работа с системой управления
        контентом
        <br className="max-lg:hidden" />
        сайта, настройка хостинга, настройка почтовых сервисов, настройка доменов. А при внедрении нововведений на сайт
        нужен специалист,
        <br className="max-lg:hidden" />
        который знает PHP, HTML, CSS, JavaScript, MySQL.
      </div>
      <div className=" mobile-fade-in-down" data-scroll>
        <button className="btn btn--text btn--contur mt-7 sm:mt-8" onClick={openFormDialog}>
          <span className="max-sm:text-sm">Мне это нужно</span>
        </button>
      </div>
      <DialogForm source={'Заказать техническую поддержку'} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </div>
  )
}
