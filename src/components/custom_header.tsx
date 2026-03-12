import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { IconRenderer } from '../utils/icon_renderer';
import CircleIcon from './circle_icon';

interface HeaderProps {
    header: string,
    isCircled: boolean,
    icon: keyof typeof Ionicons.glyphMap | keyof typeof Feather.glyphMap | keyof typeof AntDesign.glyphMap,
    iconSet: "Ionicons" | "Feather" | "Entypo" | "Octicons" | "AntDesign" | undefined,
}

export default function CustomHeader({ header, icon, iconSet, isCircled }: HeaderProps) {
    return (
        <View style={{ padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
            <Text style={globalStyles.headerTitle}>{header}</Text>
            {isCircled ? <CircleIcon name={icon} onPress={() => console.log('#d3ffe1' + '50')} /> : <IconRenderer iconSet={iconSet} name={icon} size={20} />}
        </View>
    );
}
