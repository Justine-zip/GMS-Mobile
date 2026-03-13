import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
    return (
        <SafeAreaView style={[globalStyles.container,]}>
            <Text style={[globalStyles.title]}>A C C O U N T</Text>
            <Text style={[globalStyles.text, { marginTop: 10 }]}>View and update your personal details and account information.</Text>
        </SafeAreaView>
    );
}
