/* Import --------------------------------------------------------------- */

import { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    FlatList,
    Image,
    Text,
    View
} from 'react-native'

import { SafeAreaView }            from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo }     from '@expo/vector-icons'
import { GameParams } from '../../@types/navigation'

import { Heading }               from '../../components/Heading'
import { Background }            from '../../components/Background'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'

import LogoImage from '../../assets/logo-nlw-esports.png'

import { THEME }  from '../../theme'
import { styles } from './styles'

/* ---------------------------------------------------------------------- */

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([])

    const navigation = useNavigation()
    const router = useRoute()
    const game = router.params as GameParams

    const handleGoBack = () => navigation.goBack()

    useEffect(() => {
        fetch(`http://192.168.0.16:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={24}
                        />
                    </TouchableOpacity>

                    <Image
                        source={LogoImage}
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />

                <Heading
                    title={game.title}
                    subtitle='Connect and start playing!'
                />

                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <DuoCard data={item} onConnect={() => { }} />}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
                    showsHorizontalScrollIndicator
                    ListEmptyComponent={
                        <Text style={styles.emptyListText}>
                            There are no ads published yet.
                        </Text>
                    }
                />
            </SafeAreaView>
        </Background>
    )
}