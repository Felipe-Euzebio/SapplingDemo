import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    aboutMsg: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        margin: 10,
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    previewArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    forms1: {
        flex: 1,
        alignSelf: 'center'
    },
    forms1Btn: {
        backgroundColor: '#228B22',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        width: 100,
        alignSelf: 'flex-end',
    }
});