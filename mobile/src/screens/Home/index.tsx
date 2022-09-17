/* Import --------------------------------------------------------------- */

import {
    Image,
    FlatList
} from 'react-native'
import { useEffect, useState } from 'react'

import { SafeAreaView }  from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import LogoImage from '../../assets/logo-nlw-esports.png'

import { GameCard, GameCardProps } from '../../components/GameCard'
import { Background }              from '../../components/Background'
import { Heading }                 from '../../components/Heading'

import { styles } from './styles'

/* ---------------------------------------------------------------------- */

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([])

    const navigation = useNavigation()

    const handleOpenGaming = ({ id, title, bannerUrl }: GameCardProps) => {
        navigation.navigate('game', { id, title, bannerUrl })
    }

    useEffect(() => {
        fetch('http://192.168.0.16:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={LogoImage}
                    style={styles.logo}
                />

                <Heading
                    title='Find your duo!'
                    subtitle='Select the game you want to play...'
                />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGaming(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </Background>
    )
}