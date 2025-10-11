/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faCalendarAlt,
	faTasks,
	faClipboardList,
	faWallet,
	faChartLine,
	faBookOpen,
	faJournalWhills,
	faHeart,
	faStickyNote,
	faTimes, // Icon đóng sidebar
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from '../hooks/useTheme';

// Định nghĩa kiểu cho một mục navigation
interface NavItem {
	icon: IconDefinition; // Font Awesome icon object
	label: string;
	link: string;
}

// Định nghĩa props cho Sidebar
interface SidebarProps {
	isOpen: boolean; // Trạng thái đóng/mở của sidebar
	toggleSidebar: () => void; // Hàm để đóng/mở sidebar
}

/**
 * Sidebar component chứa các liên kết điều hướng và thông tin chào mừng.
 * Có thể đóng/mở, hiển thị icon hoặc text tùy trạng thái.
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
	const { theme } = useTheme(); // Lấy theme để điều chỉnh màu chữ và nền

	const navItems: NavItem[] = [
		{ icon: faHome, label: 'Dashboard', link: '/dashboard' },
		{ icon: faCalendarAlt, label: 'Planner', link: '/management/galaxies' },
		{ icon: faClipboardList, label: 'To-Do List', link: '/tables' },
		{ icon: faTasks, label: 'Tasks', link: '/tasks' },
		{ icon: faWallet, label: 'Expense Plan', link: '/expense' },
		{ icon: faChartLine, label: 'Habit Tracker', link: '/habit-tracker' },
		{ icon: faBookOpen, label: 'Study Zone', link: '/study-zone' },
		{ icon: faJournalWhills, label: 'Daily Journal', link: '/journal' },
		{ icon: faHeart, label: 'Dating', link: '/dating' },
		{ icon: faStickyNote, label: 'Notes', link: '/notes' },
	];

	const dividerColor = theme === 'dark' ? 'border-gray-300' : 'border-gray-800';

	const textSidebarTheme =
		theme === 'dark' ? 'sidebar-text-dark' : 'sidebar-text-light';

	// Điều chỉnh giá trị top, left và height cho sidebar để cách header và bo góc toàn bộ
	const sidebarTopOffset = 'top-[96px]';
	const sidebarBottomOffset = 'bottom-[52px]';
	const sidebarHorizontalOffset = 'left-3';
	const sidebarHeightCalc = 'h-[calc(100vh-90px-47px-25px)]';
	const sidebarWidthOpen = 'w-60';
	const sidebarWidthClosed = 'w-40';
	return (
		<>
			{/* Overlay backdrop khi sidebar mở trên mobile */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-opacity-0 backdrop-filter backdrop-blur-sm dark:bg-opacity-0 z-20 lg:hidden'
					onClick={toggleSidebar}></div>
			)}

			<aside
				className={`fixed ${sidebarHorizontalOffset} ${sidebarTopOffset} ${sidebarHeightCalc} ${sidebarBottomOffset}
          transform transition-all duration-300 ease-in-out
          ${
						isOpen
							? `translate-x-0 ${sidebarWidthOpen}`
							: `-translate-x-full ${sidebarWidthClosed} lg:translate-x-0 lg:${sidebarWidthClosed}`
					}
          py-6 px-2 dark:bg-opacity-0
          ${
						theme === 'dark'
							? 'dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-800'
							: 'bg-space-gradient backdrop-filter backdrop-blur-md'
					}
					rounded-2xl border border-opacity-10 dark:border-white
          flex flex-col z-50
        `}>
				<div className='flex flex-col h-full'>
					{/* Phần HEADER của sidebar với nút đóng và có thể là logo/title */}
					<div
						className={`relative flex items-center justify-between px-5 mb-4 ${
							isOpen ? '' : 'hidden lg:block'
						}`}>
						{/* Đây là nơi bạn có thể đặt Logo hoặc tiêu đề sidebar nếu muốn */}
						{isOpen && (
							<span className={`${textSidebarTheme} font-bold text-xl`}>
								Menu
							</span> // Ví dụ: thêm một tiêu đề
						)}
						{/* Nút đóng */}
						{isOpen && (
							<button
								onClick={toggleSidebar}
								className={`p-2 rounded-md ${
									theme === 'dark' ? 'hover-bg-black' : 'hover-bg-white'
								} transition-all duration-200
                    lg:hidden`}
								aria-label='Close Sidebar'>
								<FontAwesomeIcon
									icon={faTimes}
									className='h-6 w-6'
								/>
							</button>
						)}
					</div>

					{/* Navigation links */}
					<nav className='flex-grow overflow-y-auto custom-scrollbar px-5'>
						<ul className='space-y-2'>
							{navItems.map((item, index) => (
								<li key={index}>
									<a
										href={item.link}
										className={`flex items-center p-3 rounded-lg mx-1 group
                      ${
												theme === 'dark'
													? 'sidebar-hover-light'
													: 'sidebar-hover-dark'
											}
											whitespace-nowrap transition-[width,opacity] duration-300 ease-in-out
                      overflow-hidden
                      ${textSidebarTheme} transition-all duration-200
                      ${
												isOpen ? 'flex-1 opacity-100 visible' : 'justify-center' // Khi đóng, ẩn span hoàn toàn
											}
                      w-full
                    `}>
										<FontAwesomeIcon
											icon={item.icon}
											className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`}
										/>
										<span
											className={`
                        ${
													isOpen
														? 'flex-1 opacity-100 visible'
														: 'w-0 opacity-0 invisible'
												}
                        whitespace-nowrap transition-[width,opacity] duration-300 ease-in-out
                        overflow-hidden
                        ${textSidebarTheme}
                        font-bold
                      `}>
											{item.label}
										</span>
									</a>
									{/* Divider */}
									{isOpen &&
										index < navItems.length - 1 && ( // Only show divider when sidebar open and not after the last item
											<div
												className={`mx-2 my-3 border-t ${dividerColor}`}></div>
										)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
