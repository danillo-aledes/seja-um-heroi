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
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#04d361'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#235e4b',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    caseList: {
        marginTop: 32,
    },

    Caso: {
        padding: 24,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    caseProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold"
    },

    caseValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },

    detailsButtonText: {
        color: '#04d361',
        fontSize: 15,
        fontWeight: "bold"
    },

});