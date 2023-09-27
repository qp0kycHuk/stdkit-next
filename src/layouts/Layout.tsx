import { useRouter } from 'next/router'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { ScrollContextProvider } from './Scroll/Scroll'

export function Layout({ children }: React.PropsWithChildren) {
  const { asPath } = useRouter()

  const isIndex = asPath === '/' || asPath.includes('/portfolio')

  return (
    <ScrollContextProvider>
      <Header isIndex={isIndex} />
      {children}
      <Footer />
    </ScrollContextProvider>
  )
}
