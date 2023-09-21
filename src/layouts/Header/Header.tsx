import Link from 'next/link';
import * as React from 'react';

export interface IHeaderProps {
  isIndex: boolean
}

export function Header({ isIndex }: IHeaderProps) {
  return (
    <header className="header">
      <button className="btn btn--text btn-icon mr-4 d-md-none" data-toggle-link="menu">
        <svg className="icon">
          <use xlinkHref="img/icons.svg#menu" />
        </svg>
      </button>
      <Link href="/" className="header-logo mr-auto mr-md-0">
        <div className="header-logo__img">
          <img src="img/header-logo-img.svg" alt="" />
        </div>
        <div className="header-logo__text">
          Веб-студия КИТ
        </div>
      </Link>
      <div className="header-nav">
        <a href="" className="header-nav__item">Услуги</a>

        {isIndex && <button className="header-nav__item" data-scroll-to="#flora">Портфолио</button>}
        <Link href="/contacts/" className="header-nav__item">Контакты</Link>
      </div>
      <a href="" className="header__phone link-hover">+7 (918) 317-99-73</a>
    </header>
  );
}
