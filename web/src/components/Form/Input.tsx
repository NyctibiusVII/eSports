/* Import --------------------------------------------------------------- */

import type { InputProps } from '../../interfaces/types'

import styles from '../../styles/components/Form/Input.module.scss'

/* ---------------------------------------------------------------------- */

export const Input = (props: InputProps) => <input className={styles.container} {...props} />