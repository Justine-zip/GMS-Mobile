import { Feather, Ionicons } from "@expo/vector-icons";

interface IconRenderer {
    name?: string,
    iconSet?: 'Ionicons' | 'Feather',
    size?: number,
    iconColor?: string
}

export const IconRenderer = ({ name, iconSet, size, iconColor }: IconRenderer) => {
    if (!name) return null;
    if (iconSet === 'Ionicons') return <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Feather') return <Feather name={name as keyof typeof Feather.glyphMap} size={size} color={iconColor} />;
    return null;
}