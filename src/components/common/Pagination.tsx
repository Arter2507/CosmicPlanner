/** @format */

// src/components/common/Pagination.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (pageNumber: number) => void;
	theme: string;
}

export const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	totalItems,
	itemsPerPage,
	onPageChange,
	theme,
}) => {
	if (totalPages <= 1) {
		return null; // Không hiển thị phân trang nếu chỉ có một trang hoặc không có dữ liệu
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

	const textClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
	const bgClass =
		theme === 'dark'
			? 'bg-gray-800 text-white'
			: 'bg-white text-gray-900 border-b border-gray-200';

	return (
		<nav
			className='flex items-center justify-between pt-4'
			aria-label='Pagination'>
			{/* Mobile Pagination */}
			<div className='flex-1 flex justify-between sm:hidden'>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
						theme === 'dark'
							? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
							: 'bg-white text-gray-700 hover:bg-gray-50'
					}`}
					aria-label='Previous'>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className='mr-2'
					/>{' '}
					Previous
				</button>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
						theme === 'dark'
							? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
							: 'bg-white text-gray-700 hover:bg-gray-50'
					}`}
					aria-label='Next'>
					Next{' '}
					<FontAwesomeIcon
						icon={faChevronRight}
						className='ml-2'
					/>
				</button>
			</div>

			{/* Desktop Pagination */}
			<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
				<div>
					<p className={`text-sm ${textClass}`}>
						Showing{' '}
						<span className='font-medium'>
							{totalItems > 0 ? startIndex + 1 : 0}
						</span>{' '}
						to <span className='font-medium'>{endIndex}</span> of{' '}
						<span className='font-medium'>{totalItems}</span> results
					</p>
				</div>
				<div>
					<nav
						className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
						aria-label='Pagination'>
						<button
							onClick={() => onPageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 ${bgClass} text-sm font-medium ${
								theme === 'dark'
									? 'text-gray-300 hover:bg-gray-700'
									: 'text-gray-500 hover:bg-gray-50'
							}`}
							aria-label='Previous'>
							<span className='sr-only'>Previous</span>
							<FontAwesomeIcon
								icon={faChevronLeft}
								className='h-5 w-5'
							/>
						</button>
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i + 1}
								onClick={() => onPageChange(i + 1)}
								className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
									currentPage === i + 1
										? 'z-10 bg-purple-500 border-purple-500 text-white'
										: `${bgClass} ${
												theme === 'dark'
													? 'text-gray-300 hover:bg-gray-700'
													: 'text-gray-700 hover:bg-gray-50'
										  }`
								}`}
								aria-label={`Page ${i + 1}`}>
								{i + 1}
							</button>
						))}
						<button
							onClick={() => onPageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 ${bgClass} text-sm font-medium ${
								theme === 'dark'
									? 'text-gray-300 hover:bg-gray-700'
									: 'text-gray-500 hover:bg-gray-50'
							}`}
							aria-label='Next'>
							<span className='sr-only'>Next</span>
							<FontAwesomeIcon
								icon={faChevronRight}
								className='h-5 w-5'
							/>
						</button>
					</nav>
				</div>
			</div>
		</nav>
	);
};
