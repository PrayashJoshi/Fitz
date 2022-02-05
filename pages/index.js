import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Your Digital Wardrobe" />
        <p className="description">
          Upload your Images Here: <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
