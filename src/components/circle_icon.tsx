import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ColorValue, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface CircleIconProps {
    name?: keyof typeof Ionicons.glyphMap;
    label?: string,
    size?: number;
    backgroundcolor?: ColorValue,
    iconColor?: string;
    textColor?: string;
    onPress?: () => void;
}

export default function CircleIconWithLabel({
    name,
    label,
    size = 20,
    iconColor = 'black',
    textColor = 'black',
    backgroundcolor = 'white',
    onPress
}: CircleIconProps & { label?: string }) {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
            <View
                style={[
                    globalStyles.roundContainer,
                    {
                        width: size + 12,
                        height: size + 12,
                        borderRadius: (size + 12) / 2,
                        backgroundColor: backgroundcolor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                ]}
            >
                <Ionicons name={name} size={size} color={iconColor} />
            </View>
            {label && <Text style={[globalStyles.text, { marginTop: 4, color: textColor }]}>{label}</Text>}
        </TouchableOpacity>
    );
}