import React from 'react';
import styles from './Discriptions.module.scss';

export const Discriptions = () => {
	return (
		<div className={styles.discriptionsWrap}>
			<div className={styles.discription1}>
				<h1 className={styles.discriptionTitle}>Практические модули</h1>
				<p className={styles.discriptionText}>
					Работа над собственными проектами: <br />
					практика групповых взаимодействий, кейс-методы, эссе
				</p>
				<div className={styles.redCorner} />
				<div className={styles.whiteCorner} />
			</div>
			<div className={styles.discription2}>
				<h1 className={styles.discriptionTitle}>Итоговая аттестация</h1>
				<ul className={styles.textWrap}>
					<li className={styles.discriptionText}>
						Бизнес-проектирование (подготовка итоговой аттестационной работы,
						консультирование по бизнес-проектированию)
					</li>
					<li className={styles.discriptionText}>
						Защита итоговой аттестационной работы
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Discriptions;
