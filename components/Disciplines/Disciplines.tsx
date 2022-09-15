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
						<h2 className={styles.title}>{title}</h2>
						<div className={styles.moduleWrap}>
							<h3 >
								<div className={styles.stick} />
								<p className={styles.moduleName}>1 модуль</p>
							</h3 >
							<ul>
								{module1.map(({ string, id }) => (
									<li key={id} className={styles.disciplines}>
										{string}
									</li>
								))}
							</ul>
							<div>
								<div className={styles.stick} />
								<h3 className={styles.moduleName}>2 модуль</h3>
							</div>
							<ul>
								{module2.map(({ string, id }) => (
									<li key={id} className={styles.disciplines}>
										{string}
									</li>
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
