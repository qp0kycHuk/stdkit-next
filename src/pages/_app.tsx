import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts/Layout'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
