import NavBottom from '../components/nav-bottom'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div className=" w-screen bg-barffer-bg overflow-auto" style={{
      height: 'calc(100vh - 3.5rem)'
    }}>
      <Component {...pageProps} />
    </div>
    <NavBottom />
  </>
}

export default MyApp
