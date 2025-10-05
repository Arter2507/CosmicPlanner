/** @format */

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext từ file gốc

/**
 * Custom hook để truy cập giá trị theme từ ThemeContext.
 * Đảm bảo hook này được sử dụng bên trong một ThemeProvider.
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
