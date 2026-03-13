import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Report() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>R E P O R T</Text>
        </SafeAreaView>
    );
}
