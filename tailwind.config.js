/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       "banner-bg": "linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)",
       "form": "linear-gradient(42.43deg, #c6dbff 0%, #e1ebfa 52.25%)",
       "service-bg": "url('/img/service-bg.png')",
       "projects-bg": "url('/img/project-bg.png')"
      }
    },
    boxShadow: {
      button: "0px 30px 60px rgba(59, 130, 246, 0.25)"
    },
    dropShadow: {
      form: "0px 30px 60px rgba(59, 130, 246, 0.25)"
    }
  },
  plugins: [],
}
