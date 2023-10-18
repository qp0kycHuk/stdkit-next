import c from './Background.module.scss'
import classNames from 'classnames'

export function Background({ disableRed, disableYellow, disableBlue, disablePurple, scroll }: IProps) {
  return (
    <div className={c.wrapper}>
      <div className={classNames(c.background, 'animate__animated animate__fadeIn')} data-scroll-section={scroll}>
        {!disableYellow && <div className={classNames(c.item, c.yellow)}></div>}
        {!disableRed && <div className={classNames(c.item, c.red)}></div>}
        {!disableBlue && <div className={classNames(c.item, c.blue)}></div>}
        {!disablePurple && <div className={classNames(c.item, c.purple)}></div>}
      </div>
    </div>
  )
}

interface IProps {
  disableRed?: boolean
  disableYellow?: boolean
  disableBlue?: boolean
  disablePurple?: boolean
  scroll?: boolean
}
