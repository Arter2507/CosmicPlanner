/** @format */

// src/components/MainContentLayout.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Assuming you have a ThemeContext
interface MainContentLayoutProps {
	children: React.ReactNode;
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({ children }) => {
	const { theme } = useTheme();

	return (
		<div
			className={`min-h-[calc(100vh-96px-72px-80px)] // Adjust height: header(96) + footer(96) + statusbar(80) + padding
                 p-4 rounded-2xl shadow-xl
                 border border-white border-opacity-10 dark:border-white
                 transition-all duration-300
                 ${
										theme === 'dark'
											? 'dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-900'
											: 'bg-white bg-opacity-80'
									} z-10`}>
			{children}
		</div>
	);
};
export default MainContentLayout;
