/** @format */

// src/pages/DashboardPage.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
	return (
		<div>
			<div className='bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-10 p-6'>
				<h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
					Chào mừng đến với Webapp Vũ trụ của bạn!
				</h2>
				<p className='text-lg text-gray-700 dark:text-gray-300'>
					Header, Sidebar, Footer và Layout đã sẵn sàng.
				</p>
			</div>
			<div className='mt-8 bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-10 p-6 rounded-lg shadow-lg'>
				<p className='text-lg text-gray-700 dark:text-gray-300'>
					Khu vực này sẽ hiển thị nội dung chính của mỗi trang.
				</p>
			</div>
		</div>
	);
};
export default DashboardPage;
