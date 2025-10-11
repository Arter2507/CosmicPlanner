/** @format */

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{
	/*--- Layout --- */
}
import AppLayout from './layouts/AppLayout';
import MainContentLayout from './layouts/MainContent'; // Import MainContentLayout
{
	/*--- Theme --- */
}
import { useTheme } from './hooks/useTheme';
{
	/*--- Pages --- */
}
import DashboardPage from './pages/DashboardPage';
import TablePage from './pages/TablePage';
import { GalaxyManagementPage } from './components/galaxymanagement/GalaxyManagement';

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
							path='/'
							element={
								<MainContentLayout title='Bảng Điều Khiển Chính'>
									<DashboardPage />
								</MainContentLayout>
							}
						/>
						<Route
							path='/dashboard'
							element={
								<MainContentLayout title='Bảng Điều Khiển Chính'>
									<DashboardPage />
								</MainContentLayout>
							}
						/>

						{/* Trang Galaxy Management */}
						<Route
							path='/management/galaxies'
							element={<GalaxyManagementPage />}
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
						{/* Add other routes here */}
					</Routes>
				</AppLayout>
			</div>
		</Router>
	);
};

export default App;
