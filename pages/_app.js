import '../styles/globals.css'
import Footer from "../components/common/footer";
import Header from '../components/common/header';

function MyApp({ Component, pageProps }) {
  return (<>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>

  )
}

export default MyApp
