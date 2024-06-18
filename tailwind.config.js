/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    domains: ["cdn.pixabay.com"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        blackText: "#000000", 
        whiteText: "#FFFFFF", 
        gray: "#6C757D", 
        neutral50: "#D1D5DB", 
        neutral400: "#9CA3AF", 
        emerald300: "#10B981", 
        emerald500: "#059669", 
      },
    },
  },
  plugins: [],
};
