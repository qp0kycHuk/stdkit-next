import { useRouter } from 'next/router'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { ScrollContextProvider } from './Scroll/Scroll'

export function Layout({ children }: React.PropsWithChildren) {
  const { asPath } = useRouter()

  return (
    <ScrollContextProvider>
      <Header isIndex={asPath === '/'} />
      {children}
      <Footer />
    </ScrollContextProvider>
  )
}
