import React from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import LogoSvg from '../assets/blitz.svg'
import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <LogoSvg />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>

  </Container>
  )
}

export default Home
