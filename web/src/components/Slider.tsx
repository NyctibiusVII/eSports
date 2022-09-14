/* Import --------------------------------------------------------------- */

import { Key } from 'react'

import Image from 'next/future/image'
import Link  from 'next/link'

import styles from '../styles/components/Slider.module.scss'

/* ---------------------------------------------------------------------- */

type playerAnnouncementsType = {
    game:        string
    amountOfAds: number
    srcImg:      string
}

export const Slider = () => {
    const [gameCoverWidth, gameCoverHeight] = [180, 240]
    const playerAnnouncements: playerAnnouncementsType[] = [
        {
            game: 'League of Legends',
            amountOfAds: 4,
            srcImg: 'game-1.png'
        },
        {
            game: 'League of Legends',
            amountOfAds: 4,
            srcImg: 'game-1.png'
        },
        {
            game: 'League of Legends',
            amountOfAds: 4,
            srcImg: 'game-1.png'
        },
        {
            game: 'League of Legends',
            amountOfAds: 4,
            srcImg: 'game-1.png'
        },
        {
            game: 'League of Legends',
            amountOfAds: 4,
            srcImg: 'game-1.png'
        }
    ]

    // const settings = {
    //     touchMove: true,
    //     useCSS: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     dots: true,
    //     dotsClass: 'slick-dots slick-thumb customDots',
    //     arrows: false,
    //     infinite: false,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1480,
    //             settings: {
    //                 dots: false,
    //                 arrows: true,
    //                 touchMove: false,
    //                 slidesToShow: 5
    //             }
    //         },
    //         {
    //             breakpoint: 1080,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         },
    //         {
    //             breakpoint: 780,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 580,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 320,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // }

    return (
        <div className={styles.container}>
            { playerAnnouncements.map((announcement, key: Key) => {
                const { game, amountOfAds, srcImg } = announcement

                return (
                    <Link href='#' key={key}>
                        <a>
                            <div className={styles.card} style={{ width: gameCoverWidth, height: gameCoverHeight }}>
                                <Image
                                    src={`/assets/${srcImg}`}
                                    className={styles.gameLogo}
                                    alt={`${game} game logo`}
                                    width={gameCoverWidth}
                                    height={gameCoverHeight}
                                    placeholder='blur'
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(gameCoverWidth, gameCoverHeight))}`}
                                />

                                <div className={styles.info}>
                                    <strong>{game}</strong>
                                    <span>{amountOfAds} announcements</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                )
            }) }
        </div>
    )
}



const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
                <stop stop-color="#333" offset="20%" />
                <stop stop-color="#222" offset="50%" />
                <stop stop-color="#333" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)