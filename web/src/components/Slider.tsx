/* Import --------------------------------------------------------------- */

import type { Game } from '../interfaces/types'

import { GameBanner } from './GameBanner'

import styles from '../styles/components/Slider.module.scss'

/* ---------------------------------------------------------------------- */
interface SliderProps { itens: Game[] }

export const Slider = ({ itens: games }: SliderProps) => {
    return (
        <div className={styles.container}>
            { games.map(({ id, title, _count, bannerUrl }) =>
                <GameBanner
                    key={id}
                    title={title}
                    adsCount={_count.ads}
                    bannerUrl={bannerUrl}
                />
            ) }
        </div>
    )
}