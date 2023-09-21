import { Header } from '@/layouts/Header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='loaded'>
        <Header isIndex />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
