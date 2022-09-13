import React from 'react';
import { Data } from '../../types';
import styles from './Disciplines.module.scss';

interface Props {
	data: Data[];
}

const Disciplines: React.FC<Props> = ({ data }) => {
	return (
		<>
			{data.map(({ title, specializedSubjects, baseSubjects, id }) => {
				const module1 = baseSubjects.slice(0, 5);
				const module2 = baseSubjects.slice(5, 10);
				return (
					<div key={id}>
						<h2>{title}</h2>
						<div className={styles.moduleWrap}>
							<h3 className={styles.header}>Модуль 1</h3>
							<ul>
								{module1.map(({ string, id }) => (
									<li key={id}>{string}</li>
								))}
							</ul>
							<h3>Модуль 2</h3>
							<ul>
								{module2.map(({ string, id }) => (
									<li key={id}>{string}</li>
								))}
							</ul>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Disciplines;
