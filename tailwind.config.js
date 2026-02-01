module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A5568", // Slate gray for calm professionalism
        'primary-dark': "#2D3748", // Darker slate
        secondary: "#EDF2F7", // Light gray
        accent: "#68D391", // Soft green for healing
        textDark: "#2D3748", // Dark gray
        background: "#FFFFFF", // White
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: []
};
