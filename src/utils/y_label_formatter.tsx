const maxValue = 15000;
const noOfSections = 3;

export const yAxisLabels = Array.from({ length: noOfSections + 1 }, (_, i) => {
    const value = (maxValue / noOfSections) * i;
    if (value >= 1000) {
        return `$${Math.round(value / 1000)}k`;
    }
    return `$${value}`;
});