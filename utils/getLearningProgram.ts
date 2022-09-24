import { Data, IData } from '../types';

export const get5LearningProgram = async (url: string): Promise<IData> => {
	const res = await fetch(url);
	const json = await res.json();
	const data = json.slice(0, 5).map((item: Data) => {
		const { title, specializedSubjects, baseSubjects, id } = item;
		return {
			title,
			specializedSubjects,
			baseSubjects,
			id,
		};
	});

	return data;
};
