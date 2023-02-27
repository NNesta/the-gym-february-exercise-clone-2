import '@/styles/globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/></>
  )
}
