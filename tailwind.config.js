/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [
            {
                dim: {
                    ...require('daisyui/src/theming/themes')['dim'],
                    'base-100': '#18191C',
                    'base-300': '#1D2026',
                    'base-content': '#9099AF',
                    accent: '#363F54',
                    primary: '#1A5CFF',
                    secondary: '#FFFFFF',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
}
