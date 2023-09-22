/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-purple': 'hsl(273, 85%, 13%)',
				eucalyptus: 'hsl(150, 100%, 63%)',
				'davy-grey': 'hsl(271, 12%, 34%)',
				white: 'hsl(0, 0%, 100%)'
			},
			backgroundImage: {
				'hero': 'url(/images/bg-hero.png)',
				'features': 'url(/images/bg-features.png)'
			}
		}
	},
	plugins: []
};
