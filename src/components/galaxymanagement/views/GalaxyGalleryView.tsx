/** @format */

// src/components/galaxymanagement/views/GalaxyGalleryView.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { Galaxy } from '../../../types/galaxy';
import { GenericGallery } from '../../../components/common/views/GenericGallery'; // Import generic gallery

interface GalaxyGalleryViewProps {
	galaxies: Galaxy[];
	theme: string;
	onEdit: (
		galaxyId: string,
		updatedFields: Partial<Galaxy>,
		itemName?: string
	) => void;
	onDelete: (galaxyId: string, itemName?: string) => void;
}

export const GalaxyGalleryView: React.FC<GalaxyGalleryViewProps> = ({
	galaxies,
	theme,
	onEdit,
	onDelete,
}) => {
	const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

	const getStatusColorClass = (status: Galaxy['status']) => {
		switch (status) {
			case 'Active':
				return 'bg-green-500';
			case 'Archived':
				return 'bg-gray-500';
			case 'Pending':
				return 'bg-yellow-500';
			default:
				return 'bg-gray-500';
		}
	};

	const getTypeTagColorClass = (type: string) => {
		switch (type) {
			case 'Spiral':
				return 'bg-blue-600';
			case 'Elliptical':
			case 'Irregular': // Added Irregular for a different color in gallery, though it's green in board
				return 'bg-green-600';
			default:
				return 'bg-gray-600';
		}
	};

	const renderGalaxyGalleryItem = (galaxy: Galaxy) => (
		<div
			key={galaxy.id}
			className={`rounded-xl shadow-lg overflow-hidden ${
				theme === 'dark'
					? 'bg-gray-800 border border-gray-700'
					: 'bg-white border border-gray-200'
			} transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl`}>
			<div className='relative h-48 w-full overflow-hidden'>
				<img
					src={galaxy.imageUrl}
					alt={galaxy.name}
					className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
				/>
				<span
					className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeTagColorClass(
						galaxy.type
					)}`}>
					{galaxy.type}
				</span>
				<span
					className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColorClass(
						galaxy.status
					)}`}>
					{galaxy.status}
				</span>
			</div>
			<div className='p-4'>
				<h3 className={`text-lg font-semibold mb-1 ${textClass}`}>
					{galaxy.name}
				</h3>
				<p className={`text-sm ${textClass} opacity-80`}>
					Discovered: {galaxy.discovered}
				</p>
				<p className={`text-sm ${textClass} opacity-80`}>
					Created: {galaxy.dateCreated}
				</p>
				<div className='flex justify-end items-center space-x-3 mt-4'>
					<button
						onClick={() => onEdit(galaxy.id, {}, galaxy.name)}
						className='text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-150'
						aria-label='Edit'>
						<FontAwesomeIcon icon={faCogs} />
					</button>
					<button
						onClick={() => onDelete(galaxy.id, galaxy.name)}
						className='text-red-500 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-150'
						aria-label='Delete'>
						<FontAwesomeIcon icon={faTrash} />
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<GenericGallery
			data={galaxies}
			renderItem={renderGalaxyGalleryItem}
			emptyMessage='No galaxies found.'
			gridClasses='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
		/>
	);
};
