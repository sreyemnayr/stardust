/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import { BioProps } from '../../interfaces';

import Bio from '../../components/bio';
import Footer from '../../components/footer';

import { copy } from '../../assets/copy/community/gallery'
import LinkButton from '../../components/linkbutton';
import Gallery from '../../components/gallery';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const CollectionsSpaceCadets: NextPage = () => {
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
        {copy.hero?.img && <img className="w-[20vw] sm:w-[10rem]" src={copy.hero.img} alt={copy.hero.title} /> }
        <h1 className="leading-none text-[12vw] sm:text-8xl">{copy.hero.title}</h1>
        <p className="w-[60vw] sm:w-60rem">{copy.hero.subtitle}</p>
          <div className="flex space-x-3">
            {copy.hero.buttons.map(b=>(
              <LinkButton key={b.title} {...b} />
            ))}
          </div>
          
        </div>
        
        <Gallery {...copy.content.gallery} />

        
        
        

      </main>

      <Footer />
    </div>
  );
};

export default CollectionsSpaceCadets;
