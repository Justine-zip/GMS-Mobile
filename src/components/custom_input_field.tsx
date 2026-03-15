import React from 'react';
import { TextInput, TextStyle } from 'react-native';

interface CustomInputFieldProps {
    onChangeText?: (text: string) => void,
    value?: string,
    style?: TextStyle
    placeholder: string,
    placeholderColor: string,
}

export default function CustomInputField({ onChangeText, value, style, placeholder, placeholderColor }: CustomInputFieldProps) {
    return (
        <TextInput
            onChangeText={onChangeText}
            value={value}
            style={[style, { color: '#000', height: 40, width: '100%' }]}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
        ></TextInput>
    );
}
