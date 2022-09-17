/* Import --------------------------------------------------------------- */

import type { GameBannerProps } from '../interfaces/types'

import Image from 'next/future/image'
import Link  from 'next/link'

import styles from '../styles/components/GameBanner.module.scss'

/* ---------------------------------------------------------------------- */

export const GameBanner = ({ title, adsCount, bannerUrl }: GameBannerProps) => {
    const [gameCoverWidth, gameCoverHeight] = [180, 240]

    return (
        <Link href='#'>
            <a className={styles.container}>
                <div className={styles.banner} style={{ width: gameCoverWidth, height: gameCoverHeight }}>
                    <Image
                        src={bannerUrl}
                        className={styles.gameLogo}
                        alt={`${title} game logo`}
                        width={gameCoverWidth}
                        height={gameCoverHeight}
                        placeholder='blur'
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(gameCoverWidth, gameCoverHeight))}`}
                    />

                    <div className={styles.info}>
                        <strong>{title}</strong>
                        <span>{adsCount} announcements</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}



const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
                <stop stop-color="#8B5CF6" offset="20%" />
                <stop stop-color="#4C1D95" offset="50%" />
                <stop stop-color="#8B5CF6" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#8B5CF6" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)