import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface CustomButtonProps {
    label: string,
    textColor?: string,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>
}

export default function CustomButton({ label, textColor, backgroundColor, style }: CustomButtonProps) {
    return (
        <View style={[globalStyles.blockContainer, style, { paddingVertical: 10, paddingHorizontal: 15, backgroundColor: backgroundColor }]}><Text style={{ color: textColor }}>{label}</Text></View>
    );
}
