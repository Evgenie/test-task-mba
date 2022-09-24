import React from 'react';
import styles from './Module.module.scss';
import { Moduls } from '../../types';

interface Props {
	specializedSubjects: Moduls[];
	moduleName: string;
	id: string;
}

export const Module: React.FC<Props> = ({
	specializedSubjects,
	moduleName,
	id,
}) => {
	return (
		<>
			<div className={styles.moduleWrap}>
				<input
					type="checkbox"
					id={`${moduleName}_${id}`}
					name="tab-group"
					className={styles.input}
				/>
				<label htmlFor={`${moduleName}_${id}`} className={styles.tabTitle}>
					<div className={styles.stick} />
					<h3 className={styles.moduleName}>{moduleName}</h3>
				</label>
				<section className={styles.moduleContent}>
					<ul className={styles.disciplinesWrap}>
						{specializedSubjects.map(({ string, id }) => (
							<li key={id} className={styles.disciplines}>
								{string}
							</li>
						))}
					</ul>
				</section>
			</div>
		</>
	);
};

export default Module;
