/** @format */

// src/components/galaxymanagement/views/GalaxyTableView.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { Galaxy } from '../../../types/galaxy';
import { GenericTable } from '../../../components/common/views/GenericTable'; // Import generic table

interface GalaxyTableViewProps {
	galaxies: Galaxy[];
	theme: string;
	onEdit: (
		galaxyId: string,
		updatedFields: Partial<Galaxy>,
		itemName?: string
	) => void;
	onDelete: (galaxyId: string, itemName?: string) => void;
}

export const GalaxyTableView: React.FC<GalaxyTableViewProps> = ({
	galaxies,
	theme,
	onEdit,
	onDelete,
}) => {
	const columns = [
		{ header: 'ID', key: 'id' },
		{ header: 'Name', key: 'name' },
		{ header: 'Type', key: 'type' },
		{ header: 'Constellation', key: 'constellation' },
		{ header: 'Distance', key: 'distance' },
		{ header: 'Stars', key: 'stars' },
		{ header: 'Discovered', key: 'discovered' },
	];

	const renderRowActions = (galaxy: Galaxy) => (
		<div className='flex items-center space-x-3'>
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
	);

	return (
		<GenericTable
			data={galaxies}
			columns={columns}
			renderRowActions={renderRowActions}
			theme={theme}
			emptyMessage='No galaxies found.'
		/>
	);
};
