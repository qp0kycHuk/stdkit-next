import Link from 'next/link'
import * as React from 'react'

export interface IHeaderProps {
  isIndex: boolean
}

export function Header({ isIndex }: IHeaderProps) {
  return (
    <>
      <header className="header">
        <button className="btn btn--text btn-icon mr-4 md:hidden" data-toggle-link="menu">
          <svg className="icon">
            <use xlinkHref="img/icons.svg#menu" />
          </svg>
        </button>
        <Link href="/" className="header-logo mr-auto md:mr-0">
          <div className="header-logo__img">
            <img src="img/header-logo-img.svg" alt="" />
          </div>
          <div className="header-logo__text">Веб-студия КИТ</div>
        </Link>
        <div className="header-nav">
          <Link href="/services/" className="header-nav__item">
            Услуги
          </Link>

          {isIndex && (
            <button className="header-nav__item" data-scroll-to="#flora">
              Портфолио
            </button>
          )}
          <Link href="/contacts/" className="header-nav__item">
            Контакты
          </Link>
        </div>
        <a href="tel:+7 (952) 835-50-16" className="header__phone link-hover">
          +7 (952) 835-50-16
        </a>
      </header>
      {!isIndex && <div className="page-top-placeholder"></div>}
    </>
  )
}
