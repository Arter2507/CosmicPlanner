/** @format */

import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserStatusBar from './UserStatusBar';

interface AppLayoutProps {
	children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// Định nghĩa padding-left cho main dựa trên trạng thái sidebar
	// Ẩn thanh cuộn của sidebar khi đóng và chuyển đổi
	// const mainPaddingLeft = isSidebarOpen ? 'lg:pl-[272px]' : 'lg:pl-28'; // 272px = 240px (sidebar width) + 32px (margin/gap) // 28px = 24px (sidebar padding) + 4px (gap)

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
				className={`flex-grow pt-20 pb-24 px-4 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'ml-64 lg:ml-64' : 'ml-0 lg:ml-20'}`}>
				{' '}
				<UserStatusBar />
				{/* pt-20 để bù vào chiều cao của Header */}
				<div className='container mx-auto h-full flex flex-col justify-between'>
					{children}{' '}
					{/* Đây là nơi nội dung của các trang con sẽ được hiển thị */}
				</div>
			</main>
			<Footer />
			{/* Footer giờ nằm trong main */}
		</div>
	);
};

export default AppLayout;
