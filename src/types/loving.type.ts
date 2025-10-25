/** @format */

// FIX: Removed self-import of `LovingInfoState` and `PersonInfo` that was causing declaration conflicts.
export interface PersonInfo {
	name: string;
	nickname: string;
	dob?: Date;
	avatarUrl: string;
}

export type RelationshipStatus =
	| 'dating'
	| 'married'
	| 'acquaintance'
	| 'engaged'
	| 'in_love';

export interface RelationshipInfo {
	startDate?: Date;
	status: RelationshipStatus;
}

export interface LovingInfoState {
	person1: PersonInfo;
	person2: PersonInfo;
	relationship: RelationshipInfo;
}

export type ZodiacSign =
	| 'Aries'
	| 'Taurus'
	| 'Gemini'
	| 'Cancer'
	| 'Leo'
	| 'Virgo'
	| 'Libra'
	| 'Scorpio'
	| 'Sagittarius'
	| 'Capricorn'
	| 'Aquarius'
	| 'Pisces'
	| 'Unknown';

export interface Memory {
	id: number;
	title: string;
	date: Date; // YYYY-MM-DD
	description: string;
}

export interface ZodiacSignDisplayProps {
	sign: ZodiacSign;
}

export interface MemoriesProps {
	memories: Memory[];
	onAdd: () => void;
	onEdit: (memory: Memory) => void;
	onDelete: (id: number) => void;
}

export interface MemoryDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (memory: Omit<Memory, 'id'> & { id?: number }) => void;
	memory?: Memory | null;
}

export interface PersonEditDialogProps {
	isOpen: boolean;
	onClose: () => void;
	person: PersonInfo;
	onSave: (updatedPerson: PersonInfo) => void;
	personKey: 'person1' | 'person2';
}
