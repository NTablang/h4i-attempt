module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Monument': ['Monument', 'sans-serif'],
        'MonumentRegular': ['MonumentRegular', 'sans-serif'],
        'MonumentLight': ['MonumentLight', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
 

      },
      backgroundImage: {
        'dot-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=')"
      }
    },
  },
  plugins: [],

}