/** @format */

import { useState, useEffect } from 'react';
import AppLayout from './layouts/AppLayout';
import { useTheme } from './hooks/useTheme'; // Import useTheme để áp dụng theme cho nền
import './App.css';

function App() {
	const { theme } = useTheme();

	return (
		<>
			<div
				className={`min-h-screen flex flex-col 
        ${theme === 'dark' ? 'text-dark-mode' : 'text-light-mode'}
        // Nền sẽ được xử lý bởi các class trên thẻ html
      `}>
				<AppLayout>
					{/* Nội dung chính của webapp */}
					<div className='bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 p-6 rounded-lg shadow-lg'>
						<h2 className='text-3xl font-bold mb-4 text-gray-800 dark:text-gray-50'>
							Chào mừng đến với Webapp Vũ trụ của bạn!
						</h2>
						<p className='text-lg text-gray-700 dark:text-gray-300'>
							Header, Sidebar, Footer và Layout đã sẵn sàng.
						</p>
					</div>
					<div className='mt-8 bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 p-6 rounded-lg shadow-lg'>
						<p className='text-lg text-gray-700 dark:text-gray-300'>
							Khu vực này sẽ hiển thị nội dung chính của mỗi trang.
						</p>
					</div>
				</AppLayout>
			</div>
		</>
	);
}

export default App;
