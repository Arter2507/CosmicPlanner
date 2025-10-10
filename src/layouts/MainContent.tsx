/** @format */

// src/layouts/MainContentLayout.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface MainContentLayoutProps {
	title?: string; // Tiêu đề tùy chọn cho trang
	children: React.ReactNode;
	className?: string; // Để thêm các class tùy chỉnh nếu cần
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({
	title,
	children,
	className,
}) => {
	const { theme } = useTheme();

	const layoutBackgroundClass =
		theme === 'dark'
			? 'dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-800'
			: 'bg-space-gradient';

	const titleTextColorClass =
		theme === 'dark'
			? 'text-purple-300'
			: 'bg-gradient-to-r from-blue-700 to-indigo-900 text-transparent bg-clip-text';

	return (
		<div
			className={`
      mb-6 relative z-10 w-full px-4 py-4
      ${layoutBackgroundClass}
      bg-opacity-20 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl
      border border-white border-opacity-10 dark:border-white
      transition-all duration-300 overflow-y-auto
      ${className || ''}
    `}>
			{title && (
				<h1 className={`text-3xl font-bold mb-6 ${titleTextColorClass}`}>
					{title}
				</h1>
			)}
			<div className='text-gray-800 dark:text-gray-200'>
				{/* Đây là nơi nội dung thực tế của trang sẽ được render */}
				{children}
			</div>
		</div>
	);
};

export default MainContentLayout;
