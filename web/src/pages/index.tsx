/* Import --------------------------------------------------------------- */

import type { NextPage } from 'next'

import { Slider } from '../components/Slider'
import { PostAd } from '../components/PostAd'

import Logo from '../../public/assets/logo-esports.svg'

import Image from 'next/future/image'
import Head  from 'next/head'

import styles from '../styles/pages/Home.module.scss'

/* ---------------------------------------------------------------------- */

const Home: NextPage = () => {
    return (
        <>
            <Head><title>eSport</title></Head>
            <main className={styles.container}>
                <Image src={Logo} className={styles.logo} loading='eager' alt='' />

                <div className={styles.introduction}>
                    <h1>Your <span>duo</span> is here.</h1>
                    <h2>Select the game you want to play...</h2>
                </div>

                <Slider />

                <PostAd />
            </main>
        </>
    )
}

export default Home