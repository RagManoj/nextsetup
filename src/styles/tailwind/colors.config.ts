

interface ScssVariables {
    [key: string]: string;
}
const colorsConfig =
{
    "$indigo-50": "#f0f5ff",
    "$indigo-100": "#e0ebff",
    "$indigo-200": "#c2d7ff",
    "$indigo-300": "#a3c2ff",
    "$indigo-400": "#659aff",
    "$indigo-500": "#2672ff",
    "$indigo-600": "#2267e6",
    "$indigo-700": "#1d57bf",
    "$indigo-800": "#174699",
    "$indigo-900": "#143a7d",
    "$red-50": "#fff5f5",
    "$red-100": "#ffe3e3",
    "$red-200": "#ffc9c9",
    "$red-300": "#ffa8a8",
    "$red-400": "#ff8787",
    "$red-500": "green",
    "$red-600": "#f03e3e",
    "$red-700": "#1d57bf",
    "$red-800": "#e03131",
    "$red-900": "#c92a2a"

}
const variables: ScssVariables = colorsConfig;

const createColorPalette = (colorPrefix: string) => {
    const colorPalette: { [key: number]: string } = {};
    for (let i = 50; i <= 900; i += 50) {
        const key = `$${colorPrefix}-${i}`;
        if (variables[key]) {
            colorPalette[i] = variables[key];
        }
    }
    return colorPalette;
};
const colors = {
    red: createColorPalette('red'),
    indigo: createColorPalette('indigo'),
}
export default colors