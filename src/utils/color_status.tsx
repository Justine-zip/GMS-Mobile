export function getColorsForStatus(label: string) {
    switch (label.toLowerCase()) {
        case 'active':
            return { bgColor: '#d3ffe1', textColor: '#00A535' }; // green
        case 'enable':
            return { bgColor: '#d3ffe1', textColor: '#00A535' }; // green
        case 'complete':
            return { bgColor: '#d3ffe1', textColor: '#00A535' }; // green
        case 'cancelled':
            return { bgColor: '#ffe1e1', textColor: '#F48C3B' }; // yellow
        case 'expired':
            return { bgColor: '#ffe1e1', textColor: '#FF4D4D' }; // red
        case 'pending':
            return { bgColor: '#e1f0ff', textColor: '#007BFF' }; // blue
        default:
            return { bgColor: '#f0f0f0', textColor: '#333' }; // default gray
    }
}