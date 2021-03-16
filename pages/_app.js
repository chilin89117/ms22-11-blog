import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
    </Head>
    <Component {...pageProps} />)
  </Layout>
)

export default MyApp
