/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: '#5ABABA',   // Optional lighter shade
          DEFAULT: '#348B8B', // Main color
          dark: '#256767',    // Optional darker shade
        },
      },
      keyframes: {
        float: {
          '0%': {
            'drop-shadow': '0 5px 15px 0px rgba(0, 0, 0, 0.6)',
            transform: 'translateY(0px)',
          },
          '50%': {
            'drop-shadow': '0 25px 15px 0px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(-20px)',
          },
          '100%': {
            'drop-shadow': '0 5px 15px 0px rgba(0, 0, 0, 0.6)',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          'sm': '100%',
          'md': '750px',
          'lg': '1200px',
          'xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
