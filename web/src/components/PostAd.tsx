/* Import --------------------------------------------------------------- */

import { PostAdButton } from './PostAdButton'

import styles from '../styles/components/PostAd.module.scss'

/* ---------------------------------------------------------------------- */

export const PostAd = () => {
    return (
        <div className={styles.customBorder}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <strong>Don&apos;t identify your duo?</strong>
                    <span>Post an ad to find new players!</span>
                </div>

                <PostAdButton />
            </div>
        </div>
    )
}