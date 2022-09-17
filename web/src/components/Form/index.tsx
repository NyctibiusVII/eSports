/* Import --------------------------------------------------------------- */

import type { FormFieldProps, FormProps } from '../../interfaces/types'

import { Input } from './Input'

import styles from '../../styles/components/Form/index.module.scss'

/* ---------------------------------------------------------------------- */

export const Form = ({ children, field, ...rest }: FormProps) => {
    const { className='', ...restAttr } = rest
    const classes = [styles.container, styles[className]].join(' ')

    const normalField = field.filter(({ isSplit=false }) => !isSplit ?? true)
    const splitField  = field.filter(({ isSplit=false }) => isSplit ?? false)

    const Field = ({ id, label, type, placeholder, required=false }: FormFieldProps) => (
        <div key={id} className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <Input id={id} type={type} placeholder={placeholder} required={required} />
        </div>
    )

    return (
        <form className={classes} {...restAttr}>
            { normalField && normalField.map(item => Field(item)) }

            { splitField && <div className={styles.split}>{ splitField.map(item => Field(item)) }</div> }

            { children }
        </form>
    )
}