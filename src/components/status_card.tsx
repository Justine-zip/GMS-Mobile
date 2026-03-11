import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { IconRenderer } from '../utils/icon_renderer';
import StatusIndex from './status_index';

interface StatusCardProps {
    icon?: string;
    iconSet?: 'Ionicons' | 'Feather' | 'Entypo' | 'Octicons',
    label: string,
    value: string,
    plugin: boolean,
    status: string,
    style?: StyleProp<ViewStyle>
}

export default function StatusCard({ icon, iconSet = 'Ionicons', label, value, plugin, status, style }: StatusCardProps) {
    return (
        <View style={[globalStyles.blockContainer, globalStyles.spacer, style, { width: 165, height: 70, maxHeight: 70 }]}>
            <View style={{ flexDirection: 'row', gap: 8, padding: 8, alignItems: 'flex-start' }}>
                <View style={{ backgroundColor: '#e5efff', padding: 4, borderRadius: 4 }}>
                    <IconRenderer name={icon} iconSet={iconSet} size={18} />

                </View>
                <View style={{ flex: 10, flexDirection: 'column' }}>
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>{label}</Text>
                    <View style={{ flexDirection: 'row', gap: 8, marginTop: -2, alignItems: plugin ? 'center' : 'baseline' }}>
                        <Text
                            style={[
                                globalStyles.title,
                                { fontSize: 28, fontWeight: 'bold', marginTop: 6 },
                            ]}
                        >
                            {value}
                        </Text>

                        {plugin ? (
                            <StatusIndex label={status} />
                        ) : (
                            <Text style={{ fontSize: 14, color: '#333' }}>{status}</Text>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}
