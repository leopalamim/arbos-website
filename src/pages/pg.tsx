import type { NextPage } from 'next'
import Head from 'next/head'
import { PaymentSection } from '@app/modules/payment/payment.section'

const PaymentPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arbos - Pedir</title>
      </Head>
      <PaymentSection />
    </div>
  )
}

export default PaymentPage
