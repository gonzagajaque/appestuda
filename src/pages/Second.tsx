import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Second() {
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('First');
    }

    return (
        <SafeAreaView>
            <View style={style.header}>
                <Text>Segunda Tela</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 60,
        color: '#D4e'
    }
})