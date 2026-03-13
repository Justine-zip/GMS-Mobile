import React from 'react';
import { ColorValue, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { IconRenderer } from '../utils/icon_renderer';

interface CircleIconProps {
    name?: string;
    iconSet?: 'Ionicons' | 'Feather';
    label?: string,
    size?: number;
    backgroundcolor?: ColorValue,
    iconColor?: string;
    textColor?: string;
    onPress?: () => void;
}

export default function CircleIconWithLabel({
    name,
    iconSet = 'Ionicons',
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
                        width: size + 8,
                        height: size + 8,
                        borderRadius: (size + 8) / 2,
                        backgroundColor: backgroundcolor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                ]}
            >
                <IconRenderer iconColor={iconColor} size={size} name={name} iconSet={iconSet} />

            </View>
            {label && <Text style={[globalStyles.text, { marginTop: 4, color: textColor }]}>{label}</Text>}
        </TouchableOpacity>
    );
}