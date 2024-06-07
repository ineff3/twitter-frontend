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
            keyframes: {
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-out-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'slide-up-and-down': {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                'slide-in-left': 'slide-in-left 0.3s forwards',
                'slide-out-left': 'slide-out-left 0.3s forwards',
                'slide-up-and-down': 'slide-up-and-down 0.3s forwards',
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
