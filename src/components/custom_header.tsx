import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import CircleIcon from './circle_icon';

interface HeaderProps {
    header: string,
    icon: keyof typeof Ionicons.glyphMap,
}

export default function CustomHeader({ header, icon }: HeaderProps) {
    return (
        <View style={{ padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
            <Text style={globalStyles.headerTitle}>{header}</Text>
            <CircleIcon name={icon} onPress={() => console.log('#d3ffe1' + '50')} />
        </View>
    );
}
