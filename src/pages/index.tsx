import React from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import LogoSvg from '../assets/blitz.svg'


const Home: React.FC = () => {
  return (
    <div >
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <LogoSvg />
        <h1 >
          hello world
        </h1>
      </main>
  </div>
  )
}

export default Home
