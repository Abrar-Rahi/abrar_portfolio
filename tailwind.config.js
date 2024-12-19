/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sat': ['Satisfy'],
        'roboto': ['Roboto Condensed'],
        'sign': ['Dancing Script'],
      },
      animation: {
        'color-run': 'colorRun 3s linear infinite',
        'spin-slow': 'spin 1s linear',
        runGradient: 'runGradient 1s linear infinite',
        shape: "move 20s  linear infinite",
      },
      keyframes: {
        colorRun: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { transform: 'translateX(50%)', opacity: 0.3 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        runGradient: {
          '0%': { backgroundPosition: '100% 0%'},
          '50%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%'},
        },
        move: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10vw, 20vh)" },
          "50%": { transform: "translate(20vw, -10vh)" },
          "75%": { transform: "translate(-10vw, 15vh)" },
          "100%": { transform: "translate(0, 0)" },
        },
        
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

