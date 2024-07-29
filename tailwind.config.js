/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006AFF',
        Blackprimary: '#191818',
        Gold: '#E7C700',
        Semiblack: '#191818'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kalamehBold: ['kalamehBold'],
        kalamehMed: ['kalamehMed']
      },
      screens: {
        Break1: '605px',
        Break2: '560px',
        Break3: '480px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
