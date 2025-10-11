/** @format */

// src/components/common/GenericBoard.tsx
import React from 'react';

interface GenericBoardProps<T> {
	data: T[];
	renderCard: (item: T) => React.ReactNode;
	emptyMessage?: string;
	gridClasses?: string; // e.g., "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
}

export const GenericBoard = <T extends { id?: string | number }>(
	props: GenericBoardProps<T>
) => {
	const {
		data,
		renderCard,
		emptyMessage = 'No data found.',
		gridClasses = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
	} = props;

	if (data.length === 0) {
		return (
			<div className='text-center py-8 text-gray-500 dark:text-gray-400'>
				{emptyMessage}
			</div>
		);
	}

	return <div className={gridClasses}>{data.map(renderCard)}</div>;
};
