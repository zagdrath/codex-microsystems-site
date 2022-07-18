import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className='container'>
      <Head>
        <meta charSet='UTF-8' />
        <title>Codex Microsystems</title>
        <link rel='icon' href='/images/favicon.png' type='image/x-icon' />
      </Head>
      <Header></Header>
      <div className='content'></div>
      <Footer></Footer>
    </div>
  )
}
