import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    text: {
        fontSize: 14,
        color: '#000000'
    },

    blockContainer: {

        alignSelf: 'flex-start',
        borderWidth: .6,
        borderColor: '#B0B0B0',
        borderRadius: 12,
        overflow: 'hidden',
    },
    roundContainer: {
        borderWidth: .6,
        borderColor: 'grey',
        borderRadius: 60,
        overflow: 'hidden',
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },


    wrapperCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperPadding: {
        width: '100%',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    spacer: {
        marginTop: 20,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#B0B0B0',
        marginVertical: 10,
    }
});

