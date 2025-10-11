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
				className={`flex-1 pt-20 pb-4 px-4 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'ml-64 lg:ml-64' : 'ml-0 lg:ml-45'}`}>
				<div className='container mx-auto h-full flex flex-col'>
					{/* User Status Bar is now directly in main, above the MainContentLayout */}
					<UserStatusBar />

					{/* Main Content Layout wraps the actual page content (children) */}
					{children}
				</div>
			</main>
			<Footer />
			{/* Footer giờ nằm trong main */}
		</div>
	);
};

export default AppLayout;
