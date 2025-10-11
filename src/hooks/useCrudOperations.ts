/** @format */

// src/hooks/useCrudOperations.ts
import { useState, useCallback } from 'react';

interface CrudItem {
	id: string; // Hoặc number
	name?: string; // Thêm thuộc tính 'name' để hiển thị trong thông báo
}

interface CrudOperationsHook<T extends CrudItem> {
	items: T[];
	handleAddItem: (newItem: T) => void;
	handleEditItem: (
		id: string,
		updatedFields: Partial<T>,
		itemName?: string
	) => void; // Thêm itemName
	handleDeleteItem: (id: string, itemName?: string) => void; // Thêm itemName
	setItems: React.Dispatch<React.SetStateAction<T[]>>;
}

export const useCrudOperations = <T extends CrudItem>(
	initialItems: T[]
): CrudOperationsHook<T> => {
	const [items, setItems] = useState<T[]>(initialItems);

	const handleAddItem = useCallback((newItem: T) => {
		setItems((prevItems) => [...prevItems, newItem]);
		alert(`Item "${newItem.name || newItem.id}" added successfully.`);
	}, []);

	const handleEditItem = useCallback(
		(id: string, updatedFields: Partial<T>, itemName?: string) => {
			setItems((prevItems) =>
				prevItems.map((item) =>
					item.id === id ? { ...item, ...updatedFields } : item
				)
			);
			const currentItemName =
				itemName || items.find((item) => item.id === id)?.name || id;
			alert(
				`Bạn đang chỉnh sửa mục: "${currentItemName}", ID: "${id}". ` +
					`Các trường được cập nhật: ${JSON.stringify(updatedFields)}`
			);
		},
		[items] // Dependency để truy cập items.find
	);

	const handleDeleteItem = useCallback(
		(id: string, itemName?: string) => {
			const itemToDeleteName =
				itemName || items.find((item) => item.id === id)?.name || id;
			if (
				window.confirm(
					`Bạn có chắc muốn xóa mục: "${itemToDeleteName}", ID: "${id}" không?`
				)
			) {
				setItems((prevItems) => prevItems.filter((item) => item.id !== id));
				alert(`Mục "${itemToDeleteName}", ID: "${id}" đã được xóa thành công.`);
			}
		},
		[items] // Dependency để truy cập items.find
	);

	return {
		items,
		handleAddItem,
		handleEditItem,
		handleDeleteItem,
		setItems,
	};
};
