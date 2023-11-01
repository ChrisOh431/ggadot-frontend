const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Inika", ...defaultTheme.fontFamily.serif]
			},
			colors: {
				ggviolet: {
					primary: "#370E3D",
					secondary: "#A947B8",
					tertiary: "#300C35",
					highlight: "#F3B6FC",
					dark: "#221424",
				},
				ggyellow: {
					primary: "#FFEEC3",
					secondary: "#FFE299",
					tertiary: "#FFDB80",
					quarternary: "#5C450A",
					highlight: "#FFF8E5",
					dark: "#251B04"
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
