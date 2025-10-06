/** @format */

import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import UserStatusBar from '../components/UserStatusBar';

interface AppLayoutProps {
	children: ReactNode;
}

/**
 * AppLayout component định nghĩa bố cục tổng thể của ứng dụng.
 * Bao gồm: Header, Sidebar (tùy chọn), nội dung chính và Footer.
 */
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

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
			<Footer /> {/* Footer giờ nằm trong main */}
		</div>
	);
};

export default AppLayout;
