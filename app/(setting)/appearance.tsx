import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Appearance() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>A P P E A R A N C E</Text>
        </SafeAreaView>
    );
}
