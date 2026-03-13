import { globalStyles } from '@/src/styles/globalStyles';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>N O T I F I C A T I O N</Text>
        </SafeAreaView>
    );
}
