import React from 'react';
import './App.css';
import Header from './components/Header.js';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/index';
import FeaturedProjects from './pages/featuredProjects';
import Resume from './pages/resume';
import WorkTermOne from './pages/workTermOne';
import StandardFooter from './components/StandardFooter';

function App() {
	return (
		// Routing for website, order of routing in this file does not determine link order.
		<Router>
			<Header></Header>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/featuredProjects' element={<FeaturedProjects />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/co-op/s23WorkTerm' element={<WorkTermOne />} />
			</Routes>
			<StandardFooter></StandardFooter>
		</Router>
	);
}

export default App;
