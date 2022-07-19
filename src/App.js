import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Style/Theme';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Blog from './pages/Blog';
import MySkill from './pages/MySkill';
import Work from './pages/Work';
import Mp3 from './components/Mp3';
function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<AppWrapper >
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/myskill" element={<MySkill />} />
					<Route path="/work" element={<Work />} />
				</Routes>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;

// font-family: 'Cinzel', serif;
// font-family: 'Lobster Two', cursive;
const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 2rem;
  background-color: ${props=>props.theme.background};
`