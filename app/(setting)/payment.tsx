import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Payment() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>P A Y M E N T</Text>
        </SafeAreaView>
    );
}
