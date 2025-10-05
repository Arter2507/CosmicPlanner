/** @format */

import { createContext } from 'react';

// Định nghĩa kiểu cho Context
export interface ThemeContextType {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

// Tạo Context với giá trị mặc định undefined
// Fast Refresh sẽ không báo lỗi ở đây vì đây là file TypeScript thuần, không phải JSX/component file
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);
