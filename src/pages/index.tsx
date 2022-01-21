import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from 'app/modules/home/hero/hero.component'
import { HowItWorksSection } from '@app/modules/home/how-it-works/how-it-works.section'
import { RequestSection } from '@app/modules/home/request/request.section'
import { HomeWrapper } from '@app/modules/home/home.style'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arbos - Home</title>
        <meta name="description" content="Sua salada. Agora barata e prática." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HomeWrapper>
        <div id={'howItWorksSection'}>
          <HowItWorksSection />
        </div>
        <div id={'requestSection'}>
          <RequestSection />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default Home
