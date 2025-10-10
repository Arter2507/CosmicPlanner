/** @format */

import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import UserStatusBar from '../components/UserStatusBar';
import MainContentLayout from './MainContent';

interface AppLayoutProps {
	children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// Định nghĩa padding-left cho main dựa trên trạng thái sidebar
	// Ẩn thanh cuộn của sidebar khi đóng và chuyển đổi
	const mainPaddingLeft = isSidebarOpen ? 'lg:pl-[272px]' : 'lg:pl-28'; // 272px = 240px (sidebar width) + 32px (margin/gap) // 28px = 24px (sidebar padding) + 4px (gap)

	return (
		<div className='flex flex-col min-h-screen relative'>
			<Header onToggleSidebar={toggleSidebar} />
			{/* Sidebar */}
			<Sidebar
				isOpen={isSidebarOpen}
				toggleSidebar={toggleSidebar}
			/>
			{/* Main content area */}
			<main
				className={`flex-grow pt-20 px-4 transition-all duration-300 ease-in-out
          ${mainPaddingLeft}
          min-h-[calc(100vh - 80px - 60px)] // 100vh - HeaderHeight - FooterHeight
          relative z-0
          overflow-y-auto custom-scrollbar // Thêm thanh cuộn tổng thể cho main
          `}>
				{' '}
				{/* pt-20 bù đắp cho chiều cao của Header */}
				<UserStatusBar />
				<div className='container mx-auto pb-8'>
					<MainContentLayout>{children}</MainContentLayout>
				</div>
			</main>
			<Footer />
			{/* Footer giờ nằm trong main */}
		</div>
	);
};

export default AppLayout;
