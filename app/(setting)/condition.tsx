import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Condition() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>C O N D I T I O N</Text>
        </SafeAreaView>
    );
}
