import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ModulesList } from './components/ModulesList';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutInfo from './components/Main/About';
import Marek from './components/chats/marek';
import Wieslaw from './components/chats/wieslaw';
import Karol from "./components/chats/karol";

const App = () => {

	const [toggleDark, setToggleDark] = React.useState(false);

	const cybercasesTheme = createTheme({
		palette: {
			mode: toggleDark ? 'dark' : 'light',
			type: toggleDark ? 'dark' : 'light',
			primary: {
				light: '#97a7eb',
				main: '#7d91e7',
				dark: '#5765a1',
			},
			secondary: {
				light: '#e69ab5',
				main: '#e081a3',
				dark: '#9c5a72',
			},
		},
	});

	if (cybercasesTheme.palette.mode === 'light') {
		cybercasesTheme.palette.background = {
			default: '#fff',
			paper: '#f0f0f0',
		};
	} else {
		cybercasesTheme.palette.background = {
			default: '#18191a',
			paper: '#18191a',
		};
	}

	return (
		<div style={{ background: cybercasesTheme.palette.background.default }}>
			<ThemeProvider theme={cybercasesTheme}>
				<Router>
					<Routes>
						<Route
							path='/'
							element={
								<NavBar
									toggleDark={toggleDark}
									setToggleDark={setToggleDark}
								/>
							}>
							<Route path={'/strona-glowna'} element={<Main />} />
							<Route path={'/moduly'} element={<ModulesList />} />
							<Route path={`/moduly/marek`} element={<Marek />} />
							<Route path={`/moduly/wieslaw`} element={<Wieslaw />} />
							<Route path={`/moduly/karol`} element={<Karol/>} />
							<Route path={'/info'} element={<AboutInfo />}/>
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</div>
	);
};

export default App;
