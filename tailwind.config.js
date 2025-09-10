/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A78BFA', // Violet-400
          light: '#C4B5FD',   // Violet-300
          dark: '#8B5CF6',    // Violet-500
        },
        danger: {
          DEFAULT: '#DC2626', // Red-600
          light: '#F87171',   // Red-400
          dark: '#B91C1C',    // Red-700
        },
        neutral: {
          DEFAULT: '#F8FAFC', // Slate-50
          dark: '#1E293B',    // Slate-800
          darker: '#0F172A',  // Slate-900
        },
        text: {
          DEFAULT: '#0F172A', // Slate-900
          light: '#64748B',   // Slate-500
          dark: '#F8FAFC',    // Slate-50
        },
        surface: {
          light: '#FFFFFF',   // Pure white
          dark: '#1E293B',    // Slate-800
        },
        accent: {
          DEFAULT: '#38BDF8', // Sky-400
          light: '#7DD3FC',   // Sky-300
          dark: '#0EA5E9',    // Sky-500
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.05)',
        'hover': '0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}