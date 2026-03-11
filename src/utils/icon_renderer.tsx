import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";

interface IconRenderer {
    name?: string,
    iconSet?: 'Ionicons' | 'Feather' | 'Entypo' | 'Octicons',
    size?: number,
    iconColor?: string
}

export const IconRenderer = ({ name, iconSet, size, iconColor }: IconRenderer) => {
    if (!name) return null;
    if (iconSet === 'Ionicons') return <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Feather') return <Feather name={name as keyof typeof Feather.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Entypo') return <Entypo name={name as keyof typeof Entypo.glyphMap} size={size} color={iconColor} />;
    if (iconSet === 'Octicons') return <Octicons name={name as keyof typeof Octicons.glyphMap} size={size} color={iconColor} />;
    return null;
}