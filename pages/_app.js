
import '../styles/globals.css'
import Layout from '../Components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
