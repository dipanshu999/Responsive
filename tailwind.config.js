/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      backgroundImage:{
        'custom-blob': "url('../public/blob.svg')",
      },
      screens:{
        'xsm':'470px',
        'mob':'650px',
        'tab':'800px',
        'lap':'1180px'
      },
    },
  },
  plugins: [],
}

