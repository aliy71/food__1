import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    container: {
      center: true,
    },

    colors: {
      'yellow': '#FFAB08',
      'orange': {
        100: '#FFAB08',
        300: '#FF5C00',
        500:'#FF7020',
      }, 
      'black': {
        300: '#B1B1B1',
        DEFAULT: '#000000'
      },
      'white': {
        100: '#F2F2F3',
        300: '#f9f9f9',
        900: '#ffffff'
      }
    },
    
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      padding: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
        7: '35px',
        8: '40px'
      },
      margin: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
        7: '35px',
        8: '40px'
      }
    },
  },
  plugins: [],
}
export default config
