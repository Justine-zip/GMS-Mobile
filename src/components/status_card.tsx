import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import StatusIndex from './status_index';

interface StatusCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string,
    value: string,
    plugin: boolean,
    status: string,
    style?: StyleProp<ViewStyle>
}

export default function StatusCard({ icon, label, value, plugin, status, style }: StatusCardProps) {
    return (
        <View style={[globalStyles.blockContainer, globalStyles.spacer, style, { width: 160, height: 80, maxHeight: 80 }]}>
            <View style={{ flexDirection: 'row', gap: 8, padding: 4, alignItems: 'flex-start' }}>
                <View style={{ backgroundColor: '#e5efff', padding: 4, borderRadius: 4 }}>
                    <Ionicons name='calendar-clear-outline' color={'#146EF5'} size={18} ></Ionicons>
                </View>
                <View style={{ flex: 10, flexDirection: 'column' }}>
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>{label}</Text>
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: plugin ? 'center' : 'baseline' }}>
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
