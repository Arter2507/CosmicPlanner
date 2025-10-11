/** @format */

// src/pages/GalaxyManagement.tsx
import React from 'react';
// Import component cấp tính năng từ thư mục components/galaxymanagement
// Đổi tên nó thành GalaxyFeaturePage để tránh nhầm lẫn về ngữ cảnh
import { GalaxyManagementPage as GalaxyFeaturePage } from '../components/galaxymanagement/GalaxyManagement';
// import { MainAppLayout } from '../layout/MainAppLayout'; // Ví dụ nếu bạn có một layout chung cho toàn bộ ứng dụng

/**
 * GalaxyManagement Page Component
 *
 * Đây là component cấp trang (page-level component) được sử dụng bởi React Router.
 * Trách nhiệm chính của nó là hiển thị tính năng quản lý Galaxy.
 * Nó sẽ đóng vai trò là một wrapper mỏng, render component chính của tính năng
 * và có thể kết hợp với các layout tổng thể của ứng dụng nếu cần.
 */
export const GalaxyManagementPage: React.FC = () => {
	return (
		// Bạn có thể wrap GalaxyFeaturePage trong một layout component cấp ứng dụng ở đây
		// Ví dụ: <MainAppLayout>
		<GalaxyFeaturePage />
		// </MainAppLayout>
	);
};
