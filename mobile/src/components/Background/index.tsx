/* Import --------------------------------------------------------------- */

import { ImageBackground } from 'react-native'

import BackgroundImage from '../../assets/background-galaxy.png'

import { styles } from './styles'

/* ---------------------------------------------------------------------- */

interface Props { children: React.ReactNode }

export function Background({ children }: Props) {
    return (
        <ImageBackground
            source={BackgroundImage}
            defaultSource={BackgroundImage}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    )
}