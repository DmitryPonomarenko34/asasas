import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
