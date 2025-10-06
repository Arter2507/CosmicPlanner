/** @format */

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Example icon for user profile if needed

const UserStatusBar: React.FC = () => {
	// Thông tin profile để truyền vào UserStatusBar
	const profileInfo = {
		avatar: 'https://i.pravatar.cc/150?img=3', // Placeholder avatar
		name: 'Linh Phi',
		stats: [
			{ label: 'Tụ Vi', value: 120 },
			{ label: 'Tinh Thạch', value: 58 },
			{ label: 'Tiên Ngọc', value: 12 },
		],
	};
	const { theme } = useTheme();

	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const dayOfWeek = currentDateTime.toLocaleDateString('vi-VN', {
		weekday: 'long',
	});

	const profileTextColorClass =
		theme === 'dark'
			? 'animate-gradient-text-dark'
			: 'animate-gradient-text-light';

	return (
		<div
			className={`mx-auto mb-6 relative z-10 
                 w-full lg:max-w-screen-xl
                 px-4 py-4 bg-opacity-20 backdrop-filter backdrop-blur-md
                 rounded-2xl shadow-xl 
                 border border-white border-opacity-10 dark:border-gray-700
                 flex justify-between items-center transition-all duration-300
                 ${
										theme === 'dark'
											? 'dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-800'
											: 'bg-space-gradient'
									}
          `}>
			{/* Left: Welcome section */}
			<div className={`p-0 hidden md:block `}>
				<p className='text-base font-semibold italic'>
					"Welcome,{' '}
					<span className={`font-bold ${profileTextColorClass}`}>
						{profileInfo.name}
					</span>
					!
				</p>
				<p className='text-sm italic'>
					Hôm nay là {dayOfWeek}. Chúc một ngày tốt lành ❤️"
				</p>
			</div>

			{/* Right: Avatar, Name (Hàng 1) và Stats (Hàng 2) */}
			<div className='flex flex-col items-end'>
				{' '}
				{/* flex-col để xếp dọc, items-end để căn phải */}
				{/* Hàng 1: Avatar và Name */}
				<div className='flex items-center space-x-2 mb-1'>
					{' '}
					{/* mb-1 để tạo khoảng cách nhỏ với hàng dưới */}
					<img
						src={profileInfo.avatar}
						alt='User Avatar'
						className='h-10 w-10 rounded-full object-cover border-2 border-purple-400'
					/>
					<span
						className={`font-medium font-semibold ${profileTextColorClass}`}>
						{' '}
						{/* Hidden md:block đã bỏ để luôn hiển thị tên */}
						{profileInfo.name}
					</span>
				</div>
				{/* Hàng 2: Stats */}
				<div className='flex space-x-4 text-center'>
					{' '}
					{/* flex space-x-4 để các stat nằm ngang */}
					{profileInfo.stats.map((stat, index) => (
						<div
							key={index}
							className='items-center'>
							{' '}
							{/* flex-col để value trên, label dưới */}
							<span
								className={`text-sm ${profileTextColorClass} text-opacity-80`}>
								{stat.label}:{' '}
								<span
									className={`font-bold ${
										theme === 'dark' ? 'text-purple-400' : 'text-blue-600'
									}`}>
									{stat.value}
								</span>
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserStatusBar;
