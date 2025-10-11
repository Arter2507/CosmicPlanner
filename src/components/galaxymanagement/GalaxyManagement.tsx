/** @format */

// src/pages/GalaxyManagementPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
	faGlobeAmericas,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import MainContentLayout from '../../layouts/MainContentLayout'; // Assuming named export now
import { useTheme } from '../../hooks/useTheme'; // Assuming you have a ThemeContext

// Import the separated view components
import { TabView } from '../common/views/TabView';
import { GalaxyTableView } from './views/GalaxyTableView';
import { GalaxyBoardView } from './views/GalaxyBoardView';
import { GalaxyGalleryView } from './views/GalaxyGalleryView';
import { Pagination } from '../common/Pagination';

// Import custom hook
import { useCrudOperations } from '../../hooks/useCrudOperations';

// --- Data types and Dummy Data ---
import type { Galaxy } from '../../types/galaxy';
const galaxyStatuses = ['Active', 'Archived', 'Pending'] as const;

const dummyGalaxies: Galaxy[] = Array.from({ length: 50 }, (_, i) => ({
	id: `G${(i + 1).toString().padStart(3, '0')}`,
	name: `Galaxy ${String.fromCharCode(65 + (i % 26))}${
		Math.floor(i / 26) || ''
	}`,
	type: ['Spiral', 'Elliptical', 'Irregular'][i % 3],
	constellation: ['Andromeda', 'Ursa Major', 'Hydra', 'Virgo'][i % 4],
	distance: `${(Math.random() * 10 + 1).toFixed(1)} Mly`,
	stars: `${(Math.random() * 500 + 50).toFixed(0)} Billion`,
	discovered: `${1600 + i * 5}`,
	imageUrl: `https://picsum.photos/seed/${i}/400/250`, // Dummy image
	status: galaxyStatuses[i % 3],
	dateCreated: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
}));

// --- Component ---
export const GalaxyManagementPage: React.FC = () => {
	const { theme } = useTheme();
	const [searchTerm, setSearchTerm] = useState('');
	const [activeView, setActiveView] = useState('table');
	const [currentPage, setCurrentPage] = useState(1);

	// Sử dụng custom hook để quản lý dữ liệu và các thao tác CRUD
	const {
		items: galaxiesData,
		handleAddItem, // Hiện tại không dùng, nhưng có sẵn
		handleEditItem: handleEditGalaxy,
		handleDeleteItem: handleDeleteGalaxy,
		// setItems, // Có thể dùng nếu cần cập nhật toàn bộ danh sách
	} = useCrudOperations<Galaxy>(dummyGalaxies);

	// Определяем itemsPerPage dựa trên activeView
	const itemsPerPage = useMemo(() => {
		switch (activeView) {
			case 'board':
				return 9;
			case 'gallery':
				return 8;
			case 'table':
			default:
				return 7;
		}
	}, [activeView]); // itemsPerPage will change when activeView changes

	// Reset to page 1 when changing activeView or searchTerm.
	useEffect(() => {
		setCurrentPage(1);
	}, [activeView, searchTerm]);

	// Filter and paginate data
	const filteredGalaxies = dummyGalaxies.filter((galaxy) =>
		Object.values(galaxy).some((value) =>
			String(value).toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	const totalPages = Math.ceil(filteredGalaxies.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentGalaxies = filteredGalaxies.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	const handlePageChange = (pageNumber: number) => {
		if (pageNumber > 0 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	const breadcrumbs = [
		{ label: 'Home', link: '/' },
		{ label: 'Management', link: '/management' },
		{ label: 'Galaxies', link: '/management/galaxies' },
	];

	const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

	const inputClass =
		theme === 'dark'
			? 'bg-gray-700 text-white border-gray-600'
			: 'bg-gray-100 text-gray-900 border-gray-300';
	const buttonClass =
		theme === 'dark'
			? 'bg-purple-700 hover:bg-purple-800 text-white'
			: 'bg-purple-500 hover:bg-purple-600 text-white';

	return (
		<MainContentLayout>
			<div className='p-4'>
				{/* Breadcrumbs and TabView */}
				<div className='flex justify-between items-center mb-4'>
					<nav className='flex text-sm font-medium'>
						<ol className='list-none p-0 inline-flex'>
							{breadcrumbs.map((crumb, index) => (
								<li
									key={crumb.label}
									className='flex items-center'>
									<a
										href={crumb.link}
										className={`${
											index === breadcrumbs.length - 1
												? 'text-purple-500 dark:text-purple-400'
												: 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300'
										} transition-colors duration-200`}>
										{crumb.label}
									</a>
									{index < breadcrumbs.length - 1 && (
										<span className='mx-2 text-gray-400'>/</span>
									)}
								</li>
							))}
						</ol>
					</nav>
					<TabView
						activeView={activeView}
						onViewChange={setActiveView}
						theme={theme}
					/>
				</div>

				<h2
					className={`text-3xl font-bold mb-6 ${textClass} flex items-center`}>
					<FontAwesomeIcon
						icon={faGlobeAmericas}
						className='mr-3 text-purple-500'
					/>
					Galaxy Management
				</h2>

				{/* Search Bar */}
				<div className='mb-6 flex items-center space-x-3'>
					<div className='relative flex-grow'>
						<input
							type='text'
							placeholder='Search galaxies...'
							className={`w-full p-3 pl-10 pr-4 rounded-full border ${inputClass} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200`}
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setCurrentPage(1); // Reset to first page on search
							}}
						/>
						<FontAwesomeIcon
							icon={faSearch}
							className={`absolute left-3 top-1/2 -translate-y-1/2 ${
								theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
							}`}
						/>
					</div>
					<button
						className={`${buttonClass} px-5 py-3 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105`}>
						<FontAwesomeIcon icon={faStar} />
						<span>Add Galaxy</span>
					</button>
				</div>

				{/* Conditional Rendering of Views */}
				{activeView === 'table' && (
					<GalaxyTableView
						galaxies={currentGalaxies}
						theme={theme}
						onEdit={handleEditGalaxy}
						onDelete={handleDeleteGalaxy}
					/>
				)}

				{activeView === 'board' && (
					<GalaxyBoardView
						galaxies={currentGalaxies}
						theme={theme}
						onEdit={handleEditGalaxy}
						onDelete={handleDeleteGalaxy}
					/>
				)}

				{activeView === 'gallery' && (
					<GalaxyGalleryView
						galaxies={currentGalaxies}
						theme={theme}
						onEdit={handleEditGalaxy}
						onDelete={handleDeleteGalaxy}
					/>
				)}

				{/* Pagination Component */}
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					totalItems={filteredGalaxies.length} // Tổng số item đã lọc
					itemsPerPage={itemsPerPage}
					onPageChange={handlePageChange}
					theme={theme}
				/>
			</div>
		</MainContentLayout>
	);
};
