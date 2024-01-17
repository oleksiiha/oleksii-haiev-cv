import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/experiences/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mdx-components.tsx',
    '*'
  ],
  theme: {
    extend: {
      screens: {
        print: {raw: 'print'},
        screen: {raw: 'screen'},
      },
    },
  },
  plugins: [],
}
export default config
