import { AntDesign, Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

interface IconRenderer {
    name?: string,
    iconSet?: 'Ionicons' | 'Feather' | 'Entypo' | 'Octicons' | 'AntDesign',
    size?: number,
    iconColor?: string
    onPress?: VoidFunction
}

export const IconRenderer = ({ name, iconSet, size, iconColor, onPress }: IconRenderer) => {
    if (!name) return null;
    if (iconSet === 'Ionicons') return <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Feather') return <TouchableWithoutFeedback
        onPress={onPress}
    >
        <Feather name={name as keyof typeof Feather.glyphMap} size={size} color={iconColor} />
    </TouchableWithoutFeedback>;
    if (iconSet === 'Entypo') return <Entypo name={name as keyof typeof Entypo.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Octicons') return <Octicons name={name as keyof typeof Octicons.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'AntDesign') return <AntDesign name={name as keyof typeof AntDesign.glyphMap} size={size} color={iconColor} />;
    return null;
}