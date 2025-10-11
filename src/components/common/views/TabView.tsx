/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTable,
	faThLarge,
	faImages,
} from '@fortawesome/free-solid-svg-icons';

interface TabViewProps {
	activeView: string;
	onViewChange: (view: string) => void;
	theme: string;
}

export const TabView: React.FC<TabViewProps> = ({
	activeView,
	onViewChange,
	theme,
}) => {
	const activeClass =
		theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white';
	const inactiveClass =
		theme === 'dark'
			? 'text-gray-300 hover:bg-gray-700'
			: 'text-gray-700 hover:bg-gray-100';

	return (
		<div
			className={`flex rounded-full p-1 space-x-1 ${
				theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
			}`}>
			<button
				onClick={() => onViewChange('table')}
				className={`flex items-center justify-center p-2 rounded-full transition-colors duration-200 ${
					activeView === 'table' ? activeClass : inactiveClass
				}`}>
				<FontAwesomeIcon
					icon={faTable}
					className='w-5 h-5'
				/>
				<span className='sr-only'>Table View</span>
			</button>
			<button
				onClick={() => onViewChange('board')}
				className={`flex items-center justify-center p-2 rounded-full transition-colors duration-200 ${
					activeView === 'board' ? activeClass : inactiveClass
				}`}>
				<FontAwesomeIcon
					icon={faThLarge}
					className='w-5 h-5'
				/>
				<span className='sr-only'>Board View</span>
			</button>
			<button
				onClick={() => onViewChange('gallery')}
				className={`flex items-center justify-center p-2 rounded-full transition-colors duration-200 ${
					activeView === 'gallery' ? activeClass : inactiveClass
				}`}>
				<FontAwesomeIcon
					icon={faImages}
					className='w-5 h-5'
				/>
				<span className='sr-only'>Gallery View</span>
			</button>
		</div>
	);
};
