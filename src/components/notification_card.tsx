import { LucideProps } from 'lucide-react-native';
import React, { ComponentType } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface NotificationCardProps {
    icon: ComponentType<LucideProps>
    header: string,
    description: string,
    time: string,
    isNew: boolean,
    iconColor?: string,
}

export default function NotificationCard({ icon: Icon, header, description, time, isNew, iconColor }: NotificationCardProps) {
    return (
        <TouchableOpacity>
            <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding]}>
                <View style={[{ flex: 1, flexDirection: 'row', gap: 10, alignItems: 'flex-start', paddingVertical: 8 }]}>
                    <View style={{ backgroundColor: `${iconColor}1a`, padding: 8, borderRadius: 8, }}>
                        <Icon size={24} color={iconColor} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[globalStyles.title, { fontSize: 16 }]}>{header}</Text>
                        <Text style={{ fontSize: 14 }}>{description}</Text>
                        <Text style={{ fontSize: 14, marginTop: 4, color: '#B0B0B0' }}>{time}</Text>
                    </View>
                    {isNew && <View style={[globalStyles.roundContainer, { height: 10, width: 10, backgroundColor: '#146EF5', borderWidth: 0 }]}></View>}
                </View>
            </View>
        </TouchableOpacity>
    );
}
