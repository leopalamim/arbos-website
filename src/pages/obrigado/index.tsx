import { ThanksSection } from '@app/modules/thanks/thanks.section'
import { Body } from '@atomic/atm.typography'
import { PageHeading } from 'atomic/org.page-heading/page-heading.component'
import Head from 'next/head'

const ThanksPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Obrigado!</title>
      </Head>
      <PageHeading title={'Muito obrigado!'} />
      <ThanksSection />
    </>
  )
}

export default ThanksPage
