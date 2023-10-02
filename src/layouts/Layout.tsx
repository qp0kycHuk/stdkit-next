import { useRouter } from 'next/router'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { ScrollContextProvider } from './Scroll/Scroll'
import { PageTransition } from './Pagetransition'
import { useRouteChangeHandler } from '@/hooks/useRouteChangeHandler'
import classNames from 'classnames'

export function Layout({ children }: React.PropsWithChildren) {
  const { asPath } = useRouter()
  const { loading } = useRouteChangeHandler({})

  const isIndex = asPath === '/' || asPath.includes('/portfolio')

  return (
    <ScrollContextProvider>
      <PageTransition />
      <Header isIndex={isIndex} />
      <div className={classNames('transition-opacity', loading ? 'opacity-0' : ' delay-500')}>{children}</div>
      <Footer />
    </ScrollContextProvider>
  )
}
