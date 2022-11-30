/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader'
import Head from 'next/head'

import { Fragment } from 'react'
import styles from '../styles/Home.module.css';

import Nav from './nav';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function Page() {
  return (
    <div className={styles.container}>
      <Nav />

    </div>
  )
}

export default Nav