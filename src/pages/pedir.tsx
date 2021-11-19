import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from 'app/modules/home/hero/hero.component'
import { BenefitsSection } from '@app/modules/home/benefits/benefits.section'
import { RequestHubSection } from '@app/modules/home/request-hub/request-hub.section'
import { HarvestSection } from '@app/modules/home/harvest/harvest.section'

const RequestHubPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arbos - Pedir</title>
      </Head>
      <RequestHubSection />
    </div>
  )
}

export default RequestHubPage
