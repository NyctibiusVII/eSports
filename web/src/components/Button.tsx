/* Import --------------------------------------------------------------- */

import type { ButtonProps } from '../interfaces/types'

import { useState } from 'react'

import styles from '../styles/components/Button.module.scss'

/* ---------------------------------------------------------------------- */

export const Button = ({ children, color='primary', toggle=false, parentIsButton=false, ...rest }: ButtonProps) => {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => setIsActive(!isActive)
    const classToggle = toggle ? isActive ? 'active' : 'inactive' : ''

    const { className='', ...restAttr } = rest
    const classes = [styles.container, styles[color], styles[classToggle], styles[className]].join(' ')

    if (parentIsButton) return <div className={classes}>{ children }</div>
    if (toggle) return <button className={classes} onClick={() => toggleActive()} {...restAttr}>{ children }</button>

    return <button className={classes} {...restAttr}>{ children }</button>

}