/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
        '3/2': '3 / 2'
      },
      height: {
        '80vh' : '80vh'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      }, 
      animation: {
        fadein: 'fadein 1s ease'
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    flex: {
      'static': '0 0 18rem'
    }
  },
  plugins: [],
}