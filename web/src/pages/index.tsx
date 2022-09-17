/* Import --------------------------------------------------------------- */

import type { NextPage } from 'next'
import type { Game }     from '../interfaces/types'

import {
    useEffect,
    useState
} from 'react'

import { api } from '../services/api'

import { Logo }    from '../components/Logo'
import { Heading } from '../components/Heading'
import { Slider }  from '../components/Slider'
import { PostAd }  from '../components/PostAd'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.scss'

/* ---------------------------------------------------------------------- */

const Home: NextPage = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => { api.get('/games').then(res => setGames(res.data)) }, [])

    return (
        <>
            <Head><title>eSport</title></Head>
            <main className={styles.container}>
                <Logo />
                <Heading />
                <Slider itens={games} />
                <PostAd />
            </main>
        </>
    )
}

export default Home