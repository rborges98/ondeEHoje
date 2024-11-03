import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/***/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'athletic-outfit': ['athletic-outfit', 'arial']
      }
    }
  },
  plugins: []
}
export default config
