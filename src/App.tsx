/** @format */

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import MainContentLayout from './layouts/MainContent'; // Import MainContentLayout
import { useTheme } from './hooks/useTheme';
import DashboardPage from './pages/DashboardPage';
import TablePage from './pages/TablePage';

const App: React.FC = () => {
	const { theme } = useTheme();
	return (
		<Router>
			<div
				className={`min-h-screen flex flex-col 
          ${
						theme === 'dark' ? 'text-gray-50' : 'text-gray-800'
					} // Điều chỉnh màu chữ tổng thể
        `}>
				<AppLayout>
					<Routes>
						{/* Trang Dashboard (mặc định) */}
						<Route
							path='/dashboard'
							element={
								<MainContentLayout title='Bảng Điều Khiển Chính'>
									<DashboardPage />
								</MainContentLayout>
							}
						/>

						{/* Trang Table View */}
						<Route
							path='/tables' // Đường dẫn khi truy cập trang Table
							element={
								<MainContentLayout title='Quản Lý Thiên Thể'>
									<TablePage /> {/* Render TablePage component */}
								</MainContentLayout>
							}
						/>
					</Routes>
				</AppLayout>
			</div>
		</Router>
	);
};

export default App;
