import type { Config } from "tailwindcss";
import colors from './src/styles/tailwind/colors.config'
import fontfamily from './src/styles/tailwind/fontfamily.config'
import columns from './src/styles/tailwind/columns.config'
import fontLineObj from './src/styles/tailwind/fontSize-lineHeight.config'
import extendProperties from './src/styles/tailwind/extendProperties.config'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    fontFamily: fontfamily,
    columns: columns,
    fontSize:fontLineObj['fontSize'],
    lineHeight:fontLineObj['lineHeight'],
    fontStyle:fontLineObj['fontStyle'],
    extend: extendProperties
  },
  plugins: [],
};
export default config;
