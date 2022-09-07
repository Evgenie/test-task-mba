import { useTheme } from '@emotion/react';
import React from 'react';
import { TElementProps } from '../../definitions';
import { CWrap } from './App.style';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
	//@ts-ignore
	const theme = { ...useTheme().App };
	return (
		<CWrap sizeId={'desktop'} theme={theme.cwrap}>
			Hello World!
		</CWrap>
	);
};

export default App;
