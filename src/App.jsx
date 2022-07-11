import React from 'react';
import Navigation from './components/navigation/navbar';
import Footer from './components/footer';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';  
import Home from './pages/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import PortfolioStudio from './pages/portfolio/portfolio-studio'
import PortfolioLocation from './pages/portfolio/portfolio-location'
import PortfolioSection from './pages/portfolio/portfolio-section';
import Theme from './styles/theme';

function App() {
	return (
		<Theme>
			<Router>
				<Navigation />
				<Routes>
					<Route render exact path='/' element={<Home/>} />
					<Route exact path='/about'  element={<About/>} />
					<Route exact path='/portfolio/location' element={<PortfolioLocation/>} />
					<Route exact path='/portfolio/studio' element={<PortfolioStudio/>} />
					<Route exact path='/portfolio/:type' element={<PortfolioSection/>} />
					<Route exact path='/contact' element={<Contact/>} />
				</Routes>
				<Footer />
			</Router>
		</Theme>
	);
}

export default App;
