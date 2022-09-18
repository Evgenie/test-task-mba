import React from 'react';
import { Data } from '../../types';
import Module from '../Module';
import styles from './Disciplines.module.scss';

interface Props {
	data: Data[];
}

export const Disciplines: React.FC<Props> = ({ data }) => {
	return (
		<>
			{data.map(({ title, specializedSubjects, id }) => {
				return (
					<div key={id} className={styles.programWrap}>
						<h2 className={styles.title}>{title}</h2>
						<div className={styles.modules}>
							<Module
								specializedSubjects={specializedSubjects}
								moduleName={'1 модуль'}
							/>
							<Module
								specializedSubjects={specializedSubjects}
								moduleName={'2 модуль'}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Disciplines;
