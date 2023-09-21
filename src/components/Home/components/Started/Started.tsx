import Image from "next/image";
import { Images } from "./Started.Images";

export function Started() {
  return (
    <section className="started code-cursor-cover" data-scroll-section>
      <div className="background-wrapper">
        <div className="background animate__animated animate__fadeIn">
          <div className="background-item background-item--1"></div>
          <div className="background-item background-item--2"></div>
          <div className="background-item background-item--3"></div>
          <div className="background-item background-item--4"></div>
        </div>
      </div>

      <div className="started-inner">
        <div className="started__logo-wrapper">
          <div className="started__logo">
            <Image width={696} height={196} src="/img/started-logo.svg" alt="" />
          </div>
        </div>
        <div data-scroll data-scroll-speed="1.5">
          <div className="started__subtitle">Разработка и реклама сайтов</div>
        </div>
        <div data-scroll data-scroll-speed="1.5">
          <button className="started__btn btn btn--text btn--contur" data-scroll-to="#service">Узнать как</button>
        </div>

        <Images />
      </div>
    </section>
  )
}
