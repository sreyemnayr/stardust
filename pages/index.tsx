/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Content from '../components/content';
import Footer from '../components/footer';
import LinkButton from '../components/linkbutton';

import { copy } from '../assets/copy/home'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{copy.hero.title}</title>
        <meta
          name="description"
          content={copy.hero.subtitle}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="text-nostalgia-perfume text-center flex flex-col items-center justify-center">
          <p>{copy.hero.supertitle}</p>
          <h1 className="leading-none text-[12vw] sm:text-8xl">{copy.hero.title}</h1>
          <p className="w-[60vw] sm:w-60rem">{copy.hero.subtitle}</p>
          <LinkButton {...copy.hero.button}  />
          
        </div>

        {/* Content section */}

        {/* Primary section */}
        <Content {...copy.content.primary} />
        { copy.content.secondary.map(sc => (
            <Content key={sc.title} {...sc} />
        ))}
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
