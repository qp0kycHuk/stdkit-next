import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { ScrollContextProvider } from './Scroll/Scroll'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <ScrollContextProvider>
      <Header isIndex />
      {children}
      <Footer />
    </ScrollContextProvider>
  )
}
