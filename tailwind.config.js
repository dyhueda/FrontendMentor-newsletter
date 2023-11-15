/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'darkSlate': 'hsl(234, 29%, 20%)',
      'charcoal': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white' : 'hsl(0, 0%, 100%)',
      'pink' : 'rgb(255,82,123)',
      'orange' : 'rgba(255,106,58,1)',
      'red' : 'rgb(191,129,124)',
      'whiteRed' : 'rgb(255,232,230)'
    }
  },
  plugins: [],
}