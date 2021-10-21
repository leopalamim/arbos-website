import { FaqSection } from 'app/modules/faq/faq.section'
import { PageHeading } from 'atomic/org.page-heading/page-heading.component'
import Head from 'next/head'

const FaqPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Perguntas frequentes - Poli Angels</title>
        <meta name={'description'} content={'Perguntas frequentes realizadas para a Poli Angels.'}></meta>
      </Head>
      <PageHeading title={'Perguntas frequentes'} />
      <FaqSection />
    </>
  )
}

export default FaqPage
