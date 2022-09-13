export type Moduls = {
	string: string;
	id: string;
};

export interface IModals {
	[index: number]: Moduls;
}

export type Data = {
	title: string;
	specializedSubjects: IModals;
	baseSubjects: IModals;
	id: string;
};
