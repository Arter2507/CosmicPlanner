/** @format */

// Thay thế bằng URL của Web App GAS mà bạn đã triển khai
const GAS_WEB_APP_URL = import.meta.env.VITE_GAS_WEB_API_URL;
//AKfycbx1CVpcP-1sChG3vSSdb7ASIjIKsXoFK2eHJuOZG11pn6ZgDtryKHGVIIriIO0DQT4

export async function callGasApi<T>(
	action: string,
	data?: Record<string, unknown>
): Promise<T> {
	try {
		const response = await fetch(GAS_WEB_APP_URL, {
			method: 'POST',
			mode: 'cors', // Rất quan trọng để tránh lỗi CORS
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ action, ...data }),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`HTTP error! status: ${response.status}, message: ${errorText}`
			);
		}

		const result = await response.json();
		if (result && result.error) {
			throw new Error(result.error);
		}
		return result as T;
	} catch (error) {
		console.error('Error calling GAS API:', error);
		throw error;
	}
}

// Các hàm cụ thể cho từng module (ví dụ)
import type { Profile } from '../../types/type';

// --- Profile ---
export const getProfileApi = () => callGasApi<Profile>('getProfile');
export const updateProfileApi = (profileData: Partial<Profile>) =>
	callGasApi<boolean>('updateProfile', { data: profileData });
