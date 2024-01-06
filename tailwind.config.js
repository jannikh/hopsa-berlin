/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false, // Disable PurgeCSS during development
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Roboto', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Configure styles for headings within prose class
            'h1, h2, h3, h4, h5, h6': {
              // Add your desired heading styles here
              fontWeight: 'bold',
              // Adjust other styles as needed
            },
          },
        },
      }),
    },
  },
}
