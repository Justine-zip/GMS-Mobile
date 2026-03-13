import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const iconMap = {
    Ionicons,
    Feather,
    MaterialIcons
};


interface SettingItem {
    icon: string
    iconSet: 'Ionicons' | 'MaterialIcons' | 'Feather'
    name: string
}

interface SettingCardProps {
    header: string
    items: SettingItem[]
}

export default function SettingCard({ header, items }: SettingCardProps) {
    return (
        <View>
            <View style={globalStyles.spacer}>
                <Text>{header}</Text>
            </View>

            <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer]}>

                {items.map((item, index) => {

                    const IconComponent = iconMap[item.iconSet];

                    return (
                        <View key={index} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
                            <IconComponent name={item.icon as any} size={22} color="#000" />

                            <View style={{ flex: 1 }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={[globalStyles.title, { fontSize: 16 }]}>
                                        {item.name}
                                    </Text>

                                    <MaterialIcons name="navigate-next" size={24} color="#000" />
                                </View>

                                {index !== items.length - 1 && (
                                    <View style={globalStyles.separator} />
                                )}
                            </View>
                        </View>
                    )
                })}

            </View>
        </View>
    );
}