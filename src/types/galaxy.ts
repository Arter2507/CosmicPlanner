/** @format */

//Main Interface For Galaxy
export interface Galaxy {
	id: string;
	name: string;
	type: string;
	constellation: string;
	distance: string; // e.g., "2.5 Mly"
	stars: string; // e.g., "200 Billion"
	discovered: string; // Year
	imageUrl?: string; // Optional image URL for gallery view
	status?: 'Active' | 'Archived' | 'Pending'; // For gallery/board view status
	dateCreated?: string; // For gallery/board view date
}

//Props for BoardView
export interface BoardViewProps {
	galaxies: Galaxy[];
	theme: string;
	textClass: string;
	hoverClass: string;
}

//Props for TableView
export interface TableViewProps {
	galaxies: Galaxy[];
	theme: string;
	textClass: string;
	hoverClass: string;
}

//Props for GallaryView
export interface GalleryViewProps {
	galaxies: Galaxy[];
	theme: string;
	textClass: string;
}
