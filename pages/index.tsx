import type { GetStaticProps, NextPage } from 'next';
import Disciplines from '../components/Disciplines';
import styles from '../styles/Home.module.scss';
import { Data } from '../types';
import { get5LearningProgram } from '../utils/getLearningProgram';

interface Props {
	data: Data[];
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await get5LearningProgram(
		'https://api-moscow-mba.herokuapp.com/products'
	);
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data },
	};
};

const Home: NextPage<Props> = ({ data }) => {
	return (
		<div className={styles.container}>
			<h1>Специализированные дисциплины</h1>
			<Disciplines data={data} />
		</div>
	);
};

export default Home;
