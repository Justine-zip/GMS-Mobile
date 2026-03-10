import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { getColorsForStatus } from '../utils/color_status';

interface StatusIndexProps {
    label: 'Active' | 'Cancelled' | 'Complete' | string;
    style?: StyleProp<ViewStyle>;
}

export default function StatusIndex({ label, style }: StatusIndexProps) {
    const { bgColor, textColor } = getColorsForStatus(label);

    return (
        <View
            style={[
                globalStyles.roundContainer,
                {
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    backgroundColor: bgColor,
                    borderWidth: 0,
                },
                style,
            ]}
        >
            <Text style={[globalStyles.title, { fontSize: 9, color: textColor }]}>
                {label}
            </Text>
        </View>
    );
}

