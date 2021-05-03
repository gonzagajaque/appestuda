import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    Image
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';

interface CardsListProps extends RectButtonProps {
    data: {
        titulo: string,
        imagem: string,
    }
}




export const CardsList = ({
    data,
    ...rest
}: CardsListProps) => {
    const navigation = useNavigation();

    function handleTema() {
        // Contruir para direcionar para o id
        navigation.navigate('Second');
    }
    return (
        <RectButton
            onPress={handleTema}
            style={styles.container}{...rest}>

            <Image source={{ uri: data.imagem }} style={{ width: 100, height: 100 }} />
            <Text>
                {data.titulo}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: '#333',
        marginVertical: 46,
        justifyContent: 'center',
    }
})