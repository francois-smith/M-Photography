import React from 'react';
import Navigation from './components/navigation/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio/portfolio-section'
import Theme from './styles/theme';

function App() {
	return (
		<Theme>
			<Router>
				<Navigation />
				<Routes>
					<Route exact path='/' element={<Home/>} />
					<Route path='/about' element={<About/>} />
					<Route path='/portfolio' element={<Portfolio/>} />
					<Route path='/contact' element={<Contact/>} />
				</Routes>
				<Footer />
			</Router>
		</Theme>
	);
}

export default App;
