import { css } from '@emotion/react';
import * as styreneAWeb from '../assets/fonts/styreneAWeb/styreneAWeb.module.css';
export const resets = css`
	${styreneAWeb}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,
	body {
		height: 100%;
		line-height: 1;
		font-family: 'Styrene A Web', 'Segoe UI', Tahoma, Geneva, Verdana,
			sans-serif;
	}
`;

export default resets;
