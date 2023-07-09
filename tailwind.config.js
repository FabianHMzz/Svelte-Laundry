/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,php}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}