export type Moduls = {
	string: string;
	id: string;
};

export type Data = {
	title: string;
	specializedSubjects: Moduls[];
	baseSubjects: Moduls[];
	id: string;
};

export interface IData {
	[index: number]: Data;
}
