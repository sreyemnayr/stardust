/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'golden-lion-tamarin': '#c96028',
      'marquis-orange': '#d47440',
      'clay-mug': '#d37a5c',
      'midsummer-gold': '#ebad30',
      'roman-gold': '#d29d31',
      'buttery-salmon': '#fdaf9d',
      'mazzy-star': '#c55aa6',
      'romantic-rose': '#ab3c8b',
      'forest-fruit-red': '#71225a',
      'periwinkle-blue': '#9695f3',
      'purple-illusion': '#b7b7f1',
      'nostalgia-perfume': '#dad9fa',
      'hummus': '#efca9a',
      'ninjin-orange': '#e4a86b',
      'peru': '#ca8142',
      'bauhaus': '#404040',
      'black': '#404040',
      'white': '#ffffff',
      'moon-honey': '#f6f0df',
      'grey': '#c0c0c0',
      'silver': '#c0c0c0',
    },
    extend: {
      fontFamily: {
        'sans': ['var(--font-josephin-sans)', ...defaultTheme.fontFamily.sans],
        'serif': ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
