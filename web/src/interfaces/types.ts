/* Import --------------------------------------------------------------- */

import {
    ButtonHTMLAttributes,
    FormHTMLAttributes,
    HTMLInputTypeAttribute,
    InputHTMLAttributes
} from 'react'

/* ---------------------------------------------------------------------- */

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export type FormFieldTypeAttributeProps = HTMLInputTypeAttribute

export type FormFieldProps = {
    id:          string
    label:       string
    type:        FormFieldTypeAttributeProps
    placeholder: string
    required?:   boolean
    isSplit?:    boolean
}

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    children?: React.ReactNode
    field:   FormFieldProps[]
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children:        React.ReactNode
    color?:          'primary' | 'secondary'
    parentIsButton?: boolean
    toggle?:         boolean
}

export type GameBannerProps = {
    title:     string
    adsCount:  number
    bannerUrl: string
}

export type Game = {
    id:        string
    title:     string
    bannerUrl: string
    _count: {
        ads:   number
    }
}