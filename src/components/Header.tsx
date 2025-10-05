/** @format */

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faBell,
	faSun,
	faMoon,
	faChevronDown,
	faChartBar,
	faCog,
	faGlobe,
	faComments,
	faSignOutAlt,
	faUser,
	faUserAstronaut,
	faSatellite,
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

	return (
		<header
			className={`fixed top-0 left-0 w-full z-40 p-4 transition-colors duration-300
        // Thay đổi ở đây: Bỏ các class bg-space-gradient và dark:bg-gradient-to-r
        // Để nó chỉ có hiệu ứng blur, không có màu nền cứng
        bg-opacity-0 backdrop-filter backdrop-blur-md // bg-opacity-0 để làm nền trong suốt
        dark:bg-opacity-0 // Đảm bảo trong suốt cả ở chế độ tối
      `}>
			<div className='container mx-auto flex justify-between items-center h-12'>
				{/* Left section: Sidebar toggle and App Name */}
				<div className='flex items-center space-x-4'>
					<button
						onClick={onToggleSidebar}
						className={`p-2 rounded-md ${
							theme === 'dark' ? 'hover-bg-white' : 'hover-bg-black'
						} text-gray-800 dark:text-gray-200`}
						aria-label='Toggle Sidebar'>
						<FontAwesomeIcon
							icon={faBars}
							className='h-6 w-6'
						/>
					</button>
					<h1
						className={`text-3xl font-bold hidden sm:block ${
							theme === 'dark'
								? 'animate-gradient-text-dark'
								: 'animate-gradient-text-light'
						}`}>
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
							theme === 'dark' ? 'hover-bg-white' : 'hover-bg-black'
						} text-gray-800 dark:text-gray-200`}
						aria-label='Notifications'>
						<FontAwesomeIcon
							icon={faBell}
							className='h-6 w-6'
						/>
					</button>

					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className={`p-2 rounded-md ${
							theme === 'dark' ? 'hover-bg-white' : 'hover-bg-black'
						} text-gray-800 dark:text-gray-200`}
						aria-label='Toggle Theme'>
						{theme === 'dark' ? (
							<FontAwesomeIcon
								icon={faSun}
								className='h-6 w-6'
							/>
						) : (
							<FontAwesomeIcon
								icon={faMoon}
								className='h-6 w-6'
							/>
						)}
					</button>

					{/* Profile Dropdown */}
					<div className='relative'>
						<button
							onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
							className={`flex items-center space-x-2 p-1 rounded-full ${
								theme === 'dark' ? 'hover-bg-white' : 'hover-bg-black'
							} 
                         focus:outline-none focus:ring-2 focus:ring-purple-500`}>
							<img
								src={profile.avatar}
								alt='User Avatar'
								className='h-9 w-9 rounded-full object-cover border-2 border-purple-400'
							/>
							<span className='font-medium text-gray-800 dark:text-gray-50 hidden md:block'>
								{profile.name}
							</span>
							<FontAwesomeIcon
								icon={faChevronDown}
								className='h-5 w-5 text-gray-700 dark:text-gray-200 hidden md:block'
							/>
						</button>

						{isProfileMenuOpen && (
							<div
								className='absolute right-0 mt-2 w-64 md:w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-xl
                           overflow-hidden transform transition-all duration-300 ease-out
                           scale-100 opacity-100 z-50
                           dark:border dark:border-gray-700'
								onClick={() => setIsProfileMenuOpen(false)}>
								<div className='p-4 border-b border-gray-200 dark:border-gray-700'>
									<div className='flex items-center space-x-3 mb-3'>
										<img
											src={profile.avatar}
											alt='User Avatar'
											className='h-12 w-12 rounded-full object-cover border-2 border-purple-400'
										/>
										<div>
											<p className='font-semibold text-lg text-gray-900 dark:text-gray-50'>
												{profile.name}
											</p>
											<p className='text-sm text-gray-500 dark:text-gray-400'>
												Xem hồ sơ
											</p>
										</div>
									</div>
									<div className='flex justify-around text-center mt-2'>
										{profile.stats.map((stat, index) => (
											<div
												key={index}
												className='flex flex-col items-center'>
												<span className='font-bold text-purple-600 dark:text-purple-400'>
													{stat.value}
												</span>
												<span className='text-xs text-gray-600 dark:text-gray-400'>
													{stat.label}
												</span>
											</div>
										))}
									</div>
								</div>
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
