import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from 'app/modules/home/hero/hero.component'
import { BenefitsSection } from '@app/modules/home/benefits/benefits.section'
import { RequestHubSection } from '@app/modules/home/request-hub/request-hub.section'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arbos - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BenefitsSection />
      <RequestHubSection />
    </div>
  )
}

export default Home
