/** @format */

// src/pages/TablePage.tsx
import React from 'react';

const TablePage: React.FC = () => {
	const mockData = [
		{
			id: 1,
			name: 'Hành tinh Xylos',
			type: 'Đá',
			population: '1.2 Tỷ',
			status: 'Đang khai thác',
		},
		{
			id: 2,
			name: 'Sao chổi Halley',
			type: 'Băng',
			population: '0',
			status: 'Quan sát',
		},
		{
			id: 3,
			name: 'Thiên hà Andromeda',
			type: 'Xoắn ốc',
			population: '200 Tỷ',
			status: 'Chưa thăm dò',
		},
		{
			id: 4,
			name: 'Tinh vân Orion',
			type: 'Khí',
			population: 'Không có',
			status: 'Nghiên cứu',
		},
	];

	return (
		<div>
			<p className='text-lg mb-4 dark:text-black text-gray-700'>
				Đây là trang quản lý các thiên thể trong vũ trụ của bạn.
			</p>

			<div className='overflow-x-auto rounded-lg shadow-md'>
				<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
					<thead className='bg-gray-50 dark:bg-gray-700'>
						<tr>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
								ID
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
								Tên
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
								Loại
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
								Dân số
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
								Trạng thái
							</th>
							<th
								scope='col'
								className='relative px-6 py-3'>
								<span className='sr-only'>Actions</span>
							</th>
						</tr>
					</thead>
					<tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
						{mockData.map((item) => (
							<tr
								key={item.id}
								className='hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150'>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50'>
									{item.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>
									{item.name}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>
									{item.type}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>
									{item.population}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                        ${
																					item.status === 'Đang khai thác'
																						? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100'
																						: item.status === 'Quan sát'
																						? 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100'
																						: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
																				}`}>
										{item.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
									<a
										href='#'
										className='text-indigo-600 hover:text-indigo-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-150'>
										Sửa
									</a>
									<a
										href='#'
										className='ml-4 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-150'>
										Xóa
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{/* </MainContentLayout> */}
		</div>
	);
};

export default TablePage;
