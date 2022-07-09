import React from 'react';
import Navigation from './components/navigation/navbar';
import Footer from './components/footer';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';  
import Home from './pages/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio-section'
import Theme from './styles/theme';

function App() {
	return (
		<Theme>
			<Router>
				<Navigation />
				<Routes>
					<Route render exact path='/' element={<Home/>} />
					<Route exact path='/about'  element={<About/>} />
					<Route exact path='/portfolio' element={<Portfolio/>} />
					<Route exact path='/contact' element={<Contact/>} />
				</Routes>
				<Footer />
			</Router>
		</Theme>
	);
}

export default App;
