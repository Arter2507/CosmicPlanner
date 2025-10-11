/** @format */

// src/components/common/GenericGallery.tsx
import React from 'react';

interface GenericGalleryProps<T> {
	data: T[];
	renderItem: (item: T) => React.ReactNode;
	emptyMessage?: string;
	gridClasses?: string; // e.g., "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
}

export const GenericGallery = <T extends { id?: string | number }>(
	props: GenericGalleryProps<T>
) => {
	const {
		data,
		renderItem,
		emptyMessage = 'No data found.',
		gridClasses = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
	} = props;

	if (data.length === 0) {
		return (
			<div className='text-center py-8 text-gray-500 dark:text-gray-400'>
				{emptyMessage}
			</div>
		);
	}

	return <div className={gridClasses}>{data.map(renderItem)}</div>;
};
