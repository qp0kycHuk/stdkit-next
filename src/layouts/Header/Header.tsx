import { DialogForm } from '@/components/lazy'
import { useToggle } from '@/hooks/useToggle'
import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export interface IHeaderProps {
  isIndex: boolean
}

export function Header({ isIndex }: IHeaderProps) {
  const [menuOpened, , menuOpen, menuClose] = useToggle(false)
  const [formDialogOpen, , openFormDialog, closeFormDialog] = useToggle()
  const { scroll } = useLocomotiveScroll()

  return (
    <>
      <header className="header">
        <button
          className="header-btn btn btn-xsmall btn-icon btn--text mr-4 md:hidden"
          style={{ '--size': '32px' } as React.CSSProperties}
          onClick={menuOpen}
        >
          <svg className="icon">
            <use xlinkHref="/img/icons.svg#menu" />
          </svg>
        </button>
        <Link href="/" className="header-logo mr-auto md:mr-0">
          <div className="header-logo__img">
            <img src="/img/header-logo-img.svg" alt="" />
          </div>
          <div className="header-logo__text">Веб-студия КИТ</div>
        </Link>
        <div className="header-nav">
          <Link href="/services/" className="header-nav__item">
            Услуги
          </Link>

          <Link href="/portfolio/" onClick={() => scroll?.scrollTo('#portfolio')} className="header-nav__item">
            Портфолио
          </Link>

          <Link href="/contacts/" className="header-nav__item">
            Контакты
          </Link>
        </div>
        <a href="tel:+7 (952) 835-50-16" className="header__phone link-hover">
          +7 (952) 835-50-16
        </a>
      </header>
      {!isIndex && <div className="page-top-placeholder"></div>}

      <div className={classNames('menu -menu-', menuOpened ? 'toggle-active' : '')} id="menu">
        <div className="menu-header">
          <button
            className="header-btn btn btn-xsmall btn-icon btn--text mr-4"
            style={{ '--size': '32px' } as React.CSSProperties}
            onClick={menuClose}
          >
            <svg className="icon">
              <use xlinkHref="/img/icons.svg#cross" />
            </svg>
          </button>
          <Link href="/" className="header-logo mr-auto md:mr-0">
            <div className="header-logo__img">
              <img src="/img/header-logo-img.svg" alt="" />
            </div>
            <div className="header-logo__text">Веб-студия КИТ</div>
          </Link>
        </div>
        <div className="menu-content">
          <div className="py-5 pb-3">
            <Link href="/services/" onClick={menuClose} className="block px-4 py-4 waved text-base w-full">
              Услуги
            </Link>
            <Link href="/portfolio/" onClick={menuClose} className="block px-4 py-4 waved text-base w-full">
              Портфолио
            </Link>
            <Link href="/contacts/" onClick={menuClose} className="block px-4 py-4 waved text-base w-full">
              Контакты
            </Link>
          </div>
          <div className="px-4 mt-auto">
            <a className="text-base opacity-80 mb-5 btn btn--link link-hover">ул.Рождественская Набережная 45/1</a>
            <a href="tel:+7 (952) 835-50-16" className="text-xl font-semibold opacity-80 mb-5 btn btn--link link-hover">
              +7 (952) 835-50-16
            </a>
            <a href="mailto:info@stdkit.ru" className="text-xl font-semibold opacity-80 mb-5 btn btn--link link-hover">
              info@stdkit.ru
            </a>
          </div>
          <div className="mt-10 px-4">
            <button onClick={openFormDialog} className="btn btn--text btn--contur mt-4 w-full text-sm font-semibold">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
      <div className="menu-shadow" id="menu-shadow"></div>
      <DialogForm source={'Есть вопрос'} isOpen={formDialogOpen} onClose={closeFormDialog} />
    </>
  )
}
