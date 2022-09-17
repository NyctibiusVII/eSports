/* Import --------------------------------------------------------------- */

import LogoImage from '../../public/assets/logo-esports.svg'

import Image from 'next/future/image'

import styles from '../styles/components/Logo.module.scss'

/* ---------------------------------------------------------------------- */

export const Logo = () => <Image src={LogoImage} className={styles.container} loading='eager' alt='' />