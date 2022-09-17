/* Import --------------------------------------------------------------- */

import styles from '../styles/components/Heading.module.scss'

/* ---------------------------------------------------------------------- */

export const Heading = () => {
    return (
        <div className={styles.container}>
            <h1>Your <span>duo</span> is here.</h1>
            <h2>Select the game you want to play...</h2>
        </div>
    )
}