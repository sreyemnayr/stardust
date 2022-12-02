/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import Content from '../../components/content';
import Footer from '../../components/footer';
import LinkButton from '../../components/linkbutton';

import { copy } from '../../assets/copy/community/service'

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
      <div className="text-nostalgia-perfume flex flex-col text-center justify-center items-center max-w-[30rem]">
        {/*copy.hero?.img && <img className="w-[20vw] sm:w-[10rem]" src={copy.hero.img} alt={copy.hero.title} /> */}
        <h1 className="leading-none text-[12vw] sm:text-8xl">{copy.hero.title}</h1>
        <p className="w-[60vw] sm:w-60rem">{copy.hero.subtitle}</p>
          <div className="flex space-x-3">
            {copy.hero.buttons.map(b=>(
              <LinkButton key={b.title} {...b} />
            ))}
          </div>
          
          
        </div>
        <div>
          <LinkButton href="/community/service" title="Service Projects" bgClass="bg-transparent" />
          <LinkButton href="/community/giveback" title="Community Giveback" bgClass="bg-transparent" />
          <LinkButton href="/community/gallery" title="NFT Giveback Gallery" bgClass="bg-transparent" />
        </div>

        {/* Content section */}

        {/* Primary section */}
        <div className="text-moon-honey flex flex-col sm:flex-row justify-between w-full sm:w-[50rem] sm:space-x-20">
          <h3 className="text-nostalgia-perfume text-3xl sm:w-1/2">{copy.content.primary.title}</h3>
          <p className="sm:w-1/2">{copy.content.primary.description}</p>
        </div>
        
        { copy.content.secondary.map(sc => (
            <Content key={sc.title} {...sc} />
        ))}
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
