/** @format */

import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
	});

	useEffect(() => {
		const html = document.documentElement;

		// --- Cần điều chỉnh logic xóa/thêm class ở đây ---
		// 1. Luôn xóa cả hai class nền trước
		html.classList.remove('light-theme-background');
		html.classList.remove('dark-theme-background');

		// 2. Luôn xóa class 'dark' và 'light' của Tailwind
		html.classList.remove('light');
		html.classList.remove('dark');

		// 3. Thêm class tương ứng với theme hiện tại
		if (theme === 'dark') {
			html.classList.add('dark', 'dark-theme-background');
		} else {
			html.classList.add('light', 'light-theme-background');
		}

		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
