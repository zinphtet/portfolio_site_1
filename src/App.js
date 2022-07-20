import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Style/Theme';
import { Routes, Route ,useLocation} from 'react-router-dom';
import Main from './pages/Main';
import Blog from './pages/Blog';
import MySkill from './pages/MySkill';
import Work from './pages/Work';
import Projects from './pages/Projects';
import { AnimatePresence } from "framer-motion"
function App() {
	const location = useLocation()
	return (
		<ThemeProvider theme={lightTheme}>
			<AppWrapper >
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname} >
					<Route path="/" element={<Main />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/myskill" element={<MySkill />} />
					<Route path="/work" element={<Work />} />
				</Routes>
				</AnimatePresence>
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
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 2rem;
  background-color: ${props=>props.theme.background};
  
`