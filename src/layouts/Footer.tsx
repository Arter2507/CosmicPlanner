/** @format */

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

/**
 * Footer component cho webapp.
 * Hiển thị thông tin bản quyền, tên webapp và thời gian hiện tại.
 */
const Footer: React.FC = () => {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const { theme } = useTheme();

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formattedDate = currentDateTime.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const formattedTime = currentDateTime.toLocaleTimeString('vi-VN', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	const textFooterTheme =
		theme === 'dark' ? 'footer-bg-cosmic' : 'footer-bg-pastel';
	return (
		<footer
			className={`bottom-0 left-0 right-0 h-[52px] w-full z-40 
        p-4 text-center text-sm
        bg-opacity-0 backdrop-filter backdrop-blur-md dark:bg-opacity-0
        ${
					theme === 'dark'
						? 'dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-800'
						: 'bg-space-gradient'
				}
				border-t border-white border-opacity-10 dark:border-gray-700
        rounded-2xl shadow-xl border border-white border-opacity-10 dark:border-white
        transition-colors duration-300`}>
			<div
				className={`container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-2 sm:space-y-0 font-semibold text-sm
      ${textFooterTheme}`}>
				<p>
					&copy; {new Date().getFullYear()} Cosmic Planner. All Rights Reserved.
				</p>
				<p
					className={`flex items-center space-x-2 font-bold text-sm
          ${
						theme === 'dark'
							? 'animate-gradient-text-dark'
							: 'animate-gradient-text-light'
					}
          `}>
					<span>{formattedDate}</span>
					<span>|</span>
					<span>{formattedTime}</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
