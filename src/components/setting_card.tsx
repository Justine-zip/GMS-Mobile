import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
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
    route: string
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
                        <View key={index} style={{ flexDirection: 'row', gap: 12, alignItems: 'baseline' }}>
                            <IconComponent name={item.icon as any} size={22} color="#000" />

                            <TouchableWithoutFeedback
                                onPress={() =>
                                    router.push({
                                        pathname: `/(setting)/${item.route}` as any
                                    })
                                }
                            >
                                <View style={{ flex: 1 }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'baseline',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text style={[globalStyles.title, { fontSize: 15 }]}>
                                            {item.name}
                                        </Text>
                                        <MaterialIcons name="navigate-next" size={24} color="#000" />
                                    </View>
                                    {index !== items.length - 1 && (
                                        <View style={globalStyles.separator} />
                                    )}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                })}

            </View>
        </View>
    );
}