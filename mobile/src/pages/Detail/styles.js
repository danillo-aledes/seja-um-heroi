import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#f6f6f6'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    Caso: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },

    caseProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold",
        marginTop: 24
    },

    caseValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#235e4b',
        lineHeight: 30
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#235e4b',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: "center",
        alignItems: "center"
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    },

});