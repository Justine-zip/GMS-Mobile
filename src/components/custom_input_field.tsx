import React from 'react';
import { TextInput, TextStyle } from 'react-native';

interface CustomInputFieldProps {
    style?: TextStyle
    placeholder: string,
    placeholderColor: string,
}

export default function CustomInputField({ style, placeholder, placeholderColor }: CustomInputFieldProps) {
    return (
        <TextInput
            style={[style, { color: '#000', height: 40 }]}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
        ></TextInput>
    );
}
