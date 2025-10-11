/** @format */

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{
	/*--- Layout --- */
}
import AppLayout from './layouts/AppLayout';
{
	/*--- Theme --- */
}
import { useTheme } from './hooks/useTheme';
{
	/*--- Pages --- */
}
import DashboardPage from './pages/DashboardPage';
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
						<Route
							path='/'
							element={<DashboardPage />}
						/>
						<Route
							path='/management/galaxies'
							element={<GalaxyManagementPage />}
						/>
						{/* Add other routes here */}
					</Routes>
				</AppLayout>
			</div>
		</Router>
	);
};

export default App;
