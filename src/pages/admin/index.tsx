import type { NextPage } from 'next'
import Head from 'next/head'
import { PageHeading } from '@atomic/org.page-heading'

const AdminPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin - Arbos</title>
      </Head>
      <PageHeading title={'Admin'} />
    </div>
  )
}

export default AdminPage
