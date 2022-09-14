/* Import --------------------------------------------------------------- */

import { MagnifyingGlassPlus } from 'phosphor-react'

import styles from '../styles/components/PostAdButton.module.scss'

/* ---------------------------------------------------------------------- */

export const PostAdButton = () => {
    return (
        <button className={styles.container}>
            <MagnifyingGlassPlus size={20} />
            Post announcement
        </button>
    )
}