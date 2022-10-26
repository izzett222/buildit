import Head from 'next/head';
import Header from '../components/common/header';

export default function about() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>about</title>
      </Head>
      <Header />
    </div>
  )
}
