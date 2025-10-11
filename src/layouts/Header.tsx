/** @format */

import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faBell,
	faSun,
	faMoon,
	faChartBar,
	faGlobe,
	faComments,
	faSignOutAlt,
	faUser,
	faSatellite,
	faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons/faMeteor';

interface HeaderProps {
	onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const profile = {
		avatar: 'https://i.pravatar.cc/150?img=3',
		name: 'Linh Phi',
		stats: [
			{ label: 'Tụ Vi', value: 120 },
			{ label: 'Tinh Thạch', value: 58 },
			{ label: 'Tiên Ngọc', value: 12 },
		],
		menuItems: [
			{ icon: faUser, label: 'Thông tin' },
			{ icon: faChartBar, label: 'Hoạt động' },
			{ icon: faGlobe, label: 'Bảng xếp hạng' },
			{ icon: faBell, label: 'Thông báo' },
			{ icon: faComments, label: 'Phòng chat' },
			{ icon: faSignOutAlt, label: 'Đăng xuất' },
		],
	};
	const textGradientTheme =
		theme === 'dark'
			? 'animate-gradient-text-dark'
			: 'animate-gradient-text-light';
	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 h-[90px]
        bg-opacity-0 backdrop-filter backdrop-blur-md dark:bg-opacity-0
      `}>
			<div className='container mx-auto flex justify-between items-center h-12'>
				{/* Left section: Sidebar toggle and App Name */}
				<div className='flex items-center space-x-4'>
					<button
						onClick={onToggleSidebar}
						className={`p-2 rounded-md ${
							theme === 'dark' ? 'hover-bg-black' : 'hover-bg-white'
						}`}
						aria-label='Toggle Sidebar'>
						<FontAwesomeIcon
							icon={faBars}
							className='h-6 w-6'
						/>
					</button>
					<h1
						className={`text-3xl font-bold hidden sm:block ${textGradientTheme}`}>
						{theme === 'dark' ? (
							<FontAwesomeIcon
								icon={faSatellite}
								className='h-6 w-6'
							/>
						) : (
							<FontAwesomeIcon
								icon={faMeteor}
								className='h-6 w-6'
							/>
						)}
						Cosmic Planner
					</h1>
				</div>

				{/* Right section: Notifications, Theme toggle, Profile dropdown */}
				<div className='relative flex items-center space-x-4 sm:space-x-6'>
					{/* Notification Icon */}
					<button
						className={`p-2 rounded-md ${
							theme === 'dark' ? 'hover-bg-black' : 'hover-bg-white'
						}`}
						aria-label='Notifications'>
						<FontAwesomeIcon
							icon={faBell}
							className='h-6 w-6'
						/>
					</button>

					{/* Theme Toggle Button */}
					<label
						htmlFor='theme-toggle'
						className='relative inline-flex items-center cursor-pointer'>
						<input
							type='checkbox'
							id='theme-toggle'
							className='sr-only'
							checked={theme === 'dark'}
							onChange={toggleTheme}
						/>
						{/* Đường ray của nút gạt - giờ chứa cả icon */}
						<div
							className={`w-16 h-8 rounded-full relative transition-colors duration-300 flex items-center justify-between px-1.5 // px để có khoảng cách cho icon
                                ${
																	theme === 'dark'
																		? 'bg-gradient-to-r from-purple-700 to-indigo-800'
																		: 'bg-gray-300'
																}
                                border border-gray-400 dark:border-gray-600
                            `}>
							{/* Icon Mặt trăng (chế độ sáng) */}
							<FontAwesomeIcon
								icon={faMoon}
								className={`h-5 w-5 transition-all duration-300 ${
									theme === 'light'
										? 'text-indigo-700' // Màu sáng khi ở chế độ sáng
										: 'text-gray-400' // Mờ đi khi ở chế độ tối
								}`}
							/>
							{/* Icon Mặt trời (chế độ tối) */}
							<FontAwesomeIcon
								icon={faSun}
								className={`h-5 w-5 transition-all duration-300 ${
									theme === 'dark'
										? 'text-yellow-300' // Màu sáng khi ở chế độ tối
										: 'text-gray-400' // Mờ đi khi ở chế độ sáng
								}`}
							/>
							{/* Nút tròn di chuyển */}
							<div
								className={`absolute w-6 h-6 rounded-full transition-all duration-300 shadow-md
                                ${
																	theme === 'dark'
																		? 'translate-x-[calc(100%+0.5rem)] bg-yellow-300' // Di chuyển sang phải + 0.5rem (8px) padding
																		: 'translate-x-0 bg-gray-50' // Vị trí ban đầu
																}
                                top-1 left-1 // Căn giữa với đường ray
                            `}></div>
						</div>
					</label>

					{/* Profile Dropdown */}
					<div className='relative'>
						<button
							onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
							className={`p-2 rounded-md ${
								theme === 'dark' ? 'hover-bg-black' : 'hover-bg-white'
							} 
                         focus:outline-none focus:ring-2 focus:ring-purple-500`}
							aria-label='Settings'>
							<FontAwesomeIcon
								icon={faGear}
								className='h-6 w-6'
							/>
						</button>

						{isProfileMenuOpen && (
							<div
								className='absolute right-5 mt-2 w-40 md:w-50 bg-white dark:bg-gray-800 rounded-2xl shadow-xl
                overflow-hidden transform transition-all duration-300 ease-out
                scale-100 opacity-100 z-50
                dark:border dark:border-gray-700 items-center'
								onClick={() => setIsProfileMenuOpen(false)}>
								<ul className='py-2'>
									{profile.menuItems.map((item, index) => (
										<li key={index}>
											<a
												href='#'
												className='flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700
                                   transition-colors duration-200 group'>
												<span className='mr-3 text-purple-500 group-hover:text-purple-700 dark:group-hover:text-purple-300'>
													<FontAwesomeIcon
														icon={item.icon}
														className='h-5 w-5'
													/>
												</span>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
