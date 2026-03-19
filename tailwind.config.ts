import type { Config } from 'tailwindcss';
import { tokens } from './src/design/tokens';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    extend: {
      // 🎨 COLORS
      colors: {
        brand: tokens.colors.brand,
        neutral: tokens.colors.neutral,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        danger: tokens.colors.danger,
      },

      // 📏 SPACING SYSTEM
      spacing: tokens.spacing,

      // 🔤 TYPOGRAPHY
      fontFamily: {
        sans: tokens.typography.fontFamily.sans,
      },
      fontSize: tokens.typography.fontSize,

      // 🔲 BORDER RADIUS
      borderRadius: tokens.radius,

      // 🌫️ SHADOWS
      boxShadow: tokens.shadow,

      // 📦 CONTAINER WIDTH
      maxWidth: {
        container: tokens.layout.container,
      },

      // 🎯 OPTIONAL: z-index scale (clean layering system)
      zIndex: {
        1: '1',
        5: '5',
        10: '10',
        50: '50',
        100: '100',
      },

      // 🎬 TRANSITIONS (nice UX touch)
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },

  // 🔥 IMPORTANT: Standard container config (optional but nice)
  plugins: [],
};

export default config;
