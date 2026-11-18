import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { navy: '#101D32', gold: '#C49A52', ocean: '#0B6FB7', mist: '#F4F6F8' }, fontFamily: { sans: ['var(--font-inter)'], display: ['var(--font-jakarta)'] }, boxShadow: { soft: '0 12px 36px rgba(16,29,50,.10)' } } }, plugins: [] };
export default config;
