/* Import --------------------------------------------------------------- */

import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'

import Head from 'next/head'

import '../styles/global.scss'

/* ---------------------------------------------------------------------- */

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head><meta name='viewport' content='width=device-width, initial-scale=1.0' /></Head>
            <ThemeProvider themes={['light', 'dark', 'custom']} defaultTheme='dark'>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}