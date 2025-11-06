/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#0f0f0f",
        gold: "#facc15",
        accent: "#1e1e1e",
        card: "#181818",
      },
      boxShadow: {
        smooth: "0 4px 20px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
}
