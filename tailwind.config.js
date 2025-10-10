/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				cosmic: {
					lightText: '#2D2D3A',
					darkText: '#F2F3FA',
					accentLight: '#4E7FFF',
					accentDark: '#9AE6FF',
					footerLight: '#F4F5FA',
					footerDark: '#AAB6E6',
				},
				pastel: {
					pink: '#FF8FA3',
					purple: '#C084FC',
					blue: '#60A5FA',
				},
				galaxy: {
					blue: '#7DD3FC',
					violet: '#C4B5FD',
				},
				'cosmic-blue': '#a7c7ed',
				'cosmic-pink': '#e0b0d5',
				'dark-start': '#1A1B3B',
				'dark-end': '#3B0F59',
				'sidebar-hover-light': 'rgba(234, 190, 245, 0.9)',
				'sidebar-hover-dark': 'rgba(255, 255, 255, 0.15)',
			},
			backgroundImage: {
				'space-gradient-light': 'linear-gradient(to right top, #a7c7ed, #e0b0d5)',
				'space-gradient-dark': 'linear-gradient(to right top, var(--tw-gradient-stops))',
				'gradient-text-header': 'linear-gradient(to right, #e0b0d5, #a7c7ed, #915EBE)',
				'gradient-pastel': 'linear-gradient(90deg, #6246EA, #4E7FFF, #3CCFCF)',
				'gradient-cosmic': 'linear-gradient(90deg, #9AE6FF, #B5A8FF, #F6C1FF)',
				'gradient-heading-light': 'linear-gradient(90deg, #FF8FA3, #C084FC, #60A5FA)',
				'gradient-heading-dark': 'linear-gradient(90deg, #7DD3FC, #C4B5FD)',
			},
			backgroundSize: {
				'200%': '200%', // Kích thước nền lớn hơn để tạo hiệu ứng di chuyển
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			backgroundColor: {

			},
			textColor: {
				'dark-mode': '#ffffff',
				'light-mode': '#040408ff',
			},
			keyframes: {
				// Nếu bạn muốn animation text gradient
				gradientText: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				gradientText: 'gradientText 10s ease infinite', // Áp dụng animation
			}
		}
	},
	plugins: [],
}