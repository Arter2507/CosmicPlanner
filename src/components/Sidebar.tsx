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
		{ icon: faCalendarAlt, label: 'Planner', link: '/planner' },
		{ icon: faClipboardList, label: 'To-Do List', link: '/todo' },
		{ icon: faTasks, label: 'Tasks', link: '/tasks' },
		{ icon: faWallet, label: 'Expense Plan', link: '/expense' },
		{ icon: faChartLine, label: 'Habit Tracker', link: '/habit-tracker' },
		{ icon: faBookOpen, label: 'Study Zone', link: '/study-zone' },
		{ icon: faJournalWhills, label: 'Daily Journal', link: '/journal' },
		{ icon: faHeart, label: 'Dating', link: '/dating' },
		{ icon: faStickyNote, label: 'Notes', link: '/notes' },
	];

	const dividerColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

	// Điều chỉnh giá trị top, left và height cho sidebar để cách header và bo góc toàn bộ
	const sidebarTopOffset = 'top-[96px]'; // Khoảng cách từ top
	const sidebarHorizontalOffset = 'left-3'; // Khoảng cách từ cạnh trái
	const sidebarHeightCalc = 'h-[calc(100vh-96px-80px-16px)]'; // Điều chỉnh chiều cao: 96px header, 56px footer, 16px bottom-margin/offset
	const sidebarWidthOpen = 'w-60'; // Giảm chiều rộng một chút để có khoảng trống 2 bên
	const sidebarWidthClosed = 'w-40'; // Chiều rộng khi đóng
	return (
		<>
			{/* Overlay backdrop khi sidebar mở trên mobile */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
					onClick={toggleSidebar}></div>
			)}

			<aside
				className={`fixed ${sidebarHorizontalOffset} ${sidebarTopOffset} ${sidebarHeightCalc}
          transform transition-all duration-300 ease-in-out
          ${
						isOpen
							? `translate-x-0 ${sidebarWidthOpen}`
							: `-translate-x-full ${sidebarWidthClosed} lg:translate-x-0 lg:${sidebarWidthClosed}`
					}
          py-6 px-2 /* Added some horizontal padding */
          bg-opacity-0 backdrop-filter backdrop-blur-md dark:bg-opacity-0
          rounded-2xl border border-opacity-10 dark:border-white
          flex flex-col
        `}>
				<div className='flex flex-col h-full'>
					<div className={`p-4 ${isOpen ? '' : 'hidden lg:block'}`}>
						{/* Close button for mobile */}
						{isOpen && (
							<button
								onClick={toggleSidebar}
								className='absolute top-4 right-4 p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200
                           dark:text-gray-200 text-gray-800 lg:hidden'
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
										className={`flex items-center p-3 rounded-lg mx-3 group
                      ${
												theme === 'dark'
													? 'sidebar-hover-light'
													: 'hover-bg-black'
											}
                      ${
												theme === 'dark' ? 'text-black' : 'text-white'
											} transition-all duration-200
                      ${isOpen ? 'justify-start' : 'justify-center'}
                        w-full
                    `}>
										<FontAwesomeIcon
											icon={item.icon}
											className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`}
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
                        ${theme === 'dark' ? 'text-black' : 'text-white'}
                        font-bold
                      `}>
											{item.label}
										</span>
									</a>
									{/* Divider */}
									{isOpen && ( // Chỉ hiển thị divider khi sidebar mở
										<div className={`mx-2 mb-4 border-t ${dividerColor}`}></div>
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
