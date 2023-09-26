const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: 396 + 29.98 + 'px',
      sm: 516 + 29.98 + 'px',
      md: 720 + 29.98 + 'px',
      lg: 1230 + 29.98 + 'px',
      xl: 1230 + 29.98 + 'px',
    },
    container: {
      xs: 396 + 'px',
      sm: 516 + 'px',
      md: 720 + 'px',
      lg: 1230 + 'px',
      xl: 1366 + 'px',
    },
    colors: {
      primary: '#302B44',
      sec: '#CE9B44',
      blue: '#4294F4',
      red: '#c0392b',
      green: '#27ae60',
      yellow: '#E8B94A',
      pink: '#E16A87',
      teal: '#66B0AD',
      violet: '#746AE1',
      gray: '#302B44',
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },
    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      height: {
        '9.5': '152px',
      },
      borderRadius: {
        '1.5lg': '0.75rem',
      },
      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
        '5.5xl': ['3.25rem', '1.35'],
      },
    },
  },
  plugins: [require('@qpokychuk/tailwind-ratio-plugin')],
}

export default config
