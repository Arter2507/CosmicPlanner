/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'cosmic-blue': '#a7c7ed', // Màu xanh pastel
				'cosmic-pink': '#e0b0d5', // Màu hồng pastel
				'dark-start': '#1A1B3B', // Darker blue/purple start
				'dark-end': '#3B0F59',   // Darker pink/purple end
			},
			backgroundImage: {
				'space-gradient-light': 'linear-gradient(to right top, #a7c7ed, #e0b0d5)', // Gradient xanh-hồng nhẹ cho chế độ sáng
				'space-gradient-dark': 'linear-gradient(to right top, var(--tw-gradient-stops))', // Sử dụng var để linh hoạt hơnGradient dark blue-purple cho chế độ tối (màu ví dụ)
				'space-bg': "url('/images/space_bg.jpg')", // Ảnh nền vũ trụ

				// Gradient cho chữ Cosmic Planner (hoặc các chữ khác)
				'gradient-text-header': 'linear-gradient(to right, #e0b0d5, #a7c7ed, #915EBE)', // 
			},
			backgroundSize: {
				'200%': '200%', // Kích thước nền lớn hơn để tạo hiệu ứng di chuyển
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			backgroundColor: {
				// Chúng ta sẽ không cần thiết lập màu nền trực tiếp ở đây nữa, mà sẽ dùng bg-image hoặc class
			},
			textColor: {
				'dark-mode': '#ffffff',
				'light-mode': '#1a1a2e',
			}
		},
	},
	plugins: [],
}