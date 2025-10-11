/** @format */

// src/components/galaxymanagement/views/GalaxyBoardView.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { Galaxy } from '../../../types/galaxy';
import { GenericBoard } from '../../../components/common/views/GenericBoard'; // Import generic board

interface GalaxyBoardViewProps {
	galaxies: Galaxy[];
	theme: string;
	onEdit: (
		galaxyId: string,
		updatedFields: Partial<Galaxy>,
		itemName?: string
	) => void;
	onDelete: (galaxyId: string, itemName?: string) => void;
}

export const GalaxyBoardView: React.FC<GalaxyBoardViewProps> = ({
	galaxies,
	theme,
	onEdit,
	onDelete,
}) => {
	const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';

	const getCardColorClass = (type: string) => {
		switch (type) {
			case 'Spiral':
				return 'bg-blue-500/20 border-blue-500 text-blue-200';
			case 'Elliptical':
				return 'bg-green-500/20 border-green-500 text-green-200';
			case 'Irregular':
				return 'bg-red-500/20 border-red-500 text-red-200';
			default:
				return 'bg-gray-500/20 border-gray-500 text-gray-200';
		}
	};

	const renderGalaxyCard = (galaxy: Galaxy) => (
		<div
			key={galaxy.id}
			className={`relative rounded-xl p-5 shadow-lg ${
				theme === 'dark'
					? 'bg-gray-800 border border-gray-700'
					: 'bg-white border border-gray-200'
			} transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl`}>
			<div
				className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getCardColorClass(
					galaxy.type
				)}`}>
				{galaxy.type}
			</div>
			<h3 className={`text-xl font-semibold mb-2 ${textClass}`}>
				{galaxy.name}
			</h3>
			<p className={`text-sm ${textClass}`}>
				<span className='font-medium'>ID:</span> {galaxy.id}
			</p>
			<p className={`text-sm ${textClass}`}>
				<span className='font-medium'>Constellation:</span>{' '}
				{galaxy.constellation}
			</p>
			<p className={`text-sm ${textClass}`}>
				<span className='font-medium'>Distance:</span> {galaxy.distance}
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
	);

	return (
		<GenericBoard
			data={galaxies}
			renderCard={renderGalaxyCard}
			emptyMessage='No galaxies found.'
			gridClasses='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
		/>
	);
};
