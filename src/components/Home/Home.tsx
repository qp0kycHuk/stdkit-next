import { Started } from './components/Started/Started'
import { Services } from './components/Services/Services'
import { Nothing } from './components/Nothing/Nothing'
import { Flora } from './components/Works/Flora'
import { Place } from './components/Works/Place'
import { Park } from './components/Works/Park'
import { Partners } from './components/Partners/Partners'
import { Layout } from '@/layouts/Layout'

export function Home() {
  return (
    <>
      <Started />
      <Services />
      <Nothing />

      <Flora />
      <Park />
      <Place />

      <Partners />
    </>
  )
}
