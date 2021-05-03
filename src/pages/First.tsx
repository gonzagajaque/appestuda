import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CardsList } from '../../components/CardsList';
import api from '../../services/api';

interface RedacaoTemasProps {
    id: string;
    data: string;
    titulo: string;
    descricao: string;
    imagem: string;
    arquivo: string;
    empresa: string;
    empresa_nome: string;
    imaginie: string;
    creditos: string
}

interface RedacaoTemaEnviosProps {
    rde_id: string;
    rde_url: string;
    rde_empresa: string;
    rde_titulo: string;
    rde_pagina: string;
    rde_comentarios: string;
    rde_nota: string;
    rdt_id: string;
    rdt_empresa: string;
    rdt_imagem: string;
    arq_endereco: string;
    rco_status: string;
    usuario: string;
    usuario_nome: string;
    usuario_foto_src: string;
}

export function First() {

    const [temas, setRedacaoTemas] = useState<RedacaoTemasProps[]>([]);
    const [temaEnvios, setRedacaoTemaEnvios] = useState<RedacaoTemaEnviosProps[]>([]);


    // Lista de Temas (redacao_temas)
    useEffect(() => {
        async function fetchRedacaoTemas() {
            const { data } = await api.get('?acao=redacao_temas&inicio=1');
            setRedacaoTemas(data.redacao_temas);
        }

        fetchRedacaoTemas();

    }, [])

    // Redacoes enviadas (redacao_tema_envios)
    useEffect(() => {
        async function fetchRedacaoTemaEnvios() {
            const { data } = await api.get('?acao=redacao_tema_envios&tema=11830&inicio=1');
            setRedacaoTemaEnvios(data.redacao_tema_envios);
        }

        fetchRedacaoTemaEnvios();

    }, [])

    return (
        <ScrollView>
            <SafeAreaView style={style.header}>
                <Text>Temas de Redação</Text>
            </SafeAreaView>

            <View style={style.container}>
                <FlatList
                    data={temas}
                    renderItem={({ item }) => (
                        <CardsList data={item} />
                    )}
                />
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    header: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 40,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
})