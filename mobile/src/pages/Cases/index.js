import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Cases() {
    const [cases, setCases] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function loadCases() {
        if (loading) {
            return;
        }

        if (total > 0 && cases.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('cases', {
            params: { page }
        });

        setCases([...cases, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadCases();
    }, []);

    function navigateToDetail(caso) {
        navigation.navigate('Detail', { caso });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>


            <FlatList
                data={cases}
                style={styles.caseList}
                keyExtractor={caso => String(caso.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCases}
                onEndReachedThreshold={0.2}
                renderItem={({ item: caso }) => (
                    <View style={styles.Caso}>
                        <Text style={styles.caseProperty}>Instituição:</Text>
                        <Text style={styles.caseValue}>{caso.name}</Text>

                        <Text style={styles.caseProperty}>Caso:</Text>
                        <Text style={styles.caseValue}>{caso.title}</Text>

                        <Text style={styles.caseProperty}>Valor:</Text>
                        <Text style={styles.caseValue}>
                            {
                                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(caso.value)
                            }
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(caso)}
                        >
                            <Text style={styles.detailsButtonText}>ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#04d361" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}