import Image from 'next/image'

const items: IPartner[] = [
  {
    name: 'КубГАУ - один из признанных лидеров высшего аграрного образовании в России',
    image: '/img/partners/kubsau.png',
  },
  {
    name: 'Крупнейшая электросетевая компания на территории Краснодарского края и Республики Адыгея',
    image: '/img/partners/rosseti.png',
  },
  {
    name: 'Крупнейшее предприятие чаеводческой отрасли России, ведущее свою историю еще с далёкого 1947 года',
    image: '/img/partners/matsesta.png',
  },
  {
    name: 'Японский сад заложен в 2021 года в парке «Краснодар». Пейзаж проникнут тайной и символикой в каждом его уголке.',
    image: '/img/partners/park-krasnodar.png',
  },
  {
    name: 'Крупнейший лечебный бальнеологический комплекс России, основанный в 1902 году на целебных сероводородных источниках',
    image: '/img/partners/matsesta-bk.png',
  },
  {
    name: 'Единственный в России профессиональный коллектив народного творчества, имеющий непрерывную преемственную историю с начала XIX века',
    image: '/img/partners/kkx.png',
  },
  {
    name: 'Завод минеральных вод "Горячеключевской" - производитель лечебной минеральной воды с 1967 года.',
    image: '/img/partners/gk.png',
  },
  {
    name: 'Ассоциация «РОСТСЕЛЬМАШ - ЛИГА» – развитие и пропаганда детско-юношеского регби в Ростовской области',
    image: '/img/partners/rsmliga.png',
  },
  {
    name: 'Команда Кравченко - Эксперты Краснодара по недвижимости, строительству и интерьерам',
    image: '/img/partners/krav.png',
  },
  {
    name: 'Новая Кубань — современное независимое общественно-политическое издание, крупный новостной портал',
    image: '/img/partners/new-kuban.png',
  },
  {
    name: 'Совместный проект от “Стройхлам” и “Команды Кравченко”. Подбор и экспертиза частных домов',
    image: '/img/partners/dompodbor.png',
  },
  // {
  //   name: 'Федеральное государственное бюджетное образовательное учреждение высшего образования',
  //   image: '/img/partners/konditer.png',
  // },
  {
    name: 'Флора Норильск - уникальный проект, интернет-магазин и сеть цветочных магазинов в городе Норильск',
    image: '/img/partners/flora.png',
  },
]

export function Partners() {
  return (
    <section className="partners" data-scroll-section>
      <div className="partners__title">работаем с 2014 года</div>

      <div className="partners-grid">
        {items.map((item, index) => (
          <div className="partners-item mobile-fade-in-down" data-scroll key={index}>
            <div className="partners-item__img">
              <Image src={item.image} alt="" width={200} height={200} />
            </div>
            <div className="partners-item__title">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

interface IPartner {
  image: string
  name: string
}
