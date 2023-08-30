import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridColumn: {
				layout: '350px minmax(auto, 1fr)',
			},
			margin: {
				'0-350': '0 350px',
				'0-a': '0 auto',
			},
			translate: {
				'-100%': '-100%',
			},
		},
	},
	plugins: [],
}
export default config
