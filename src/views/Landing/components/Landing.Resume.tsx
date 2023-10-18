import { Resume as ResumeComponent } from '@/components/Service/Resume/Resume'

interface IProps {
  className?: string
}

export function Resume({ className }: IProps) {
  return (
    <ResumeComponent
      className={className}
      title="Резюме"
      description={`
        Предлагаем разработку сайтов любой тематики. Это может быть как простенький одностраничный сайт, так и
        сложнейший интернет-магазин с несколькими тысячами товаров.Предлагаем разработку сайтов любой тематики. Это
        может быть как простенький одностраничный сайт, так и сложнейший интернет-магазин с несколькими тысячами
        товаров.
      `}
      buttonText="Заказать лендинг"
      source="Заказать лендинг"
    >
      Итак, хотите заказать у нас лендинг? <span className="max-lg:hidden">Жмите /→→→</span>
    </ResumeComponent>
  )
}
