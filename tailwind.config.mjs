/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#e4e1d0',
  				secondary: '#274163',
				complementary: {
					split: {
						pink: "#ff00cc",
					},
					opposite: {
						yellow: "#ffff00",
					},
				},
				
				neutral: {
					light: "#F4F1DE",
					dark: colors.slate[900],
				},
				focus: "#ffff00",/*colors.emerald[300],*/
			},
			gradients: {
				//'linksNorm': 'linear-gradient(0deg, rgba(255, 255, 00, 1) 33%, rgba(0, 0, 0, 0) 33%)',
				//'linksHov': 'linear-gradient(0deg, rgba(255, 255, 00, 1) 100%, rgba(0, 0, 0, 0) 100%)',
			},
			animation: {
				inNOut: 'inNOut 5s ease-in-out',
			},
			keyframes: {
				inNOut: {
				  '0%, 100%': { opacity: 1 },
				  '50%': { opacity: 0 },
				}
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/4': '3 / 4',
				'2/3': '2 / 3',
				'3/2': '3 / 2',
				'16/9': '16 / 9',
				'9/16': '9 / 16',
			},
			fontFamily: {
				"title": ['Teachers', 'sans-serif'],
			},
			spacing: {
				'headingLineA': '0.48rem',
				'headingHeight': '2.4rem',
				'headingPadding': '1.3px',
				'welcomBannerHeight': '60vh',
				'spaceFromEdge': '2rem',
				'singleCol': '52rem'
			}
		},
	},
	plugins: [
		plugin(function({ addBase, config, theme }) {
			addBase({
			  'a': { background: theme('gradients.linksNorm'), textDecoration: 'underline', textDecorationStyle: 'dotted' },
			  'a:hover': { transition: 'all ease-in-out, 0.5s', background: theme('gradients.linksHov'), textDecoration: 'underline', dropShadow: theme('dropShadow.xl') /*config('theme.colors.complementary.opposite.yellow')*/ },
			  'h1': { fontSize: '2rem', fontFamily: theme('fontFamily.title'), marginTop: '0.5rem', textAlign: 'left' },
			  'h2': { fontSize: '1.75rem', fontFamily: theme('fontFamily.title'), marginTop: '0.5rem', textAlign: 'left' },
			  'h3': { fontSize: '1.5rem', fontFamily: theme('fontFamily.title'), marginTop: '0.5rem', textAlign: 'left' },
			  'ul': { listStyleType: 'disc', listStylePosition: 'outside', marginLeft: '1rem' },
			})
		  })
	],
}
