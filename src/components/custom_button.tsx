import React from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface CustomButtonProps {
    label: string,
    textColor?: string,
    textSize?: number,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>
    onPress?: VoidFunction
}

export default function CustomButton({ label, textColor, textSize, backgroundColor, style, onPress }: CustomButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={[globalStyles.blockContainer, style, { paddingVertical: 15, paddingHorizontal: 15, backgroundColor: backgroundColor }]}><Text style={{ color: textColor, fontSize: textSize, fontWeight: '500' }}>{label}</Text></View>
        </TouchableOpacity>
    );
}
