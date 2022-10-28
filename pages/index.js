import Head from 'next/head';
import Header from '../components/common/header';
import Services from '../components/home/services';
import Banner from '../components/home/banner';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Projects from "../components/home/projects"
import { Socials } from '../components/home/socials';
import Contact from '../components/home/contact';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <Banner />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Socials />
        <Contact />
      </main>
    </>
  )
}
