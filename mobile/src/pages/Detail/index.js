import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const caso = route.params.caso;
    const message = `Olá  ${caso.name}, estou entrando em contato pois gostaria de ajudar no caso "${caso.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.value)}`;

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.title}`,
            recipients: [caso.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#04d361" />
                </TouchableOpacity>
            </View>

            <View style={styles.Caso}>
                <Text style={[styles.caseProperty, { marginTop: 0 }]}>Instituição:</Text>
                <Text style={styles.caseValue}>
                    {caso.name} de {caso.city} - {caso.uf}
                </Text>

                <Text style={styles.caseProperty}>Descrição:</Text>
                <Text style={styles.caseValue}>{caso.description}</Text>

                <Text style={styles.caseProperty}>Valor:</Text>
                <Text style={styles.caseValue}>
                    {
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                            .format(caso.value)
                    }
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}