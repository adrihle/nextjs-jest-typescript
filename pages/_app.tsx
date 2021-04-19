import Head from 'next/head'
import { AppProps } from 'next/app'
import { Footer, Nav } from '../containers'
import '../styles/global.sass'

// realmente esto no es una pagina, es un container para la app, aqui se mete redux, material...
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Nextjs typescript lint jest app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
