/** @format */

// src/components/common/GenericTable.tsx
import React from 'react';

interface GenericTableProps<T> {
	data: T[];
	columns: { header: string; key: string | ((item: T) => React.ReactNode) }[];
	renderRowActions?: (item: T) => React.ReactNode; // Optional actions for each row
	theme: string;
	emptyMessage?: string;
}

export const GenericTable = <T extends { id?: string | number }>(
	props: GenericTableProps<T>
) => {
	const {
		data,
		columns,
		renderRowActions,
		theme,
		emptyMessage = 'No data found.',
	} = props;

	const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
	const headerClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-500';
	const rowBgClassEven = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
	const rowBgClassOdd = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
	const rowHoverClass =
		theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
	const divideClass = theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200';

	return (
		<div
			className={`overflow-x-auto rounded-xl shadow-lg border border-opacity-10 ${
				theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
			}`}>
			<table className={`min-w-full divide-y ${divideClass}`}>
				<thead className='bg-gray-50 dark:bg-gray-700 sticky top-0 z-10'>
					<tr>
						{columns.map((col, index) => (
							<th
								key={index} // Using index for key, assuming columns are static
								scope='col'
								className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headerClass}`}>
								{typeof col.key === 'string' ? col.key : col.header}
							</th>
						))}
						{renderRowActions && (
							<th
								scope='col'
								className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headerClass}`}>
								Actions
							</th>
						)}
					</tr>
				</thead>
				<tbody className={`divide-y ${divideClass}`}>
					{data.length > 0 ? (
						data.map((item, index) => (
							<tr
								key={item.id ?? index} // Fallback to index if id not present
								className={`${
									index % 2 === 0 ? rowBgClassEven : rowBgClassOdd
								} ${rowHoverClass} transition-colors duration-150`}>
								{columns.map((col, colIndex) => (
									<td
										key={colIndex}
										className={`px-6 py-4 whitespace-nowrap ${textClass}`}>
										{typeof col.key === 'string'
											? String(item[col.key as keyof T])
											: col.key(item)}
									</td>
								))}
								{renderRowActions && (
									<td className={`px-6 py-4 whitespace-nowrap ${textClass}`}>
										{renderRowActions(item)}
									</td>
								)}
							</tr>
						))
					) : (
						<tr>
							<td
								colSpan={columns.length + (renderRowActions ? 1 : 0)}
								className={`px-6 py-4 text-center ${textClass}`}>
								{emptyMessage}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
