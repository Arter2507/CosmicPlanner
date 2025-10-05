/** @format */

export interface Profile {
	UserID: number;
	AvatarURL: string;
	Name: string;
	XP: number;
	Coins: number;
	Level: string;
	Rank: string;
}

export interface LevelProgression {
	LevelID: number;
	LevelName: string;
	XPRequired: number;
	TotalAccumulatedXP: number;
	BonusCoins: number;
	BonusXP: number;
	Des?: string;
}

export type RankSymbol =
	| '🟤' // Bronze
	| '⚪' // Silver
	| '🟡' // Gold
	| '🔵' // Platinum
	| '💎' // Diamond
	| '🟪' // Obsidian
	| '⚔️' // Master
	| '👑'; // Legendary

export interface RankProgression {
	RankID: number;
	RankName: string;
	LevelRequired: number;
	MiniumAccumulatedXP: number;
	Symbol: RankSymbol;
	RewardCoins: number;
	Des?: string;
	ColorRank: string;
}

export interface ShopReward {
	ID: number;
	Image: string;
	RewardName: string;
	Coin: number;
	Type: 'Common' | 'Rare' | 'Epic' | 'Legendary';
	Date: string;
	XPBonus: number;
}

export interface Planning {
	PlanID: number;
	PlanningLevel: 'Day' | 'Week' | 'Month' | 'Year';
	Description?: string;
	Type: 'Common' | 'Rare' | 'Epic' | 'Legendary';
	StartDate: string;
	EndDate: string;
	StartHour: string;
	EndHour: string;
	Priority: 'Consider' | 'Low' | 'Medium' | 'High' | 'Very-high';
	Category:
		| 'Personal'
		| 'Work'
		| 'Study'
		| 'Health'
		| 'Finance'
		| 'Other'
		| 'Hobby';
	Status: 'Not started' | 'Pending' | 'In progress' | 'Completed' | 'Cancelled';
	Notes?: string;
	RewardXP: number;
	RewardCoins: number;
}

export interface TodoList {
	ID: number;
	TodoName: string;
	Description?: string;
	DueDate: string;
	StartHour: string;
	EndHour: string;
	Priority: 'Consider' | 'Low' | 'Medium' | 'High' | 'Very-high';
	Status: 'Not started' | 'Pending' | 'In progress' | 'Completed' | 'Cancelled';
	Notes?: string;
	RewardXP: number;
	RewardCoins: number;
}

export interface Tasks {
	TaskID: number;
	TaskName: string;
	Description?: string;
	StartDate: string;
	EndDate: string;
	Status: 'Not started' | 'Doing' | 'Done' | 'Cancelled';
	Notes?: string;
	RewardXP: number;
	RewardCoins: number;
}

export interface Expense {
	PlanID: string;
	Name: string;
	Category:
		| 'Food & Dining'
		| 'Shopping & Personal Expenses'
		| 'Transportaiton'
		| 'Accommodation';
	Amount: number;
	Quantity: number;
	Total: number;
	Des?: string;
	Payment: 'Cash' | 'Bank';
}

export interface Habits {
	HabitID: number;
	HabitName: string;
	Frequency: string; // 'Daily', 'Weekly'
	LastCheckIn: string; // YYYY-MM-DD
	Streak: number;
	RewardXP: number;
	RewardCoins: number;
}

export interface StudyZone {
	ID: number;
	Image: string;
	Subject: string;
	Sources: string;
	StarDate: string;
	EndDate: string;
	StartHour: string;
	EndHour: string;
	Question: string;
	Lab: string;
	Note?: string;
	Review: 'Yes' | 'No';
	ReviewNote?: string;
	Status: 'Not Started' | 'Learning' | 'Complete';
	RewardXP: number;
	RewardCoins: number;
}

export interface DailyJournal {
	ID: string;
	Date: string;
	Temperature: number;
	Title: string;
	Content: string;
	Image: string;
	Emotions: string;
	RewardXP: number;
	RewardCoins: number;
	Note?: string;
}

export interface RelationInformation {
	ID: number;
	PersonNo1: string;
	Birthday1: string;
	PersonNo2: string;
	Birthday2: string;
	StartDate: string;
	Status: string;
	Streak: number;
	Notes?: string;
}

export interface JournalDating {
	ID: number;
	RelationID: number;
	JournalName: string;
	Author: string;
	Date: string;
	Content: string;
	File: string;
	Streak: number;
	RewardXP: number;
	RewardCoins: number;
}

export interface Notes {
	ID: number;
	Content: string;
	Date: string;
}

export interface CalendarEvent {
	id: string;
	title: string;
	start: string; // ISO string
	end: string; // ISO string
	description?: string;
	location?: string;
}
