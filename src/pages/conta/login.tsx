import { PageHeading } from 'atomic/org.page-heading/page-heading.component'
import { LoginSection } from 'app/modules/account/login/login-form.section'
import Head from 'next/head'

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Login - Poli Angels</title>
      </Head>
      <PageHeading title={'Login'} />
      <LoginSection />
    </>
  )
}

export default LoginPage
