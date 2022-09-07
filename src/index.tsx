import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './epics/App/App';
import reportWebVitals from './reportWebVitals';
import { css, Global, ThemeProvider } from '@emotion/react';
import themes, { resets } from './themes';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={themes}>
			<Global styles={resets || css``} />
			<App sizeId={'desktop'} />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
