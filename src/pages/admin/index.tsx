import { DashboardSection } from '@app/modules/private-area/dashboard/dashboard.section'
import { Separator } from '@atomic/atm.separator'
import type { NextPage } from 'next'
import Head from 'next/head'

const AdminPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin - Arbos</title>
      </Head>
      <Separator type={'subsection'} />
      <DashboardSection />
    </div>
  )
}

export default AdminPage
