/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#2563EB',
        accent: '#6366F1',
        surface: '#F9FAFB',
        ink: '#0F172A',
        muted: '#64748B',
      },
    },
  },
  plugins: [],
}
