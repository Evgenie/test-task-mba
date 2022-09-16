import React from 'react';
import { Data } from '../../types';
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
							<div className={styles.stickWrap}>
								<div className={styles.stick} />
								<h3 className={styles.moduleName}>1 модуль</h3>
							</div>
							<ul className={styles.disciplinesWrap}>
								{specializedSubjects.map(({ string, id }) => (
									<li key={id} className={styles.disciplines}>
										{string}
									</li>
								))}
							</ul>
							<div className={styles.stickWrap}>
								<div className={styles.stick} />
								<h3 className={styles.moduleName}>2 модуль</h3>
							</div>
							<ul className={styles.disciplinesWrap}>
								{specializedSubjects.map(({ string, id }) => (
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
