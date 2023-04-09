import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#228B22',
        padding: 15,
        borderRadius: 50,
        height: 65,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    quickMenu: {
    },
    quickMenuHeader: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 20,
        textAlign: 'left',
    },
    btnText: {
        width: 100,
        flex: 1,
        textAlign: 'center',
    },
    btnSegment: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCenter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeMsg: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        margin: 10,
    },
});