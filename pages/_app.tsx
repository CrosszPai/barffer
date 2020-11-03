import NavBottom from '../components/nav-bottom'
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
       <link rel="shortcut icon" href="/favicon.ico" />
       <title>Barffer</title>
       <link rel="manifest" href="/manifest.json" />
    </Head>
    <div className=" w-screen bg-barffer-bg overflow-auto" style={{
      height: 'calc(100vh - 3.5rem)'
    }}>
      <Component {...pageProps} />
    </div>
    <NavBottom />
  </>
}

export default MyApp
